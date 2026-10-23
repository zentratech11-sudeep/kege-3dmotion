import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { KageTemplateEditor } from "../components/KageTemplateEditor";
import { KAGE_DEFAULTS, KAGE_STORAGE_KEY, type KageConfig } from "../config/kage";
import { KageLandingPage } from "../shaders/landing-pages/LandingPages";
import "../shaders/threeui.css";


export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Kage — Where stillness reveals the unseen" },
      {
        name: "description",
        content:
          "Walk the Kage temple path: an interactive Three.js journey through sanmon gates, lantern courts, and moonlit water.",
      },
      { property: "og:title", content: "Kage — Where stillness reveals the unseen" },
      {
        property: "og:description",
        content:
          "Walk the Kage temple path: an interactive Three.js journey through sanmon gates, lantern courts, and moonlit water.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Scene,
});

function Scene() {
  const [config, setConfig] = useState<KageConfig>(KAGE_DEFAULTS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KAGE_STORAGE_KEY);
      if (saved) setConfig({ ...KAGE_DEFAULTS, ...JSON.parse(saved) });
    } catch {
      /* ignore malformed saved config */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KAGE_STORAGE_KEY, JSON.stringify(config));
    } catch {
      /* storage unavailable */
    }
  }, [config]);

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <KageLandingPage style={{ width: "100%", height: "100%" }} {...config} />
      <KageTemplateEditor value={config} onChange={setConfig} open={open} onToggle={() => setOpen((v) => !v)} />
    </div>
  );
}
