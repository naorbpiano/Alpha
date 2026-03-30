"use client";

import { useState } from "react";

interface CategoryManagerProps {
  categories: string[];
  onAdd: (name: string) => void;
  onRemove: (name: string) => void;
  onClose: () => void;
}

export default function CategoryManager({
  categories,
  onAdd,
  onRemove,
  onClose,
}: CategoryManagerProps) {
  const [newName, setNewName] = useState("");

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const name = newName.trim();
    if (name && !categories.includes(name)) {
      onAdd(name);
      setNewName("");
    }
  }

  return (
    <div className="mb-6 bg-white rounded-xl shadow-md border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-700">🏷️ ניהול קטגוריות</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="קטגוריה חדשה..."
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-400 outline-none text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
        >
          הוסף
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <span
            key={cat}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg text-sm border border-gray-200"
          >
            {cat}
            <button
              onClick={() => onRemove(cat)}
              className="text-gray-400 hover:text-red-500 transition-colors"
              title="מחק קטגוריה"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
