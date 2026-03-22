export default function Footer() {
  return (
    <footer className="bg-piano-black text-ivory/60 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-gold font-black text-2xl mb-4">🎹 אלפא קליד</h3>
            <p className="text-sm leading-relaxed">
              בית ספר לפסנתר לילדים ונוער בפתח תקווה.
              <br />
              מעצימים כל ילד — הצלחה אחר הצלחה.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-warm-white font-semibold mb-4">ניווט מהיר</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["#about", "אודות"],
                ["#methodology", "השיטה"],
                ["#small-wins", "הצלחות קטנות"],
                ["#lectures", "הרצאות"],
                ["#gallery", "גלריה"],
                ["#contact", "צור קשר"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-warm-white font-semibold mb-4">יצירת קשר</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:naorbpiano@gmail.com"
                  className="hover:text-gold transition-colors duration-200"
                >
                  📧 naorbpiano@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:0535212574"
                  className="hover:text-gold transition-colors duration-200"
                >
                  📱 053-521-2574
                </a>
              </li>
              <li>📍 פתח תקווה</li>
            </ul>
            {/* Social icons */}
            <div className="flex gap-4 mt-5">
              {[
                { href: "#", label: "Facebook", icon: "📘" },
                { href: "#", label: "Instagram", icon: "📸" },
                { href: "https://wa.me/972535212574", label: "WhatsApp", icon: "💬" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-full border border-gold/15 flex items-center justify-center hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 text-lg"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ivory/30">
            © {new Date().getFullYear()} אלפא קליד · כל הזכויות שמורות
          </p>
          <p className="text-xs text-ivory/20">
            עוצב עם ♪ ואהבה
          </p>
        </div>
      </div>
    </footer>
  );
}
