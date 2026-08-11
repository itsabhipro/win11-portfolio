"use client";

import { projects, profile } from "@/lib/projects";
import { Search, Power, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  onClose: () => void;
  onOpenProject: (id: string) => void;
  onOpenAbout: () => void;
}

export default function StartMenu({ open, onClose, onOpenProject, onOpenAbout }: Props) {
  if (!open) return null;

  const pinned = projects.filter((p) => p.category === "featured" || p.category === "vercel");

  return (
    <>
      <div className="fixed inset-0 z-50" onClick={onClose} />
      <div
        className={cn(
          "fixed z-50 left-1/2 -translate-x-1/2 bottom-14 w-[min(620px,94vw)]",
          "rounded-2xl overflow-hidden shadow-win",
          "bg-white/85 dark:bg-[#2c2c2c]/90 backdrop-blur-mica",
          "border border-black/10 dark:border-white/10"
        )}
      >
        <div className="p-4">
          <div className="relative mb-4">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search for apps, settings, and documents"
              className="w-full rounded-full bg-white dark:bg-[#1e1e1e] border border-black/10 dark:border-white/10 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500/40"
            />
          </div>

          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 px-1">Pinned</p>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mb-4">
            {pinned.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  onOpenProject(p.id);
                  onClose();
                }}
                className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
              >
                <div className={cn("w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center text-lg text-white", p.color)}>
                  {p.icon}
                </div>
                <span className="text-[10px] text-center text-slate-700 dark:text-slate-200 line-clamp-2 leading-tight">{p.name}</span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                onOpenAbout();
                onClose();
              }}
              className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-lg text-white">👤</div>
              <span className="text-[10px] text-center text-slate-700 dark:text-slate-200">About Me</span>
            </button>
          </div>

          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 px-1">Recommended</p>
          <div className="space-y-1 max-h-36 overflow-y-auto">
            {projects.slice(0, 5).map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  onOpenProject(p.id);
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-left"
              >
                <div className={cn("w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center text-sm", p.color)}>{p.icon}</div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-800 dark:text-slate-100 truncate">{p.name}</p>
                  <p className="text-[11px] text-slate-500 truncate">{p.stack.join(" · ")}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2.5 border-t border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-black/20">
          <button
            type="button"
            onClick={() => {
              onOpenAbout();
              onClose();
            }}
            className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg px-2 py-1"
          >
            <div className="w-7 h-7 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center">AK</div>
            {profile.name}
          </button>
          <div className="flex items-center gap-1">
            <a href={profile.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300"><Github size={16} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300"><Linkedin size={16} /></a>
            <a href={`mailto:${profile.email}`} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300"><Mail size={16} /></a>
            <span className="p-2 text-slate-400" title="Sign out (demo)"><Power size={16} /></span>
          </div>
        </div>
      </div>
    </>
  );
}
