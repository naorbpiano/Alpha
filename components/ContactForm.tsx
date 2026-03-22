"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const inputClass =
  "w-full bg-warm-white border border-gold/15 rounded-xl px-4 py-3 text-piano-black placeholder:text-warm-gray/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-300";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-warm-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-7xl mb-5 animate-[scale-in_0.5s_ease-out]">🎉</div>
          <h2 className="text-3xl font-black text-gold-gradient inline-block mb-4">
            קיבלנו את הפרטים שלך!
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed">
            נאור יחזור אליך בהקדם לתיאום פגישת המפתח הפדגוגית.
            <br />מחכים לפגוש אתכם!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-warm-white">
      <div className="max-w-2xl mx-auto px-6">
        <SectionHeader
          eyebrow="מעוניינים?"
          title="השאר פרטים"
          subtitle="השאירו פרטים ונאור יחזור אליכם לתיאום פגישת המפתח הפדגוגית — בעלות סמלית, ללא התחייבות."
        />

        <form
          onSubmit={handleSubmit}
          className="gold-glow-card bg-ivory rounded-3xl border border-gold/10 p-9 sm:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-piano-black font-semibold text-sm mb-2">
                שם מלא *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="ישראל ישראלי"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-piano-black font-semibold text-sm mb-2">
                טלפון *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="050-0000000"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-piano-black font-semibold text-sm mb-2">
                אימייל
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-piano-black font-semibold text-sm mb-2">
                גיל הילד/ה
              </label>
              <select
                name="age"
                value={form.age}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">בחר גיל</option>
                <option value="7-8">7–8</option>
                <option value="9-11">9–11</option>
                <option value="12-14">12–14</option>
                <option value="15-16">15–16</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-piano-black font-semibold text-sm mb-2">
              הערות / שאלות
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="ספרו לנו קצת על הילד/ה — ניסיון קודם, מה מעניין אותו/ה..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold text-piano-black font-black py-4 rounded-xl text-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold/15 animate-[pulse-glow_4s_ease-in-out_infinite]"
          >
            שלח פרטים — לקביעת פגישת המפתח
          </button>

          <p className="text-warm-gray/60 text-xs text-center">
            🔒 הפרטים שלכם שמורים אצלנו בלבד ולא יועברו לאף גורם שלישי.
          </p>
        </form>
      </div>
    </section>
  );
}
