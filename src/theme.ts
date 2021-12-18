import { extendTheme, theme } from '@chakra-ui/react'

export default extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        primary: theme.colors['orange'],
    },
    styles: {
        global: {
            body: {
                backgroundColor: 'primary.50',
            },
            ':host,:root': {
                '--chakra-ui-focus-ring-color': 'orange',
            },
        },
    },
    shadows: {
        outline: '0 0 0 3px var(--chakra-ui-focus-ring-color)',
    },

    components: {
        Alert: {
            // mensajes de alertas
            variants: {
                subtle: {
                    container: {
                        bg: 'orange.50',
                    },
                },
            },
        },
    },
})
