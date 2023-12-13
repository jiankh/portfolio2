/** @type {import('tailwindcss').Config} */


export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        height: {
            "90vh": '90vh',
            "80vh" : '80vh'
        },
        fontFamily: {
            'mono': ['Oxygen Mono', 'monospace'],
        }
    },
  },
  plugins: [
  ],
}

