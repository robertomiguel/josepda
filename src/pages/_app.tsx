import { AppProps } from 'next/app' // AppProps para tipado
import { Box, ChakraProvider, Container } from '@chakra-ui/react'
import theme from 'theme'
import Layout from 'components/Layout'

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default App
