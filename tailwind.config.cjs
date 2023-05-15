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
                },
                node: '#339933',
                react: '#61DAFB',
                astro: '#FF5D01',
                css3: '#1572B6',
                tailwind: '#06B6D4',
                sass: '#CC6699',
                // express: '#000000',
                express: '#FFFFFF',
                mongo: '#47A248',
                bootstrap: '#7952B3',
                // next: '#000000',
                next: '#FFFFFF',
                vite: '#646CFF',
                typescript: '#3178C6',
                javascript: '#F7DF1E'
            }
        }
    },
    plugins: []
}
