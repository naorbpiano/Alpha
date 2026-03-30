import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "המשימות שלי | ניהול משימות יומיות",
  description: "אפליקציה לניהול משימות יומיות – קטגוריות, עדיפויות, סטטיסטיקות ועוד",
};

export default function TasksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="tasks-app min-h-screen bg-[#f8fafc] text-[#1e293b]">
      {children}
    </div>
  );
}
