"use client";

import { Minus, Square, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  icon?: string;
  open: boolean;
  maximized?: boolean;
  onClose: () => void;
  onMinimize?: () => void;
  onToggleMax?: () => void;
  children: React.ReactNode;
  className?: string;
  width?: string;
}

export default function Window({
  title,
  icon,
  open,
  maximized,
  onClose,
  onMinimize,
  onToggleMax,
  children,
  className,
  width = "max-w-2xl",
}: Props) {
  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed z-40 flex flex-col overflow-hidden",
        maximized
          ? "inset-0 sm:inset-x-0 sm:top-0 sm:bottom-12 rounded-none"
          : "left-1/2 top-[8%] -translate-x-1/2 w-[95vw] rounded-xl shadow-win dark:shadow-win",
        !maximized && width,
        "bg-white/90 dark:bg-[#202020]/95 backdrop-blur-mica border border-black/10 dark:border-white/10",
        className
      )}
      style={!maximized ? { maxHeight: "calc(100vh - 6rem)" } : undefined}
    >
      <div className="flex items-center h-10 px-3 shrink-0 border-b border-black/5 dark:border-white/5 select-none">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {icon && <span className="text-base">{icon}</span>}
          <span className="text-xs font-medium text-slate-700 dark:text-slate-200 truncate">{title}</span>
        </div>
        <div className="flex items-center -mr-1">
          <button type="button" onClick={onMinimize} className="w-11 h-8 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10" aria-label="Minimize">
            <Minus size={14} />
          </button>
          <button type="button" onClick={onToggleMax} className="w-11 h-8 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10" aria-label="Maximize">
            <Square size={12} />
          </button>
          <button type="button" onClick={onClose} className="w-11 h-8 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-red-500 hover:text-white" aria-label="Close">
            <X size={16} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto overscroll-contain">{children}</div>
    </div>
  );
}
