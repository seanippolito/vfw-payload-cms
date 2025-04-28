/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Include Next.js app directory
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Standard components dir (might be used by ShadCN)
    './frontend/**/*.{js,ts,jsx,tsx,mdx}', // Our custom frontend pages/routes dir
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Our custom components dir
    './header/**/*.{js,ts,jsx,tsx,mdx}', // Our custom header dir
    './footer/**/*.{js,ts,jsx,tsx,mdx}', // Our custom footer dir
    './payload-blocks/**/*.{js,ts,jsx,tsx,mdx}', // Our custom payload-blocks dir
    // Add other custom directories containing JSX/TSX components if needed
  ],
  theme: {
    extend: {
      colors: {
        'vfw-red': '#991A1E', // Custom color from style guide
      },
      // Add other theme extensions here (e.g., fonts if we decide on them)
    },
  },
  plugins: [],
} 