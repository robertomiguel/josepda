import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import IconAwesome from 'components/common/IconOnline'
import React from 'react'
import { MainMenuProps } from 'types/menu'

const MobileMenu = ({ list, onSelect }: MainMenuProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)

    return (
        <>
            <Button
                ref={btnRef}
                colorScheme="orange.50"
                onClick={onOpen}
                variant="unstyled"
                padding={0}
                margin={0}
                display={{ sm: 'flex', md: 'none' }}
                _hover={{
                    background: 'orange.100',
                    transition: '.5s',
                }}
            >
                <IconAwesome name="bars" size={24} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="top"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody>
                        <Stack>
                            {list.map((item) => (
                                <Stack
                                    key={item.href}
                                    backgroundColor="orange.50"
                                    width={250}
                                    alignSelf="center"
                                    onClick={() => {
                                        onClose()
                                        onSelect(item.href)
                                    }}
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
                                        alignSelf="center"
                                    >
                                        {item.label}
                                    </Text>
                                </Stack>
                            ))}
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileMenu
