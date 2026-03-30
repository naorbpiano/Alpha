"use client";

import { useEffect, useRef, useCallback } from "react";
import type { Task } from "./TaskApp";

interface TaskReminderProps {
  tasks: Task[];
}

export default function TaskReminder({ tasks }: TaskReminderProps) {
  const notifiedRef = useRef<Set<string>>(new Set());

  const requestPermission = useCallback(async () => {
    if (typeof window === "undefined" || !("Notification" in window)) return;
    if (Notification.permission === "default") {
      await Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  useEffect(() => {
    if (typeof window === "undefined" || !("Notification" in window)) return;
    if (Notification.permission !== "granted") return;

    const interval = setInterval(() => {
      const now = new Date();

      tasks.forEach((task) => {
        if (!task.reminder || task.completed) return;
        if (notifiedRef.current.has(task.id)) return;

        const reminderTime = new Date(task.reminder);
        if (now >= reminderTime) {
          notifiedRef.current.add(task.id);
          new Notification("תזכורת משימה 🔔", {
            body: task.title,
            icon: "/favicon.ico",
            tag: task.id,
          });
        }
      });
    }, 30000); // check every 30 seconds

    return () => clearInterval(interval);
  }, [tasks]);

  // No visible UI - this component only handles notifications
  return null;
}
