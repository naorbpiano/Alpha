"use client";

import { useState } from "react";

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
    // TODO: connect to backend / email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-warm-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-piano-black mb-3">
            קיבלנו את הפרטים שלך!
          </h2>
          <p className="text-warm-gray text-lg">
            נאור יחזור אליך בהקדם לתיאום פגישת המפתח הפדגוגית. מחכים לפגוש אתכם!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-warm-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            מעוניינים?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-piano-black">
            השאר פרטים
          </h2>
          <p className="mt-3 text-warm-gray text-lg">
            השאירו פרטים ונאור יחזור אליכם לתיאום פגישת המפתח הפדגוגית — בעלות סמלית, ללא התחייבות.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-ivory rounded-2xl shadow-sm border border-gold/10 p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-piano-black font-medium text-sm mb-1.5">
                שם מלא *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="ישראל ישראלי"
                className="w-full bg-warm-white border border-gold/20 rounded-xl px-4 py-2.5 text-piano-black placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-piano-black font-medium text-sm mb-1.5">
                טלפון *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="050-0000000"
                className="w-full bg-warm-white border border-gold/20 rounded-xl px-4 py-2.5 text-piano-black placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-piano-black font-medium text-sm mb-1.5">
                אימייל
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full bg-warm-white border border-gold/20 rounded-xl px-4 py-2.5 text-piano-black placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-piano-black font-medium text-sm mb-1.5">
                גיל הילד/ה
              </label>
              <select
                name="age"
                value={form.age}
                onChange={handleChange}
                className="w-full bg-warm-white border border-gold/20 rounded-xl px-4 py-2.5 text-piano-black focus:outline-none focus:border-gold transition-colors"
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
            <label className="block text-piano-black font-medium text-sm mb-1.5">
              הערות / שאלות
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="ספרו לנו קצת על הילד/ה — ניסיון קודם, מה מעניין אותו/ה..."
              className="w-full bg-warm-white border border-gold/20 rounded-xl px-4 py-2.5 text-piano-black placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold text-piano-black font-bold py-3.5 rounded-xl text-lg hover:bg-gold-light transition-colors duration-200 shadow-sm"
          >
            שלח פרטים — לקביעת פגישת המפתח
          </button>

          <p className="text-warm-gray text-xs text-center">
            הפרטים שלכם שמורים אצלנו בלבד ולא יועברו לאף גורם שלישי.
          </p>
        </form>
      </div>
    </section>
  );
}
