"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FF9A3C] via-[#FFB347] to-[#FFCBA4] pt-40 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[20%] left-[10%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite]">
            ⭐
          </span>
          <span className="absolute top-[25%] right-[12%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite_1s]">
            🌟
          </span>
          <span className="absolute bottom-[25%] right-[8%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite_0.5s]">
            🐚
          </span>
          <span className="absolute bottom-[20%] left-[8%] text-[2.5rem] animate-[float_4s_ease-in-out_infinite_1.5s]">
            🐟
          </span>
        </div>
        <div className="max-w-[600px] mx-auto px-6">
          <h1 className="text-[clamp(2.5rem,6vw,3.5rem)] font-['Baloo_2'] text-[#2C3E50] mb-4 [text-shadow:2px_2px_0_rgba(255,255,255,0.5)]">
            Contact Us
          </h1>
          <p className="text-xl text-[#2C3E50]/80">
            We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-b from-[#FFCBA4] via-30% to-[#FFF8F0] py-16">
        <div className="max-w-[600px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] max-md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <span className="text-6xl block mb-4">🎉</span>
                <h3 className="text-2xl font-['Baloo_2'] text-[#FF8C42] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#636E72]">
                  Thank you for reaching out. We&apos;ll get back to you soon!
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-['Baloo_2'] font-semibold text-[#2C3E50]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-4 px-5 border-2 border-[#FFCBA4] rounded-2xl font-['Quicksand'] text-base transition-all duration-300 bg-[#FFF8F0] focus:outline-none focus:border-[#FF8C42] focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,140,66,0.1)]"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-['Baloo_2'] font-semibold text-[#2C3E50]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-4 px-5 border-2 border-[#FFCBA4] rounded-2xl font-['Quicksand'] text-base transition-all duration-300 bg-[#FFF8F0] focus:outline-none focus:border-[#FF8C42] focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,140,66,0.1)]"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-['Baloo_2'] font-semibold text-[#2C3E50]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full py-4 px-5 border-2 border-[#FFCBA4] rounded-2xl font-['Quicksand'] text-base transition-all duration-300 bg-[#FFF8F0] min-h-[140px] resize-y focus:outline-none focus:border-[#FF8C42] focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,140,66,0.1)]"
                    placeholder="Your message..."
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="py-4 px-8 bg-gradient-to-br from-[#FF8C42] to-[#FF6B35] text-white font-['Baloo_2'] font-bold text-lg border-none rounded-full cursor-pointer shadow-[0_6px_20px_rgba(255,107,53,0.4)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(255,107,53,0.5)]"
                >
                  Send Message ✨
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
