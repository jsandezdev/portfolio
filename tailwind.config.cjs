/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                jswhite: '#EFE6FF',
                jslightgrey: '#A799BF',
                jsgrey: '#4D3770',
                jscyan: '#4DC5FA',
                jspink: '#E649F5',
                jsyellow: '#FFCA63',
                jspurple: {
                    default: '#181123',
                    dark: '#140E1D',
                    darker: '#0F0A17'
                }
            }
        }
    },
    plugins: []
}
