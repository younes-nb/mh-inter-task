/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'primary': '#86BC42',
            'secondary': '#849D6A',
            'deactive': '#C4C6C2',
            'error': '#DD794F',
            'gray-1': '#E7EBE3',
            'gray-2': '#B0B0B0',
            'gray-3': '#878787',
            'gray-4': '#6B6B6B',
            'gray-5': '#383838',
            'white': '#FFF'

        },
        fontFamily: {
            sans: ['IRANSans', 'sans-serif']
        },
        extend: {},
    },
    plugins: [],
}

