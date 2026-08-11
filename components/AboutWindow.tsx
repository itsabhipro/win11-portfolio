"use client";

import { profile } from "@/lib/projects";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function AboutWindow() {
  return (
    <div className="p-5 sm:p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-blue-700 text-white text-xl font-bold flex items-center justify-center shadow-lg">
          AK
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{profile.name}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">{profile.title}</p>
          <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
            <MapPin size={12} /> {profile.location}
          </p>
        </div>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{profile.bio}</p>

      <div className="flex flex-wrap gap-2">
        <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200">
          <Github size={14} /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200">
          <Linkedin size={14} /> LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200">
          <Mail size={14} /> {profile.email}
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {Object.entries(profile.skills).map(([group, items]) => (
          <div key={group}>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">{group}</p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((s) => (
                <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-500/10 text-sky-800 dark:text-sky-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
