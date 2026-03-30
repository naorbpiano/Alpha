"use client";

import type { Filters } from "./TaskApp";

interface TaskFiltersProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  categories: string[];
  onManageCategories: () => void;
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

function formatDateHebrew(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("he-IL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function TaskFilters({
  filters,
  setFilters,
  categories,
  onManageCategories,
}: TaskFiltersProps) {
  const today = getToday();
  const isToday = filters.date === today;

  return (
    <div className="mb-6 space-y-3">
      {/* Date navigation */}
      <div className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-100 p-3">
        <button
          onClick={() =>
            setFilters({ ...filters, date: addDays(filters.date, 1) })
          }
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
        >
          ←
        </button>

        <div className="text-center">
          <div className="font-bold text-gray-800">
            {formatDateHebrew(filters.date)}
          </div>
          {!isToday && (
            <button
              onClick={() => setFilters({ ...filters, date: today })}
              className="text-xs text-blue-500 hover:underline"
            >
              חזרה להיום
            </button>
          )}
          {isToday && (
            <span className="text-xs text-green-500 font-medium">היום</span>
          )}
        </div>

        <button
          onClick={() =>
            setFilters({ ...filters, date: addDays(filters.date, -1) })
          }
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
        >
          →
        </button>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2">
        {/* Status filter */}
        {(["all", "active", "completed"] as const).map((status) => {
          const labels = { all: "הכל", active: "פעילות", completed: "הושלמו" };
          return (
            <button
              key={status}
              onClick={() => setFilters({ ...filters, status })}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filters.status === status
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {labels[status]}
            </button>
          );
        })}

        <div className="w-px bg-gray-200 mx-1" />

        {/* Priority filter */}
        <select
          value={filters.priority}
          onChange={(e) =>
            setFilters({
              ...filters,
              priority: e.target.value as Filters["priority"],
            })
          }
          className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 bg-white text-gray-600 outline-none"
        >
          <option value="all">כל העדיפויות</option>
          <option value="high">🔴 גבוהה</option>
          <option value="medium">🟡 בינונית</option>
          <option value="low">🟢 נמוכה</option>
        </select>

        {/* Category filter */}
        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({ ...filters, category: e.target.value })
          }
          className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 bg-white text-gray-600 outline-none"
        >
          <option value="all">כל הקטגוריות</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button
          onClick={onManageCategories}
          className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors"
          title="ניהול קטגוריות"
        >
          ⚙️
        </button>
      </div>
    </div>
  );
}
