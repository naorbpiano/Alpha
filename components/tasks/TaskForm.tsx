"use client";

import { useState, useEffect } from "react";
import type { Task } from "./TaskApp";

interface TaskFormProps {
  categories: string[];
  date: string;
  onSubmit: (
    data: Omit<Task, "id" | "createdAt" | "completedAt" | "order">
  ) => void;
  editingTask: Task | null;
  onCancelEdit: () => void;
}

export default function TaskForm({
  categories,
  date,
  onSubmit,
  editingTask,
  onCancelEdit,
}: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("medium");
  const [category, setCategory] = useState(categories[0] || "");
  const [taskDate, setTaskDate] = useState(date);
  const [reminder, setReminder] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setCategory(editingTask.category);
      setTaskDate(editingTask.date);
      setReminder(editingTask.reminder || "");
      setIsOpen(true);
    }
  }, [editingTask]);

  useEffect(() => {
    setTaskDate(date);
  }, [date]);

  function resetForm() {
    setTitle("");
    setDescription("");
    setPriority("medium");
    setCategory(categories[0] || "");
    setTaskDate(date);
    setReminder("");
    if (editingTask) onCancelEdit();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      completed: editingTask?.completed || false,
      priority,
      category,
      date: taskDate,
      reminder: reminder || undefined,
    });

    resetForm();
    if (!editingTask) setIsOpen(false);
  }

  return (
    <div className="mb-6">
      {!isOpen && !editingTask && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-blue-300 text-blue-500 hover:bg-blue-50 hover:border-blue-400 transition-colors font-medium"
        >
          + הוסף משימה חדשה
        </button>
      )}

      {(isOpen || editingTask) && (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md border border-gray-100 p-5 space-y-4"
        >
          <h3 className="font-bold text-lg text-gray-700">
            {editingTask ? "✏️ עריכת משימה" : "➕ משימה חדשה"}
          </h3>

          <div>
            <input
              type="text"
              placeholder="מה צריך לעשות?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-800"
              autoFocus
            />
          </div>

          <div>
            <textarea
              placeholder="תיאור (אופציונלי)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-800 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                עדיפות
              </label>
              <select
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value as Task["priority"])
                }
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-400 outline-none text-gray-700"
              >
                <option value="low">🟢 נמוכה</option>
                <option value="medium">🟡 בינונית</option>
                <option value="high">🔴 גבוהה</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                קטגוריה
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-400 outline-none text-gray-700"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                תאריך
              </label>
              <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-400 outline-none text-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                תזכורת
              </label>
              <input
                type="datetime-local"
                value={reminder}
                onChange={(e) => setReminder(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-400 outline-none text-gray-700"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              {editingTask ? "שמור שינויים" : "הוסף משימה"}
            </button>
            <button
              type="button"
              onClick={() => {
                resetForm();
                setIsOpen(false);
              }}
              className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
            >
              ביטול
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
