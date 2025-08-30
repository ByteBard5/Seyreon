import React, { useState } from "react";
import confetti from "canvas-confetti";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    helpType: "",
    customHelp: "",
    budget: "",
    message: "",
  });

  const [showCustomHelp, setShowCustomHelp] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "helpType") setShowCustomHelp(value.includes("Other"));
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const res = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        setSubmitStatus("Message sent successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          helpType: "",
          customHelp: "",
          budget: "",
          message: "",
        });
        setShowCustomHelp(false);
      } else {
        setSubmitStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("Something went wrong. Try again.");
    }

    setIsSubmitting(false);
  };

  const inputFadeIn =
    "transition-opacity duration-700 ease-in opacity-0 animate-fadeIn";
  const animate = "opacity-100";

  return (
    <div className="-mt-[100px] text-white bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29]">
      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section className="relative h-auto lg:h-[calc(100vh+100px)] pt-36 lg:pt-[100px] pb-20 flex flex-col justify-center items-center text-center px-4 overflow-visible">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact Seyreon
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Let’s connect and build something that works while you sleep. Fill
            out the form and we’ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a2d]/60 backdrop-blur-md border border-purple-700/30 rounded-xl p-8 shadow-lg space-y-6 transition duration-300"
        >
          {/* Full Name */}
          <div className={`${inputFadeIn} ${animate}`}>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#121218] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div className={`${inputFadeIn} ${animate}`}>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#121218] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>

          {/* Phone */}
          <div className={`${inputFadeIn} ${animate}`}>
            <label className="block text-sm font-medium mb-1">
              Phone (with Country Code)
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91..."
              className="w-full bg-[#121218] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>

          {/* Help Type Dropdown */}
          <div className={`${inputFadeIn} ${animate}`}>
            <label className="block text-sm font-medium mb-1">
              What Do You Need Help With?
            </label>
            <select
              name="helpType"
              required
              value={formData.helpType}
              onChange={handleChange}
              className="w-full bg-[#121218] border border-gray-700 rounded-md px-4 py-2 text-white"
            >
              <option value="">-- Select --</option>
              <option value="AI Assistant (Chat / Call)">
                AI Assistant (Chat / Call)
              </option>
              <option value="Business Automation Workflows">
                Business Automation Workflows
              </option>
              <option value="Referral / Loyalty System">
                Referral / Loyalty System
              </option>
              <option value="Custom System">Custom System</option>
              <option value="Other (Type Below)">Other (Type Below)</option>
            </select>
          </div>

          {/* Custom Help Text Area */}
          {showCustomHelp && (
            <div className={`${inputFadeIn} ${animate}`}>
              <label className="block text-sm font-medium mb-1">
                Describe what you need
              </label>
              <textarea
                name="customHelp"
                value={formData.customHelp}
                onChange={handleChange}
                rows={3}
                className="w-full bg-[#121218] border border-gray-700 rounded-md px-4 py-2 text-white"
              />
            </div>
          )}

          {/* Budget */}
          <div className={`${inputFadeIn} ${animate}`}>
            <label className="block text-sm font-medium mb-1">
              Estimated Budget
            </label>
            <input
              type="text"
              name="budget"
              required
              placeholder="e.g., $2000–$5000"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-[#121218] border border-gray-700 rounded-md px-4 py-2 text-white"
            />
          </div>

          {/* Optional Message */}
          <div className={`${inputFadeIn} ${animate}`}>
            <label className="block text-sm font-medium mb-1">
              Additional Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-[#121218] border border-gray-700 rounded-md px-4 py-2 text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-4 bg-purple-600 hover:bg-purple-700 transition active:scale-95 px-4 py-3 rounded-lg font-semibold text-white ${
              isSubmitting ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Submit Status */}
          {submitStatus && (
            <p className="text-sm text-center mt-4 text-gray-400 transition duration-300 ease-in-out">
              {submitStatus}
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;
