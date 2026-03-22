import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "בית הספר לפסנתר",
  description: "בית ספר לפסנתר לילדים ונוער – שיטה ייחודית, מורים מקצועיים, ואהבה אמיתית למוסיקה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
