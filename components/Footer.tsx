export default function Footer() {
  return (
    <footer className="bg-piano-black text-ivory/70 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-gold font-bold text-xl mb-3">🎹 אלפא קליד</h3>
            <p className="text-sm leading-relaxed">
              בית ספר לפסנתר לילדים ונוער בפתח תקווה.
              מעצימים כל ילד — הצלחה אחר הצלחה.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-warm-white font-semibold mb-3">ניווט מהיר</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["#about", "אודות"],
                ["#methodology", "השיטה"],
                ["#small-wins", "הצלחות קטנות"],
                ["#lectures", "הרצאות"],
                ["#gallery", "גלריה"],
                ["#contact", "צור קשר"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-gold transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-warm-white font-semibold mb-3">יצירת קשר</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:naorbpiano@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  📧 naorbpiano@gmail.com
                </a>
              </li>
              <li>📍 פתח תקווה</li>
            </ul>
            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="hover:text-gold transition-colors text-xl"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="hover:text-gold transition-colors text-xl"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href="https://wa.me/"
                className="hover:text-gold transition-colors text-xl"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-6 text-center text-xs text-ivory/40">
          © {new Date().getFullYear()} אלפא קליד · כל הזכויות שמורות
        </div>
      </div>
    </footer>
  );
}
