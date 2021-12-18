import {
    Image,
    Text,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Grid,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'
import IconAwesome from 'components/common/IconOnline'
import React from 'react'
import { Product } from 'types/product/product'

interface Props {
    list: Product[]
}

const BuyList = ({ list }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)

    return (
        <>
            <Box
                padding={4}
                alignSelf="center"
                top={0}
                maxWidth={240}
                position="sticky"
                zIndex={1000}
            >
                <Button
                    colorScheme="primary"
                    onClick={onOpen}
                    ref={btnRef}
                    leftIcon={
                        <IconAwesome
                            name="file-text-o"
                            size={24}
                            color="ffffff"
                        />
                    }
                >
                    Ver Lista ({list.length})
                </Button>
            </Box>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Lista</DrawerHeader>
                    <DrawerBody>
                        <Box>
                            <Text>Productos seleccionados ({list.length})</Text>
                            <Grid>
                                {list.map((product) => (
                                    <Stack key={product._id}>
                                        <Text>{product.name}</Text>
                                        <Text>
                                            IMEI: {product.details.imei}
                                        </Text>
                                    </Stack>
                                ))}
                            </Grid>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button colorScheme="primary">Procesar</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default BuyList
