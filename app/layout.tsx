import type { Metadata } from "next";
import { Heebo, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
});

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-frank",
  display: "swap",
});

export const metadata: Metadata = {
  title: "אלפא קליד | בית ספר לפסנתר לילדים ונוער — פתח תקווה",
  description:
    "אלפא קליד — בית ספר לפסנתר לילדים ונוער גיל 7–16 בפתח תקווה. שיעורים פרטניים, כל סגנון, גישת הצלחות קטנות. קביעת פגישת מפתח בעלות סמלית.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`h-full ${heebo.variable} ${frankRuhl.variable}`}
    >
      <body className="min-h-full antialiased font-heebo">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
