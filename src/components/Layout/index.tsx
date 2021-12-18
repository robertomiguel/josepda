import { Box, Container, Stack } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Container
                backgroundColor="white"
                boxShadow="md"
                maxWidth="container.xl"
                padding={4}
                paddingTop={0}
                borderRadius="md"
                width="100%"
            >
                <Navbar />
                {children}
            </Container>
        </div>
    )
}

export default Layout
