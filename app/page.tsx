"use client";

import { useState, useCallback } from "react";
import DesktopIcon from "@/components/DesktopIcon";
import Taskbar from "@/components/Taskbar";
import StartMenu from "@/components/StartMenu";
import Window from "@/components/Window";
import ProjectWindow from "@/components/ProjectWindow";
import AboutWindow from "@/components/AboutWindow";
import { projects } from "@/lib/projects";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const [startOpen, setStartOpen] = useState(false);
  const [openApps, setOpenApps] = useState<string[]>([]);
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [maximized, setMaximized] = useState<Record<string, boolean>>({});

  const openApp = useCallback((id: string) => {
    setOpenApps((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setActiveApp(id);
    setStartOpen(false);
  }, []);

  const closeApp = (id: string) => {
    setOpenApps((prev) => prev.filter((x) => x !== id));
    setActiveApp((a) => (a === id ? null : a));
  };

  const minimizeApp = (id: string) => {
    setActiveApp((a) => (a === id ? null : a));
  };

  const desktopProjects = projects.filter(
    (p) => p.category === "featured" || p.category === "vercel"
  );

  return (
    <div
      className="h-screen w-screen overflow-hidden relative select-none"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(145deg, #0f172a 0%, #1e3a5f 40%, #0c4a6e 70%, #082f49 100%)"
            : "linear-gradient(145deg, #7dd3fc 0%, #38bdf8 35%, #0ea5e9 65%, #0369a1 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(ellipse at 30% 20%, rgba(56,189,248,0.25), transparent 50%)"
              : "radial-gradient(ellipse at 70% 10%, rgba(255,255,255,0.5), transparent 45%)",
        }}
      />

      <div className="absolute top-4 left-3 flex flex-col flex-wrap gap-3 max-h-[calc(100vh-4rem)] content-start z-10">
        <DesktopIcon icon="👤" label="About Me" color="from-sky-400 to-blue-600" onOpen={() => openApp("about")} />
        {desktopProjects.map((p) => (
          <DesktopIcon key={p.id} icon={p.icon} label={p.name} color={p.color} onOpen={() => openApp(p.id)} />
        ))}
      </div>

      <div className="hidden lg:block absolute top-6 right-6 w-72 z-10">
        <div className="rounded-2xl p-4 bg-white/20 dark:bg-black/25 backdrop-blur-xl border border-white/20 shadow-lg text-white">
          <p className="text-xs opacity-80">Welcome</p>
          <p className="text-lg font-semibold mt-0.5">Abhishek Kumar</p>
          <p className="text-sm opacity-90 mt-1">Full Stack · .NET · Next.js · Azure</p>
          <p className="text-xs opacity-70 mt-3">
            Click desktop icons or use Start to open projects. Toggle light/dark from the taskbar.
          </p>
        </div>
      </div>

      {projects.map((p) => (
        <Window
          key={p.id}
          title={p.name}
          icon={p.icon}
          open={openApps.includes(p.id) && activeApp === p.id}
          maximized={!!maximized[p.id]}
          onClose={() => closeApp(p.id)}
          onMinimize={() => minimizeApp(p.id)}
          onToggleMax={() => setMaximized((m) => ({ ...m, [p.id]: !m[p.id] }))}
          width="max-w-xl"
        >
          <ProjectWindow project={p} />
        </Window>
      ))}

      <Window
        title="About Me — Abhishek Kumar"
        icon="👤"
        open={openApps.includes("about") && activeApp === "about"}
        maximized={!!maximized.about}
        onClose={() => closeApp("about")}
        onMinimize={() => minimizeApp("about")}
        onToggleMax={() => setMaximized((m) => ({ ...m, about: !m.about }))}
        width="max-w-lg"
      >
        <AboutWindow />
      </Window>

      <StartMenu
        open={startOpen}
        onClose={() => setStartOpen(false)}
        onOpenProject={openApp}
        onOpenAbout={() => openApp("about")}
      />

      <Taskbar
        startOpen={startOpen}
        onToggleStart={() => setStartOpen((s) => !s)}
        openApps={openApps}
        activeApp={activeApp}
        onFocusApp={(id) => setActiveApp(id)}
      />
    </div>
  );
}
