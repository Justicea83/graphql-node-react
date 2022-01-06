module.exports = {
    purge: [],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                // Simple 16 column grid
                '330': 'repeat(4, minmax(300px, 330px))',
            },
            backgroundImage: theme => ({
               // 'login_bg': "url('/src/assets/img/login_bg.jpg')",
            }),
            colors: {
                'green-1': '#34D186',
                'green-2': '#27AE60',
                'green-lt-1': '#EBFAF3',
                'green-lt-2': '#D4EFDF',
                'gray-4': '#F7F7F7',
                'gray-1': '#E0E0E0',
                'gray-2': '#2B0332',
                'gray-3': '#EEEBEF',
                'red-1': '#EB5757',
                'red-lt': '#FBDDDD',
                'blue-1': '#2D9CDB',
                'blue-2': '#2987CC',
                'blue-lt': '#D5EBF8',
                'yellow-1': '#F2994A',
                'yellow-lt': '#FCEBDB'
            },
            theme: {
                maxWidth: {
                    '1/2': '50%',
                },
                background:{
                    'primary-blue': '#2E80ED'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@themesberg/flowbite/plugin')
    ],
}
