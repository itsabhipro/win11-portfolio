import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(d = new Date()) {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function formatDate(d = new Date()) {
  return d.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}
