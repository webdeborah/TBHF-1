"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../common/SectionHeading";

const CruiseRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cabinType: "",
    guests: "2",
    specialRequests: "",
    heardFrom: "",
    agreeToTerms: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
  };

  return (
    <section
      id="registration"
      className="py-20 bg-gradient-to-b from-ocean to-white"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            subtitle="Book Your Experience"
            title="Reserve Your Cabin"
            description="Secure your place on our Black History Caribbean Cruise. Early registration is recommended as cabins are limited and tend to sell out quickly."
            alignment="center"
          />
        </AnimatedSection>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Cabin information sidebar */}
              <div className="lg:col-span-2 bg-navy p-8">
                <h3 className="font-neue-kabel font-bold text-2xl text-white mb-6">
                  Cabin Options
                </h3>

                <div className="space-y-6">
                  <div className="bg-navy-light bg-opacity-20 rounded-lg p-4 border border-white border-opacity-20">
                    <h4 className="font-neue-kabel font-bold text-lg text-white mb-2">
                      Interior Cabin
                    </h4>
                    <p className="font-helvetica text-white text-opacity-90 mb-3">
                      Comfortable accommodations with all cruise amenities
                    </p>
                    <p className="font-neue-kabel font-bold text-xl text-white">
                      $2,499{" "}
                      <span className="text-sm font-helvetica font-normal">
                        per person
                      </span>
                    </p>
                  </div>

                  <div className="bg-navy-light bg-opacity-20 rounded-lg p-4 border border-white border-opacity-20">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-neue-kabel font-bold text-lg text-white mb-2">
                          Ocean View
                        </h4>
                        <p className="font-helvetica text-white text-opacity-90 mb-3">
                          All amenities plus a window with ocean views
                        </p>
                        <p className="font-neue-kabel font-bold text-xl text-white">
                          $2,999{" "}
                          <span className="text-sm font-helvetica font-normal">
                            per person
                          </span>
                        </p>
                      </div>
                      <div className="bg-secondary text-navy font-bold text-xs uppercase py-1 px-2 rounded">
                        Popular
                      </div>
                    </div>
                  </div>

                  <div className="bg-navy-light bg-opacity-20 rounded-lg p-4 border border-white border-opacity-20">
                    <h4 className="font-neue-kabel font-bold text-lg text-white mb-2">
                      Balcony Suite
                    </h4>
                    <p className="font-helvetica text-white text-opacity-90 mb-3">
                      Spacious suite with private balcony and premium amenities
                    </p>
                    <p className="font-neue-kabel font-bold text-xl text-white">
                      $3,699{" "}
                      <span className="text-sm font-helvetica font-normal">
                        per person
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white border-opacity-20">
                  <h4 className="font-neue-kabel font-medium text-lg text-white mb-4">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "7-day, 6-night accommodations",
                      "All meals and non-alcoholic beverages",
                      "All scheduled activities and excursions",
                      "Educational programs and workshops",
                      "Evening entertainment and cultural events",
                      "Port fees and taxes",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-white font-helvetica"
                      >
                        <svg
                          className="h-5 w-5 mr-2 mt-0.5 text-secondary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Registration form */}
              <div className="lg:col-span-3 p-8">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col items-center justify-center text-center py-8"
                  >
                    <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center mb-6">
                      <svg
                        className="h-10 w-10 text-white"
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
                    <h3 className="font-neue-kabel font-bold text-2xl text-navy mb-4">
                      Registration Received!
                    </h3>
                    <p className="font-helvetica text-lg mb-6 max-w-md">
                      Thank you for your interest in our Black History Caribbean
                      Cruise. We&apos;ll contact you within 48 hours to confirm
                      your reservation.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="font-helvetica font-bold px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                    >
                      Register Another Person
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-neue-kabel font-bold text-2xl text-navy mb-6">
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block font-helvetica font-medium mb-1 text-navy"
                        >
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-helvetica font-medium mb-1 text-navy"
                        >
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-helvetica font-medium mb-1 text-navy"
                        >
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="heardFrom"
                          className="block font-helvetica font-medium mb-1 text-navy"
                        >
                          How did you hear about us?
                        </label>
                        <select
                          id="heardFrom"
                          name="heardFrom"
                          value={formData.heardFrom}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select an option</option>
                          <option value="website">Website</option>
                          <option value="social">Social Media</option>
                          <option value="friend">Friend/Family</option>
                          <option value="email">Email</option>
                          <option value="event">TBHF Event</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <h3 className="font-neue-kabel font-bold text-2xl text-navy mb-6">
                      Booking Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="cabinType"
                          className="block font-helvetica font-medium mb-1 text-navy"
                        >
                          Cabin Type*
                        </label>
                        <select
                          id="cabinType"
                          name="cabinType"
                          value={formData.cabinType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select a cabin type</option>
                          <option value="interior">
                            Interior Cabin ($2,499/person)
                          </option>
                          <option value="oceanview">
                            Ocean View ($2,999/person)
                          </option>
                          <option value="balcony">
                            Balcony Suite ($3,699/person)
                          </option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="guests"
                          className="block font-helvetica font-medium mb-1 text-navy"
                        >
                          Number of Guests*
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label
                        htmlFor="specialRequests"
                        className="block font-helvetica font-medium mb-1 text-navy"
                      >
                        Special Requests or Accommodations
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Dietary restrictions, accessibility needs, etc."
                      ></textarea>
                    </div>

                    <div className="mb-8">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          required
                          className="mt-1 mr-2"
                        />
                        <span className="font-helvetica text-sm text-navy">
                          I agree to the terms and conditions, including the
                          cancellation policy. I understand that a $500 deposit
                          per person is required to secure my reservation, with
                          full payment due 90 days prior to departure.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full font-helvetica font-bold px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                    >
                      Registration Coming Soon
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-helvetica mb-6 text-navy max-w-2xl mx-auto">
            Have questions about the cruise? Contact our dedicated cruise
            coordinator for more information.
          </p>
          <a
            href="mailto:cruise@tbhf.org"
            className="inline-flex items-center font-helvetica font-medium text-primary hover:text-primary-dark transition-colors"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            cruise@tbhf.org
          </a>
          <span className="mx-4" />
          <a
            href="tel:+1-800-555-TBHF"
            className="inline-flex items-center font-helvetica font-medium text-primary hover:text-primary-dark transition-colors"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            1-800-555-TBHF
          </a>
        </div>
      </div>
    </section>
  );
};

export default CruiseRegistration;
