"use client";

import { useState } from "react";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM",
];

const agents = [
  "Any Available Agent",
  "Sarah Mitchell – Principal Broker",
  "James Carter – Senior Agent",
  "Emily Nguyen – Luxury Specialist",
  "Marcus Thompson – Investment Lead",
];

export default function AvailabilityPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    agent: agents[0],
    interest: "buy",
    property: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 px-4 text-center bg-navy-800/30 border-b border-navy-700">
        <p className="section-eyebrow mb-3">Book a Time</p>
        <h1 className="section-heading text-4xl md:text-5xl mb-4">Schedule a Viewing</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Ready to tour a property or consult with one of our agents? Pick a time that works for
          you and we&apos;ll confirm within 2 business hours.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-navy-800 border border-gold-500/40 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-white font-display text-2xl font-bold mb-3">
                  Booking Request Received!
                </h2>
                <p className="text-gray-400 mb-6">
                  Thanks, <strong className="text-white">{form.name}</strong>! One of our agents
                  will reach out to {form.email} within 2 business hours to confirm your appointment.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", date: "", time: "", agent: agents[0], interest: "buy", property: "", message: "" }); }}
                  className="btn-outline"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-white font-semibold text-xl mb-2">Your Details</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} className="input-field" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="label">Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="label">Phone Number</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="input-field" placeholder="(480) 555-0000" />
                  </div>
                  <div>
                    <label className="label">I&apos;m interested in *</label>
                    <select name="interest" value={form.interest} onChange={handleChange} className="input-field">
                      <option value="buy">Buying a Home</option>
                      <option value="sell">Selling My Property</option>
                      <option value="rent">Renting / Leasing</option>
                      <option value="invest">Investment Properties</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label">Property Address (if applicable)</label>
                  <input name="property" value={form.property} onChange={handleChange} className="input-field" placeholder="e.g. 142 Oakwood Drive, Scottsdale or 'any 4-bed in Chandler'" />
                </div>

                <h2 className="text-white font-semibold text-xl pt-2">Preferred Appointment</h2>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="label">Preferred Date *</label>
                    <input name="date" type="date" required value={form.date} onChange={handleChange} className="input-field" />
                  </div>
                  <div>
                    <label className="label">Preferred Time *</label>
                    <select name="time" required value={form.time} onChange={handleChange} className="input-field">
                      <option value="">Select a time</option>
                      {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="label">Preferred Agent</label>
                    <select name="agent" value={form.agent} onChange={handleChange} className="input-field">
                      {agents.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label">Message / Additional Details</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="input-field resize-none" placeholder="Tell us more about what you're looking for, your budget, timeline, or any specific questions…" />
                </div>

                <button type="submit" className="btn-gold w-full py-4 text-base">
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Office Hours</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["Monday – Friday", "8:00 AM – 7:00 PM"],
                  ["Saturday", "9:00 AM – 5:00 PM"],
                  ["Sunday", "10:00 AM – 3:00 PM"],
                ].map(([day, hours]) => (
                  <li key={day} className="flex justify-between">
                    <span className="text-gray-400">{day}</span>
                    <span className="text-white">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Contact Directly</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 text-base">📞</span>
                  <div>
                    <div className="text-white font-medium">(480) 555-0182</div>
                    <div className="text-xs">Main office line</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 text-base">✉️</span>
                  <div>
                    <div className="text-white font-medium">hello@abcrealtors.com</div>
                    <div className="text-xs">Response within 2 hours</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 text-base">📍</span>
                  <div>
                    <div className="text-white font-medium">4820 E Camelback Rd</div>
                    <div className="text-xs">Suite 200, Scottsdale, AZ 85251</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gold-500/10 border border-gold-500/30 rounded-xl p-6">
              <h3 className="text-gold-400 font-semibold text-lg mb-2">No Obligation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                All consultations and property viewings are 100% free with no commitment required. We
                work for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
