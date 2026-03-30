"use client";

import { useState } from "react";
import type { Task } from "./TaskApp";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onReorder: (tasks: Task[]) => void;
}

export default function TaskList({
  tasks,
  onToggle,
  onEdit,
  onDelete,
  onReorder,
}: TaskListProps) {
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  function handleDragStart(index: number) {
    return (e: React.DragEvent) => {
      setDragIndex(index);
      e.dataTransfer.effectAllowed = "move";
    };
  }

  function handleDragOver(index: number) {
    return (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      setDragOverIndex(index);
    };
  }

  function handleDrop(index: number) {
    return (e: React.DragEvent) => {
      e.preventDefault();
      if (dragIndex === null || dragIndex === index) {
        setDragIndex(null);
        setDragOverIndex(null);
        return;
      }

      const reordered = [...tasks];
      const [moved] = reordered.splice(dragIndex, 1);
      reordered.splice(index, 0, moved);
      onReorder(reordered);

      setDragIndex(null);
      setDragOverIndex(null);
    };
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">🎯</div>
        <p className="text-gray-400 text-lg">אין משימות ליום הזה</p>
        <p className="text-gray-300 text-sm mt-1">
          הוסף משימה חדשה כדי להתחיל!
        </p>
      </div>
    );
  }

  return (
    <div
      className="space-y-2"
      onDragEnd={() => {
        setDragIndex(null);
        setDragOverIndex(null);
      }}
    >
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggle(task.id)}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task.id)}
          onDragStart={handleDragStart(index)}
          onDragOver={handleDragOver(index)}
          onDrop={handleDrop(index)}
          isDragOver={dragOverIndex === index && dragIndex !== index}
        />
      ))}
    </div>
  );
}
