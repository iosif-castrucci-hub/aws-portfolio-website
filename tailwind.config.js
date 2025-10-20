/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {
fontFamily: {
sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "sans-serif"],
},
backgroundImage: {
"aws-gradient": "radial-gradient(1200px 600px at 0% 0%, rgba(56,189,248,.15), transparent 60%), radial-gradient(1200px 600px at 100% 0%, rgba(99,102,241,.12), transparent 60%), radial-gradient(1200px 600px at 50% 100%, rgba(16,185,129,.10), transparent 60%)",
}
},
},
darkMode: "class",
plugins: [],
};
