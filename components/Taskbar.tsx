"use client";

import { useEffect, useState } from "react";
import { Search, Wifi, Volume2, Battery, Sun, Moon, LayoutGrid } from "lucide-react";
import { cn, formatDate, formatTime } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { projects } from "@/lib/projects";

interface Props {
  startOpen: boolean;
  onToggleStart: () => void;
  openApps: string[];
  activeApp: string | null;
  onFocusApp: (id: string) => void;
}

export default function Taskbar({
  startOpen,
  onToggleStart,
  openApps,
  activeApp,
  onFocusApp,
}: Props) {
  const { theme, toggle } = useTheme();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  const openProjects = projects.filter((p) => openApps.includes(p.id));

  return (
    <div
      className={cn(
        "fixed bottom-0 inset-x-0 z-50 h-12 flex items-center justify-center gap-1 px-2",
        "bg-white/70 dark:bg-[#1c1c1c]/80 backdrop-blur-mica",
        "border-t border-black/5 dark:border-white/5"
      )}
    >
      <div className="absolute left-2 hidden sm:flex items-center gap-1 text-slate-600 dark:text-slate-300">
        <button type="button" onClick={toggle} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10" title="Light / Dark mode">
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      <div className="flex items-center gap-0.5">
        <button
          type="button"
          onClick={onToggleStart}
          className={cn(
            "p-2.5 rounded-lg transition-colors",
            startOpen
              ? "bg-sky-500/20 text-sky-600 dark:text-sky-400"
              : "hover:bg-black/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200"
          )}
          aria-label="Start"
        >
          <LayoutGrid size={18} strokeWidth={2.2} />
        </button>
        <button type="button" className="hidden sm:flex items-center gap-2 px-3 py-1.5 mx-1 rounded-full bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-white/15">
          <Search size={14} />
          <span>Search</span>
        </button>

        {openProjects.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onFocusApp(p.id)}
            className={cn(
              "p-2 rounded-lg relative",
              activeApp === p.id ? "bg-black/10 dark:bg-white/15" : "hover:bg-black/5 dark:hover:bg-white/10"
            )}
            title={p.name}
          >
            <span className="text-base leading-none">{p.icon}</span>
            <span className={cn("absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full", activeApp === p.id ? "w-4 bg-sky-500" : "w-1.5 bg-slate-400")} />
          </button>
        ))}
        {openApps.includes("about") && (
          <button
            type="button"
            onClick={() => onFocusApp("about")}
            className={cn("p-2 rounded-lg relative", activeApp === "about" ? "bg-black/10 dark:bg-white/15" : "hover:bg-black/5 dark:hover:bg-white/10")}
            title="About"
          >
            <span className="text-base">👤</span>
            <span className={cn("absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full", activeApp === "about" ? "w-4 bg-sky-500" : "w-1.5 bg-slate-400")} />
          </button>
        )}
      </div>

      <div className="absolute right-2 flex items-center gap-0.5 text-slate-600 dark:text-slate-300">
        <button type="button" onClick={toggle} className="sm:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <div className="hidden md:flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
          <Wifi size={14} />
          <Volume2 size={14} />
          <Battery size={14} />
        </div>
        <div className="text-right px-2 py-0.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 leading-tight">
          <p className="text-xs font-medium tabular-nums">{formatTime(now)}</p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400">{formatDate(now)}</p>
        </div>
      </div>
    </div>
  );
}
