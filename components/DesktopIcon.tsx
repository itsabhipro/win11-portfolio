"use client";

import { cn } from "@/lib/utils";

interface Props {
  icon: string;
  label: string;
  color: string;
  onOpen: () => void;
}

export default function DesktopIcon({ icon, label, color, onOpen }: Props) {
  return (
    <button
      type="button"
      onDoubleClick={onOpen}
      onClick={onOpen}
      className="group flex flex-col items-center w-[76px] gap-1 p-1 rounded-md hover:bg-white/15 dark:hover:bg-white/10 focus:outline-none focus:bg-white/20"
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl bg-gradient-to-br shadow-lg flex items-center justify-center text-2xl text-white",
          color
        )}
      >
        {icon}
      </div>
      <span className="text-[11px] leading-tight text-center text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] line-clamp-2 max-w-[72px]">
        {label}
      </span>
    </button>
  );
}
