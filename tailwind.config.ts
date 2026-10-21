import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07203C",
          900: "#0B203F",
          800: "#0B2850",
          700: "#12336B",
          600: "#183E7B",
        },
        lime: {
          300: "#D6EBA6",
          400: "#B6D96B",
          500: "#A8CF4E",
          600: "#93BA38",
          700: "#5E7F1C",
          band: "#A3CC40",
        },
        teal: {
          50: "#E8F3F7",
          500: "#3A9E99",
          600: "#2E8682",
        },
        surface: "#F1F5F8",
        ink: "#0F172A",
        muted: "#64748B",
        line: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        badge: ["10px", { lineHeight: "10px" }],
        eyebrow: ["12px", { lineHeight: "16px", letterSpacing: "0.12em" }],
        caption: ["12px", { lineHeight: "16px" }],
        body: ["14px", { lineHeight: "22px" }],
        card: ["15px", { lineHeight: "20px" }],
        nav: ["15px", { lineHeight: "20px" }],
        lead: ["18px", { lineHeight: "28px" }],
        stat: ["36px", { lineHeight: "40px", letterSpacing: "-0.03em" }],
        cta: ["44px", { lineHeight: "50px", letterSpacing: "-0.03em" }],
        title: ["42px", { lineHeight: "48px", letterSpacing: "-0.03em" }],
        display: ["58px", { lineHeight: "64px", letterSpacing: "-0.04em" }],
      },
      spacing: {
        nav: "80px",
        "hero-inset": "16px",
        section: "112px",
      },
      maxWidth: {
        container: "1200px",
        "hero-copy": "560px",
      },
      minHeight: {
        hero: "680px",
      },
      width: {
        "hero-art": "680px",
      },
      borderRadius: {
        card: "20px",
        hero: "32px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
        "card-hover": "0 2px 4px rgba(15, 23, 42, 0.04), 0 24px 48px rgba(15, 23, 42, 0.12)",
        nav: "0 1px 0 rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.04)",
        glow: "0 0 0 1px rgba(168, 207, 78, 0.4), 0 12px 32px rgba(168, 207, 78, 0.35)",
        glass: "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 20px 40px rgba(7, 32, 60, 0.35)",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 70% 45%, rgba(56, 110, 210, 0.5) 0%, rgba(56, 110, 210, 0) 45%), linear-gradient(135deg, #1B4386 0%, #0D2C5C 45%, #09203F 100%)",
        grid: "linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.06) 1px, transparent 1px)",
        "fade-navy": "linear-gradient(90deg, #0B203F 0%, rgba(11, 32, 63, 0) 40%)",
      },
      gridTemplateColumns: {
        footer: "1.4fr 0.9fr 1fr 1.7fr",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "word-rise": {
          from: { opacity: "0", transform: "translateY(0.6em) rotate(4deg)", filter: "blur(8px)" },
          to: { opacity: "1", transform: "translateY(0) rotate(0)", filter: "blur(0)" },
        },
        "drop-in": {
          from: { opacity: "0", transform: "translateY(-14px)", filter: "blur(4px)" },
          to: { opacity: "1", transform: "none", filter: "blur(0)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.6)" },
          "70%": { opacity: "1", transform: "scale(1.06)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "hero-rise": {
          from: { opacity: "0", transform: "translateY(80px) scale(0.94)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "grid-pan": {
          from: { transform: "translate3d(-48px, -48px, 0)" },
          to: { transform: "translate3d(0, 0, 0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 20px) scale(0.95)" },
        },
        shine: {
          from: { transform: "translateX(-120%) skewX(-20deg)" },
          to: { transform: "translateX(220%) skewX(-20deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" },
        },
        "letter-in": {
          from: { transform: "translateY(115%) rotate(10deg)" },
          to: { transform: "none" },
        },
        "letter-out": {
          to: { transform: "translateY(-115%) rotate(-10deg)" },
        },
        "draw-line": {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
        "erase-line": {
          from: { strokeDashoffset: "0" },
          to: { strokeDashoffset: "-1" },
        },
        progress: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        "spotlight-in": {
          from: {
            opacity: "0",
            transform: "translateY(32px) scale(0.82) rotate(-6deg)",
          },
          to: { opacity: "1", transform: "none" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(24px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) var(--stagger, 0ms) both",
        marquee: "marquee 36s linear infinite",
        "word-rise": "word-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) var(--stagger, 0ms) both",
        "drop-in": "drop-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--stagger, 0ms) both",
        "pop-in": "pop-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--stagger, 0ms) both",
        "hero-rise": "hero-rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both",
        "grid-pan": "grid-pan 6s linear infinite",
        drift: "drift 18s ease-in-out infinite",
        "drift-slow": "drift 26s ease-in-out infinite reverse",
        shine: "shine 3.5s ease-in-out 1.5s infinite",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        "marquee-reverse": "marquee 42s linear infinite reverse",
        "letter-in": "letter-in 0.75s cubic-bezier(0.22, 1, 0.36, 1) var(--stagger, 0ms) both",
        "letter-out": "letter-out 0.55s cubic-bezier(0.65, 0, 0.35, 1) var(--stagger, 0ms) both",
        progress: "progress var(--duration, 3s) linear both",
        "erase-line": "erase-line 0.5s cubic-bezier(0.65, 0, 0.35, 1) both",
        "draw-line": "draw-line 0.9s cubic-bezier(0.65, 0, 0.35, 1) var(--stagger, 0ms) both",
        "spotlight-in": "spotlight-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-in-right":
          "slide-in-right 0.6s cubic-bezier(0.22, 1, 0.36, 1) var(--stagger, 0ms) both",
      },
    },
  },
};

export default config;
