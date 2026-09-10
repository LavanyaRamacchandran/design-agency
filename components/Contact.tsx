"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSendMessage = () => {
    const name = document.getElementById("contact-name") as HTMLInputElement;
    const email = document.getElementById("contact-email") as HTMLInputElement;
    const message = document.getElementById(
      "contact-message"
    ) as HTMLTextAreaElement;

    // Check if fields are empty
    if (!name.value.trim()) {
      name.focus();
      return;
    }

    if (!email.value.trim()) {
      email.focus();
      return;
    }

    // Check email format
    if (!email.validity.valid) {
      email.focus();
      return;
    }

    if (!message.value.trim()) {
      message.focus();
      return;
    }

    // Show success message
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-white px-6 py-24 text-black md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-500">
              Get in touch
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s create
              <br />
              something great.
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-gray-500">
              Have a project in mind? Tell us about it and let&apos;s turn
              your idea into something meaningful.
            </p>

            <div className="mt-10 text-sm text-gray-500">
              <p>hello@nexa.studio</p>
              <p className="mt-2">Available for new projects</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* NAME */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full resize-none border-b border-gray-300 bg-transparent py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* BUTTON */}
            <button
              type="button"
              onClick={handleSendMessage}
              className="rounded-full bg-black px-8 py-4 font-medium text-white transition hover:scale-105 hover:bg-gray-800"
            >
              Send Message →
            </button>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-700">
                <p className="font-semibold">
                  Message sent successfully! ✓
                </p>

                <p className="mt-1">
                  Thanks for contacting NEXA. We&apos;ll get back to you soon.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}