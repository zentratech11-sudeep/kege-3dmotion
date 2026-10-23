import { type KageConfig, KAGE_DEFAULTS, KAGE_OPTIONS } from "@/config/kage";

type Props = {
  value: KageConfig;
  onChange: (next: KageConfig) => void;
  open: boolean;
  onToggle: () => void;
};

const panel: React.CSSProperties = {
  position: "fixed",
  top: 16,
  right: 16,
  zIndex: 50,
  width: 268,
  maxHeight: "calc(100vh - 32px)",
  overflowY: "auto",
  padding: 16,
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(10,10,11,0.82)",
  backdropFilter: "blur(14px)",
  color: "rgba(255,255,255,0.9)",
  font: "500 12px/1.4 system-ui, sans-serif",
  letterSpacing: "0.01em",
  boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
};

const label: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontSize: 10,
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "rgba(255,255,255,0.5)",
};

const field: React.CSSProperties = {
  width: "100%",
  padding: "7px 8px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  color: "inherit",
  font: "inherit",
};

const button: React.CSSProperties = {
  ...field,
  cursor: "pointer",
  textAlign: "center",
};

export function KageTemplateEditor({ value, onChange, open, onToggle }: Props) {
  const set = <K extends keyof KageConfig>(key: K, next: KageConfig[K]) =>
    onChange({ ...value, [key]: next });

  if (!open) {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-label="Open template editor"
        style={{ ...button, position: "fixed", top: 16, right: 16, zIndex: 50, width: "auto", padding: "8px 14px", background: "rgba(10,10,11,0.8)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)", font: "500 12px/1 system-ui, sans-serif" }}
      >
        Customize
      </button>
    );
  }

  return (
    <aside style={panel} aria-label="Kage template editor">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <strong style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase" }}>Template</strong>
        <button type="button" onClick={onToggle} aria-label="Close editor" style={{ ...button, width: "auto", padding: "4px 9px" }}>
          ✕
        </button>
      </div>

      <div style={{ display: "grid", gap: 14 }}>
        <div>
          <span style={label}>Heading font</span>
          <select style={field} value={value.headingFont} onChange={(e) => set("headingFont", e.target.value)}>
            {KAGE_OPTIONS.headingFonts.map((f) => (
              <option key={f.value} value={f.value} style={{ color: "#111" }}>{f.label}</option>
            ))}
          </select>
        </div>

        <div>
          <span style={label}>Body font</span>
          <select style={field} value={value.bodyFont} onChange={(e) => set("bodyFont", e.target.value)}>
            {KAGE_OPTIONS.bodyFonts.map((f) => (
              <option key={f.value} value={f.value} style={{ color: "#111" }}>{f.label}</option>
            ))}
          </select>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div>
            <span style={label}>H weight</span>
            <select style={field} value={value.headingWeight} onChange={(e) => set("headingWeight", e.target.value)}>
              {KAGE_OPTIONS.headingWeights.map((w) => (
                <option key={w} value={w} style={{ color: "#111" }}>{w}</option>
              ))}
            </select>
          </div>
          <div>
            <span style={label}>Body weight</span>
            <select style={field} value={value.bodyWeight} onChange={(e) => set("bodyWeight", e.target.value)}>
              {KAGE_OPTIONS.bodyWeights.map((w) => (
                <option key={w} value={w} style={{ color: "#111" }}>{w}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <span style={label}>Accent colour</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              type="color"
              value={value.primaryColor}
              onChange={(e) => set("primaryColor", e.target.value)}
              style={{ ...field, width: 44, height: 32, padding: 2 }}
            />
            <input
              type="text"
              value={value.primaryColor}
              onChange={(e) => set("primaryColor", e.target.value)}
              style={field}
            />
          </div>
        </div>

        <Slider
          title={`Heading size — ${value.headingSize}px`}
          range={KAGE_OPTIONS.headingSize}
          value={value.headingSize}
          onChange={(v) => set("headingSize", v)}
        />
        <Slider
          title={`Body size — ${value.bodySize}px`}
          range={KAGE_OPTIONS.bodySize}
          value={value.bodySize}
          onChange={(v) => set("bodySize", v)}
        />
        <Slider
          title={`Letter spacing — ${value.headingLetterSpacing}em`}
          range={KAGE_OPTIONS.headingLetterSpacing}
          value={value.headingLetterSpacing}
          onChange={(v) => set("headingLetterSpacing", v)}
        />

        <button type="button" style={button} onClick={() => onChange(KAGE_DEFAULTS)}>
          Reset to authored
        </button>
      </div>
    </aside>
  );
}

function Slider({
  title,
  range,
  value,
  onChange,
}: {
  title: string;
  range: readonly [number, number, number];
  value: number;
  onChange: (value: number) => void;
}) {
  const [min, max, step] = range;
  return (
    <div>
      <span style={label}>{title}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "#e0231c" }}
      />
    </div>
  );
}
