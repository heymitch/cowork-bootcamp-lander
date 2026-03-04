/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                page: '#0d1116',
                card: '#0f151c',
                'card-alt': '#0f141b',
                cream: '#f3eccb',
                'cream-soft': 'rgba(243, 236, 203, 0.7)',
                'cream-dim': 'rgba(243, 236, 203, 0.5)',
                'cream-faint': 'rgba(243, 236, 203, 0.3)',
                yellow: '#facc15',
                red: '#dc2625',
                'red-bg': '#dd2c2c',
                green: '#28ca41',
                orange: '#d97757',
                faq: '#aeaa95',
            },
            fontFamily: {
                manrope: ['Manrope', 'sans-serif'],
                anton: ['Anton', 'sans-serif'],
                barlow: ['Barlow', 'sans-serif'],
                geist: ['Geist', 'sans-serif'],
                dm: ['DM Sans', 'sans-serif'],
            },
            maxWidth: {
                'page': '1200px',
            },
        },
    },
    plugins: [],
}
