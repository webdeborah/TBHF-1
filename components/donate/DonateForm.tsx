"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const DonateForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [honorMemory, setHonorMemory] = useState(false);
  const [honorName, setHonorName] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const predefinedAmounts = ["25", "50", "100", "250", "500", "1000"];

  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount(amount);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setCustomAmount(value);
    setDonationAmount("custom");
  };

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep(2);
    // No scrolling - we'll just update the UI in place
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 1500);
  };

  const finalAmount =
    donationAmount === "custom" ? customAmount : donationAmount;

  return (
    <section
      id="donate-form"
      ref={ref}
      className="py-16 md:py-24 bg-[var(--bg-secondary)]"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-neue-kabel font-bold text-3xl md:text-4xl mb-4">
              Make Your Donation
            </h2>
            <p className="font-helvetica text-[var(--text-secondary)] max-w-2xl mx-auto">
              Your tax-deductible gift helps us preserve Black history for
              future generations. All donations go directly to supporting our
              programs and initiatives.
            </p>
          </motion.div>

          {!success ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-[var(--bg-primary)] p-8 rounded-lg shadow-md">
                {/* Progress indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <div
                      className={`font-helvetica font-bold ${step === 1 ? "text-[var(--primary)]" : "text-gray-400"}`}
                    >
                      1. Donation Details
                    </div>
                    <div className="h-0.5 w-8 bg-gray-300"></div>
                    <div
                      className={`font-helvetica font-bold ${step === 2 ? "text-[var(--primary)]" : "text-gray-400"}`}
                      id="payment-section"
                    >
                      2. Payment Information
                    </div>
                  </div>
                </div>

                {step === 1 ? (
                  <div>
                    <div className="mb-8">
                      <label className="block font-helvetica font-bold mb-3">
                        Select Donation Type
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setDonationType("one-time")}
                          className={`py-3 px-4 border rounded-md font-helvetica transition-colors ${
                            donationType === "one-time"
                              ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/5"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          One-Time Donation
                        </button>
                        <button
                          type="button"
                          onClick={() => setDonationType("monthly")}
                          className={`py-3 px-4 border rounded-md font-helvetica transition-colors ${
                            donationType === "monthly"
                              ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/5"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          Monthly Donation
                        </button>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block font-helvetica font-bold mb-3">
                        Select Donation Amount
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                        {predefinedAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => handleAmountSelect(amount)}
                            className={`py-3 px-4 border rounded-md font-helvetica transition-colors ${
                              donationAmount === amount
                                ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/5"
                                : "border-gray-300 text-gray-700 hover:border-gray-400"
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Custom Amount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          onClick={() => setDonationAmount("custom")}
                          className={`w-full pl-8 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${
                            donationAmount === "custom"
                              ? "border-[var(--primary)] bg-[var(--primary)]/5"
                              : "border-gray-300"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          id="anonymous"
                          checked={isAnonymous}
                          onChange={() => setIsAnonymous(!isAnonymous)}
                          className="h-5 w-5 text-[var(--primary)] border-gray-300 rounded focus:ring-[var(--primary)]"
                        />
                        <label
                          htmlFor="anonymous"
                          className="ml-2 font-helvetica"
                        >
                          Make this donation anonymous
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="honor"
                          checked={honorMemory}
                          onChange={() => setHonorMemory(!honorMemory)}
                          className="h-5 w-5 text-[var(--primary)] border-gray-300 rounded focus:ring-[var(--primary)]"
                        />
                        <label htmlFor="honor" className="ml-2 font-helvetica">
                          Make this donation in honor or memory of someone
                        </label>
                      </div>
                      {honorMemory && (
                        <div className="mt-4">
                          <input
                            type="text"
                            placeholder="Name of honoree"
                            value={honorName}
                            onChange={(e) => setHonorName(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                          />
                        </div>
                      )}
                    </div>

                    <div className="text-right">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-6 py-3 bg-[var(--primary)] text-white rounded-md font-helvetica font-bold hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-70 disabled:hover:bg-[var(--primary)] disabled:cursor-not-allowed"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-8 p-4 bg-[var(--bg-secondary)] rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-helvetica text-sm text-[var(--text-light)]">
                            {donationType === "one-time"
                              ? "One-Time Donation"
                              : "Monthly Donation"}
                          </div>
                          <div className="font-neue-kabel font-bold text-2xl">
                            ${finalAmount}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-helvetica font-medium"
                        >
                          Edit
                        </button>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block font-helvetica font-bold mb-3">
                        Personal Information
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            name="firstName"
                            value={personalInfo.firstName}
                            onChange={handlePersonalInfoChange}
                            placeholder="First Name *"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="lastName"
                            value={personalInfo.lastName}
                            onChange={handlePersonalInfoChange}
                            placeholder="Last Name *"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            name="email"
                            value={personalInfo.email}
                            onChange={handlePersonalInfoChange}
                            placeholder="Email Address *"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            value={personalInfo.phone}
                            onChange={handlePersonalInfoChange}
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block font-helvetica font-bold mb-3">
                        Payment Method
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("card")}
                          className={`py-3 px-4 border rounded-md font-helvetica transition-colors ${
                            paymentMethod === "card"
                              ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/5"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          Credit Card
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("paypal")}
                          className={`py-3 px-4 border rounded-md font-helvetica transition-colors ${
                            paymentMethod === "paypal"
                              ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/5"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          PayPal
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("apple")}
                          className={`py-3 px-4 border rounded-md font-helvetica transition-colors ${
                            paymentMethod === "apple"
                              ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/5"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          Apple Pay
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("crypto")}
                          className={`py-3 px-4 border rounded-md font-helvetica transition-colors ${
                            paymentMethod === "crypto"
                              ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/5"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          Crypto
                        </button>
                      </div>

                      {/* Credit card form - simplified version for illustration */}
                      {paymentMethod === "card" && (
                        <div className="space-y-4">
                          <div>
                            <input
                              type="text"
                              placeholder="Card Number"
                              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                placeholder="CVC"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Other payment methods would include their specific forms */}
                      {paymentMethod !== "card" && (
                        <div className="p-4 bg-gray-100 rounded-md text-center text-[var(--text-secondary)]">
                          You&apos;ll be redirected to complete your donation
                          using{" "}
                          {paymentMethod === "paypal"
                            ? "PayPal"
                            : paymentMethod === "apple"
                              ? "Apple Pay"
                              : "Cryptocurrency"}
                          .
                        </div>
                      )}
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="h-5 w-5 text-[var(--primary)] border-gray-300 rounded focus:ring-[var(--primary)]"
                        />
                        <label
                          htmlFor="consent"
                          className="ml-2 font-helvetica text-sm"
                        >
                          I agree that my information will be processed
                          according to the Privacy Policy. I understand that my
                          donation is tax-deductible to the extent allowed by
                          law. *
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-helvetica font-medium"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3 bg-[var(--primary)] text-white rounded-md font-helvetica font-bold hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-70 flex items-center justify-center"
                      >
                        {loading ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          `Complete ${donationType === "one-time" ? "Donation" : "Subscription"}`
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--bg-primary)] p-8 rounded-lg shadow-md text-center"
              id="payment"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-neue-kabel font-bold text-2xl mb-4">
                Thank You for Your Donation!
              </h3>
              <p className="font-helvetica text-[var(--text-secondary)] mb-6 max-w-lg mx-auto">
                Your generous contribution of ${finalAmount}{" "}
                {donationType === "monthly" ? "per month " : ""}will help us
                continue our mission to preserve Black history for future
                generations. A receipt has been sent to your email.
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-block font-helvetica font-bold text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors mr-6"
                >
                  Return to Home Page
                </Link>
                <a
                  href="#"
                  className="inline-block font-helvetica font-bold underline text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  View Receipt
                </a>
              </div>
            </motion.div>
          )}

          <div className="mt-8 text-center">
            <p className="font-helvetica text-sm text-[var(--text-light)]">
              The Black History Foundation is a registered 501(c)(3) nonprofit
              organization. All donations are tax-deductible to the extent
              allowed by law.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <img src="/images/visa.png" alt="Visa" className="h-6" />
              <img
                src="/images/mastercard.png"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="/images/amex.png"
                alt="American Express"
                className="h-6"
              />
              <img src="/images/paypal.png" alt="PayPal" className="h-6" />
              <img
                src="/images/apple-pay.png"
                alt="Apple Pay"
                className="h-6"
              />
              <img src="/images/bitcoin.png" alt="Bitcoin" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateForm;
