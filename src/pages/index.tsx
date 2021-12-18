import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
    return (
        <Stack direction="column" alignItems="center">
            <Text fontSize={20} fontWeight="bold">
                Jose PDA Control
            </Text>
            <Text fontStyle="italic">Refurbished</Text>
        </Stack>
    )
}

export default Home
