"use client";

import type { Task } from "./TaskApp";

interface TaskExportProps {
  tasks: Task[];
}

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob(["\uFEFF" + content], { type: type + ";charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function exportJSON(tasks: Task[]) {
  const content = JSON.stringify(tasks, null, 2);
  downloadFile("tasks.json", content, "application/json");
}

function exportCSV(tasks: Task[]) {
  const headers = [
    "כותרת",
    "תיאור",
    "הושלם",
    "עדיפות",
    "קטגוריה",
    "תאריך",
    "נוצר",
    "הושלם בתאריך",
  ];

  const priorityLabels = { high: "גבוהה", medium: "בינונית", low: "נמוכה" };

  const rows = tasks.map((t) => [
    `"${t.title.replace(/"/g, '""')}"`,
    `"${t.description.replace(/"/g, '""')}"`,
    t.completed ? "כן" : "לא",
    priorityLabels[t.priority],
    t.category,
    t.date,
    t.createdAt,
    t.completedAt || "",
  ]);

  const content = [headers.join(","), ...rows.map((r) => r.join(","))].join(
    "\n"
  );
  downloadFile("tasks.csv", content, "text/csv");
}

export default function TaskExport({ tasks }: TaskExportProps) {
  if (tasks.length === 0) return null;

  return (
    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center gap-3">
      <button
        onClick={() => exportJSON(tasks)}
        className="px-4 py-2 rounded-lg text-sm border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
      >
        📥 ייצוא JSON
      </button>
      <button
        onClick={() => exportCSV(tasks)}
        className="px-4 py-2 rounded-lg text-sm border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
      >
        📊 ייצוא CSV
      </button>
    </div>
  );
}
