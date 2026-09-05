import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        palette: {
          pink: "#FFD3F6",
          mint: "#C0E6DE",
          navy: "#0D132C",
          teal: "#426B69",
          porcelain: "#F4F4F8",
        },
        noir: {
          DEFAULT: "#0D132C",
          light: "#161F42",
          hover: "#070A18",
        },
        slateTeal: {
          DEFAULT: "#426B69",
          light: "#5A8F8C",
          soft: "rgba(66, 107, 105, 0.14)",
        },
        roseBlossom: {
          DEFAULT: "#FFD3F6",
          dark: "#8C2B72",
          light: "#FFF0FB",
        },
        mintFrost: {
          DEFAULT: "#C0E6DE",
          dark: "#234D46",
          light: "#F0FAF8",
        },
        canvas: {
          DEFAULT: "#F4F4F8",
          warm: "#FAF9FC",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "Georgia", "serif"],
        couture: ["var(--font-italiana)", "Georgia", "serif"],
        editorial: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        DEFAULT: "10px",
        md: "10px",
        lg: "10px",
        xl: "10px",
      },
      boxShadow: {
        subtle: "0 2px 8px rgba(13, 19, 44, 0.04)",
        sm: "0 4px 16px rgba(13, 19, 44, 0.06)",
        md: "0 10px 28px rgba(13, 19, 44, 0.08)",
        lg: "0 20px 48px rgba(13, 19, 44, 0.12)",
        glowPink: "0 0 32px rgba(255, 211, 246, 0.45)",
        glowMint: "0 0 32px rgba(192, 230, 222, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
