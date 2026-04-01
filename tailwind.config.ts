import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                goldfish: {
                    DEFAULT: "#F38338",
                    light: "#F9A96A",
                    dark: "#C4620F",
                },
                onyx: "#020202",
            },
            fontFamily: {
                sans: ["var(--font-plus-jakarta)", "sans-serif"],
            },
            animation: {
                "fade-up": "fadeUp 0.6s ease forwards",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
