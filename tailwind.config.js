/** @type {import('tailwindcss').Config} */
import tailwindAnimate from "tailwindcss-animate";

module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: "var(--deep-navy)",
                clinical: "var(--clinical-blue)",
                mint: "var(--mint-green)",
                slate: {
                    DEFAULT: "var(--soft-slate)",
                    light: "var(--slate-light)",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [tailwindAnimate],
}