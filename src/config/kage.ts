/**
 * Editable template config for the Kage landing page.
 *
 * Change these values to re-skin the page. Every key maps to a
 * KageLandingPage typography/colour prop, so the packaged HTML document
 * itself stays byte-exact.
 */
export type KageConfig = {
  headingFont: string;
  bodyFont: string;
  headingWeight: string;
  bodyWeight: string;
  primaryColor: string;
  headingSize: number;
  bodySize: number;
  headingLetterSpacing: number;
};

export const KAGE_DEFAULTS: KageConfig = {
  headingFont: "onest",
  bodyFont: "onest",
  headingWeight: "400",
  bodyWeight: "300",
  primaryColor: "#e0231c",
  headingSize: 46,
  bodySize: 17,
  headingLetterSpacing: -0.012,
};

export const KAGE_OPTIONS = {
  headingFonts: [
    { value: "onest", label: "Onest (authored)" },
    { value: "instrument-serif", label: "Instrument Serif" },
    { value: "newsreader", label: "Newsreader" },
    { value: "geist", label: "Geist" },
  ],
  bodyFonts: [
    { value: "onest", label: "Onest (authored)" },
    { value: "geist", label: "Geist" },
    { value: "newsreader", label: "Newsreader" },
    { value: "instrument-serif", label: "Instrument Serif" },
  ],
  headingWeights: ["400", "500", "600", "700"],
  bodyWeights: ["300", "400", "500", "600"],
  headingSize: [30, 72, 1] as const,
  bodySize: [13, 24, 0.5] as const,
  headingLetterSpacing: [-0.06, 0.12, 0.002] as const,
} as const;

export const KAGE_STORAGE_KEY = "kage-template-config";
