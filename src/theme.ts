import { extendTheme, theme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
})

export default extendTheme({
    breakpoints,
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
