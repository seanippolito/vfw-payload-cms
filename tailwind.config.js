/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include src directory (covers app, payload internal components)
    "./frontend/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./header/**/*.{js,ts,jsx,tsx,mdx}",
    "./footer/**/*.{js,ts,jsx,tsx,mdx}",
    "./payload-blocks/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other custom directories if needed
  ],
  theme: {
    extend: {
      colors: {
        'vfw-red': '#991A1E',
      },
      // Add other theme extensions (fonts etc.) based on style guide later
    },
  },
  plugins: [],
}

