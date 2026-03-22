import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "אלפא קליד | בית ספר לפסנתר לילדים ונוער — פתח תקווה",
  description: "אלפא קליד — בית ספר לפסנתר לילדים ונוער גיל 7–16 בפתח תקווה. שיעורים פרטניים, כל סגנון, גישת הצלחות קטנות. קביעת פגישת מפתח בעלות סמלית.",
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
