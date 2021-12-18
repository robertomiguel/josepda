import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { MainMenuProps } from 'types/menu'

const DesktopMenu = ({ list, onSelect }: MainMenuProps) => {
    return (
        <Stack
            direction="row"
            width="fit-content"
            marginLeft="auto"
            marginRight="auto"
            display={{ sm: 'none', md: 'flex' }}
        >
            {list.map((item) => (
                <Stack
                    key={item.href}
                    backgroundColor="orange.50"
                    onClick={() => onSelect(item.href)}
                    borderRadius={11}
                    cursor="pointer"
                    _hover={{
                        background: 'orange.100',
                        transition: '.5s',
                    }}
                >
                    <Text
                        color="orange.700"
                        fontWeight="bold"
                        fontSize={15}
                        padding={3}
                    >
                        {item.label}
                    </Text>
                </Stack>
            ))}
        </Stack>
    )
}

export default DesktopMenu
