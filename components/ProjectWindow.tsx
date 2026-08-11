"use client";

import { Project } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectWindow({ project }: { project: Project }) {
  return (
    <div className="p-5 sm:p-6 space-y-5">
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-3xl text-white shadow-lg shrink-0",
            project.color
          )}
        >
          {project.icon}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{project.description}</p>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium"
          >
            <ExternalLink size={16} />
            Live demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/15 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5"
          >
            <Github size={16} />
            Source code
          </a>
        )}
      </div>

      {project.live && (
        <p className="text-xs text-slate-400">
          Deployed on Vercel ·{" "}
          <a href={project.live} className="text-sky-600 dark:text-sky-400 break-all" target="_blank" rel="noreferrer">
            {project.live.replace(/^https?:\/\//, "")}
          </a>
        </p>
      )}
    </div>
  );
}
