"use client";

import type { Task } from "./TaskApp";

interface TaskStatsProps {
  tasks: Task[];
  date: string;
}

function calculateStreak(tasks: Task[]): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let streak = 0;

  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const dayTasks = tasks.filter((t) => t.date === dateStr);

    if (dayTasks.length === 0) {
      if (i === 0) continue; // skip today if no tasks yet
      break;
    }

    const allCompleted = dayTasks.every((t) => t.completed);
    if (allCompleted) {
      streak++;
    } else {
      if (i > 0) break; // allow today to be incomplete
    }
  }

  return streak;
}

export default function TaskStats({ tasks, date }: TaskStatsProps) {
  const dayTasks = tasks.filter((t) => t.date === date);
  const total = dayTasks.length;
  const completed = dayTasks.filter((t) => t.completed).length;
  const remaining = total - completed;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  const streak = calculateStreak(tasks);

  return (
    <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            התקדמות היום
          </span>
          <span className="text-sm font-bold text-blue-600">{percent}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${percent}%`,
              background:
                percent === 100
                  ? "#22c55e"
                  : percent >= 50
                    ? "#3b82f6"
                    : "#f59e0b",
            }}
          />
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-3 text-center">
        <div className="p-2 rounded-lg bg-blue-50">
          <div className="text-xl font-bold text-blue-600">{total}</div>
          <div className="text-xs text-blue-400">סה&quot;כ</div>
        </div>
        <div className="p-2 rounded-lg bg-green-50">
          <div className="text-xl font-bold text-green-600">{completed}</div>
          <div className="text-xs text-green-400">הושלמו</div>
        </div>
        <div className="p-2 rounded-lg bg-amber-50">
          <div className="text-xl font-bold text-amber-600">{remaining}</div>
          <div className="text-xs text-amber-400">נותרו</div>
        </div>
        <div className="p-2 rounded-lg bg-purple-50">
          <div className="text-xl font-bold text-purple-600">
            {streak}
          </div>
          <div className="text-xs text-purple-400">רצף ימים 🔥</div>
        </div>
      </div>

      {percent === 100 && total > 0 && (
        <div className="mt-4 text-center text-green-600 font-medium bg-green-50 rounded-lg py-2">
          🎉 כל הכבוד! סיימת את כל המשימות להיום!
        </div>
      )}
    </div>
  );
}
