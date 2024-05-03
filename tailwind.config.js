module.exports = {
    darkMode: 'class',

    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
        extend: {
            zIndex: {
                '120': '120',
            },
            maxWidth: {
                'xl': '36rem',
                '2xl': '42rem',
                '3xl': '48rem',
            },
            spacing: {
                'top': '-1rem',
                '9': '2.25rem',
                '10': '2.5rem',
                '11': '2.75rem',
                '12': '3rem',
                '14': '3.5rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
            },
            textDecorationThickness: {
                3: '3px',
            },
            rotate: {
                '45': '45deg',
                '90': '90deg',
                '180': '180deg',
            }
        },
    },
    plugins: [
        // require('@tailwindcss/forms'),
        require('flowbite/plugin'),
        require("tw-elements/dist/plugin.cjs")
    ],
}
