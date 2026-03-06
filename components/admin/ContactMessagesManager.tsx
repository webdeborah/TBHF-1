"use client";

import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: { seconds: number } | null;
  status: string;
}

const STATUS_OPTIONS = ["pending", "reviewed", "contacted", "closed"];

export default function ContactMessagesManager() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [formState, setFormState] = useState<Partial<ContactMessage>>({});

  const fetchMessages = async () => {
    setLoading(true);
    if (!db) {
      setLoading(false);
      return;
    }
    try {
      const q = query(
        collection(db, "contactMessages"),
        orderBy("submittedAt", "desc")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      })) as ContactMessage[];
      setMessages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleStatusChange = async (id: string, status: string) => {
    if (!db) return;
    try {
      await updateDoc(doc(db, "contactMessages", id), { status });
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, status } : m))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const startEdit = (m: ContactMessage) => {
    setSelectedId(m.id);
    setEditingId(m.id);
    setFormState({
      name: m.name,
      email: m.email,
      phone: m.phone,
      subject: m.subject,
      message: m.message,
      status: m.status,
    });
  };

  const handleSave = async () => {
    if (!editingId || !db) return;
    setSaving(true);
    try {
      const payload = {
        name: formState.name,
        email: formState.email,
        phone: formState.phone ?? "",
        subject: formState.subject ?? "",
        message: formState.message ?? "",
        status: formState.status ?? "pending",
      };
      await updateDoc(doc(db, "contactMessages", editingId), payload);
      setMessages((prev) =>
        prev.map((m) => (m.id === editingId ? { ...m, ...payload } : m))
      );
      setEditingId(null);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message? This cannot be undone.")) return;
    if (!db) return;
    try {
      await deleteDoc(doc(db, "contactMessages", id));
      setMessages((prev) => prev.filter((m) => m.id !== id));
      if (selectedId === id) setSelectedId(null);
      if (editingId === id) setEditingId(null);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredMessages =
    statusFilter === "all"
      ? messages
      : messages.filter((m) => m.status === statusFilter);

  const selected = messages.find((m) => m.id === selectedId);

  return (
    <div>
      <h2 className="font-neue-kabel font-bold text-xl mb-4">
        Contact Messages
      </h2>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
        >
          <option value="all">All statuses</option>
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="py-8 text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 font-helvetica font-bold">Name</th>
                  <th className="py-3 font-helvetica font-bold">Subject</th>
                  <th className="py-3 font-helvetica font-bold">Status</th>
                  <th className="py-3 font-helvetica font-bold">Date</th>
                  <th className="py-3 font-helvetica font-bold w-24">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMessages.map((m) => (
                  <tr
                    key={m.id}
                    className={`border-b border-gray-100 cursor-pointer ${
                      selectedId === m.id ? "bg-gray-50" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedId(m.id)}
                  >
                    <td className="py-3 font-helvetica">{m.name}</td>
                    <td className="py-3 font-helvetica text-sm max-w-[120px] truncate">
                      {m.subject}
                    </td>
                    <td className="py-3">
                      <select
                        value={m.status}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleStatusChange(m.id, e.target.value);
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm border border-gray-300 rounded px-2 py-1"
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-3 font-helvetica text-sm text-gray-600">
                      {m.submittedAt
                        ? new Date(
                            m.submittedAt.seconds * 1000
                          ).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="py-3" onClick={(e) => e.stopPropagation()}>
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(m)}
                          className="font-helvetica text-sm text-[var(--primary)] hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(m.id)}
                          className="font-helvetica text-sm text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            {selected ? (
              editingId === selected.id ? (
                <div className="space-y-4">
                  <h3 className="font-neue-kabel font-bold text-lg">
                    Edit Message
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="block font-helvetica font-bold mb-1 text-sm">
                        Name
                      </label>
                      <input
                        value={formState.name ?? ""}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, name: e.target.value }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-helvetica font-bold mb-1 text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formState.email ?? ""}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-helvetica font-bold mb-1 text-sm">
                        Phone
                      </label>
                      <input
                        value={formState.phone ?? ""}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-helvetica font-bold mb-1 text-sm">
                        Subject
                      </label>
                      <input
                        value={formState.subject ?? ""}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            subject: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-helvetica font-bold mb-1 text-sm">
                        Message
                      </label>
                      <textarea
                        value={formState.message ?? ""}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-helvetica font-bold mb-1 text-sm">
                        Status
                      </label>
                      <select
                        value={formState.status ?? "pending"}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            status: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={handleSave}
                      disabled={
                        saving ||
                        !formState.name ||
                        !formState.email ||
                        !formState.subject ||
                        !formState.message
                      }
                      className="px-4 py-2 bg-[var(--primary)] text-white font-helvetica font-bold rounded-md hover:bg-[var(--primary-dark)] disabled:opacity-50 text-sm"
                    >
                      {saving ? "Saving..." : "Save"}
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 font-helvetica font-bold rounded-md hover:bg-gray-300 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-neue-kabel font-bold text-lg">
                      {selected.name}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => startEdit(selected)}
                        className="font-helvetica text-sm text-[var(--primary)] hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(selected.id)}
                        className="font-helvetica text-sm text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="font-helvetica text-sm">
                    <span className="font-bold">Email:</span> {selected.email}
                  </p>
                  <p className="font-helvetica text-sm">
                    <span className="font-bold">Phone:</span>{" "}
                    {selected.phone || "-"}
                  </p>
                  <p className="font-helvetica text-sm">
                    <span className="font-bold">Subject:</span>{" "}
                    {selected.subject}
                  </p>
                  <p className="font-helvetica text-sm">
                    <span className="font-bold">Status:</span> {selected.status}
                  </p>
                  <div>
                    <p className="font-helvetica font-bold text-sm mb-1">
                      Message
                    </p>
                    <p className="font-helvetica text-sm whitespace-pre-wrap">
                      {selected.message}
                    </p>
                  </div>
                </div>
              )
            ) : (
              <p className="text-gray-500 font-helvetica">
                Select a message to view details.
              </p>
            )}
          </div>
        </div>
      )}

      <p className="mt-4 text-sm text-gray-500 font-helvetica">
        {filteredMessages.length} message
        {filteredMessages.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
