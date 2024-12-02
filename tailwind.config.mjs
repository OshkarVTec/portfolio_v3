/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            keyframes: {
                slideInLeft: {
                    '0%': { opacity: 1, transform: 'translateX(100%)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' }
                },
                slideInRight: {
                    '0%': { opacity: 1, transform: 'translatex(-100%)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' }
                }
            },
            animation: {
                slideInLeft: 'slideInLeft .5s ease-in-out forwards',
                slideInRight: 'slideInRight .5s ease-in-out forwards'
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
