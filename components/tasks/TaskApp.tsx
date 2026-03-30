"use client";

import { useState, useEffect, useCallback } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFilters from "./TaskFilters";
import TaskStats from "./TaskStats";
import TaskExport from "./TaskExport";
import CategoryManager from "./CategoryManager";
import TaskReminder from "./TaskReminder";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  category: string;
  date: string;
  createdAt: string;
  completedAt?: string;
  order: number;
  reminder?: string;
}

export interface Filters {
  status: "all" | "active" | "completed";
  priority: "all" | "low" | "medium" | "high";
  category: string;
  date: string;
}

interface TaskStore {
  tasks: Task[];
  categories: string[];
}

const STORAGE_KEY = "daily-tasks-store";

const DEFAULT_CATEGORIES = ["עבודה", "אישי", "בית", "לימודים"];

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function loadStore(): TaskStore {
  if (typeof window === "undefined") {
    return { tasks: [], categories: DEFAULT_CATEGORIES };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as TaskStore;
      return {
        tasks: parsed.tasks || [],
        categories: parsed.categories?.length
          ? parsed.categories
          : DEFAULT_CATEGORIES,
      };
    }
  } catch {
    // ignore
  }
  return { tasks: [], categories: DEFAULT_CATEGORIES };
}

function saveStore(store: TaskStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export default function TaskApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<string[]>(DEFAULT_CATEGORIES);
  const [filters, setFilters] = useState<Filters>({
    status: "all",
    priority: "all",
    category: "all",
    date: getToday(),
  });
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showCategoryManager, setShowCategoryManager] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const store = loadStore();
    setTasks(store.tasks);
    setCategories(store.categories);
    setLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (loaded) {
      saveStore({ tasks, categories });
    }
  }, [tasks, categories, loaded]);

  const addTask = useCallback(
    (taskData: Omit<Task, "id" | "createdAt" | "completedAt" | "order">) => {
      const newTask: Task = {
        ...taskData,
        id: generateId(),
        createdAt: new Date().toISOString(),
        order: tasks.filter((t) => t.date === taskData.date).length,
      };
      setTasks((prev) => [...prev, newTask]);
    },
    [tasks]
  );

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const updated = { ...t, ...updates };
        if (updates.completed === true && !t.completed) {
          updated.completedAt = new Date().toISOString();
        }
        if (updates.completed === false) {
          updated.completedAt = undefined;
        }
        return updated;
      })
    );
    setEditingTask(null);
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const reorderTasks = useCallback((reordered: Task[]) => {
    setTasks((prev) => {
      const reorderedIds = new Set(reordered.map((t) => t.id));
      const others = prev.filter((t) => !reorderedIds.has(t.id));
      return [...others, ...reordered.map((t, i) => ({ ...t, order: i }))];
    });
  }, []);

  const addCategory = useCallback((name: string) => {
    setCategories((prev) =>
      prev.includes(name) ? prev : [...prev, name]
    );
  }, []);

  const removeCategory = useCallback((name: string) => {
    setCategories((prev) => prev.filter((c) => c !== name));
  }, []);

  // Filter tasks for current view
  const filteredTasks = tasks
    .filter((t) => {
      if (t.date !== filters.date) return false;
      if (filters.status === "active" && t.completed) return false;
      if (filters.status === "completed" && !t.completed) return false;
      if (filters.priority !== "all" && t.priority !== filters.priority)
        return false;
      if (filters.category !== "all" && t.category !== filters.category)
        return false;
      return true;
    })
    .sort((a, b) => a.order - b.order);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-500">טוען...</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#1e293b] mb-2">
          📋 המשימות שלי
        </h1>
        <p className="text-gray-500">ניהול משימות יומיות בקלות</p>
      </header>

      <TaskReminder tasks={tasks} />

      <TaskStats tasks={tasks} date={filters.date} />

      <TaskFilters
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        onManageCategories={() => setShowCategoryManager(!showCategoryManager)}
      />

      {showCategoryManager && (
        <CategoryManager
          categories={categories}
          onAdd={addCategory}
          onRemove={removeCategory}
          onClose={() => setShowCategoryManager(false)}
        />
      )}

      <TaskForm
        categories={categories}
        date={filters.date}
        onSubmit={(data) => {
          if (editingTask) {
            updateTask(editingTask.id, data);
          } else {
            addTask(data);
          }
        }}
        editingTask={editingTask}
        onCancelEdit={() => setEditingTask(null)}
      />

      <TaskList
        tasks={filteredTasks}
        onToggle={(id) => {
          const task = tasks.find((t) => t.id === id);
          if (task) updateTask(id, { completed: !task.completed });
        }}
        onEdit={setEditingTask}
        onDelete={deleteTask}
        onReorder={reorderTasks}
      />

      <TaskExport tasks={tasks} />
    </div>
  );
}
