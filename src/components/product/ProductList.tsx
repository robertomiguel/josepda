import React from 'react'
import { Stack, Image, Button, Grid, Text } from '@chakra-ui/react'
import { Product } from 'types/product/product'
import { parseCurrencyAR, parseCurrencyUSD } from 'common/parseCurrency'
import IconAwesome from 'components/common/IconOnline'

interface Props {
    list: Product[]
    onSelect: (product: Product) => void
}

const ProductList = ({ list, onSelect }: Props) => {
    return (
        <Stack>
            <Grid
                gridGap={6}
                templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
            >
                {Boolean(list) &&
                    list.map((product) => (
                        <Stack
                            key={product._id}
                            backgroundColor="gray.50"
                            borderRadius="md"
                            padding={4}
                            spacing={3}
                            minWidth={200}
                        >
                            <Image
                                alt={product.name}
                                src="http://placehold.it/128x128"
                                borderRadius={4}
                                maxHeight={128}
                                objectFit="cover"
                            />
                            <Text fontWeight="bold" fontFamily="sans-serif">
                                {product.name}
                            </Text>
                            <Text fontSize="sm">
                                {product.category.name}
                                <br />
                                {product.details.imei}
                                <br />
                                {product.details.color}
                                <br />
                                {product.details.capacity}
                            </Text>
                            <Text fontWeight="bold" color="green.500">
                                {parseCurrencyUSD(product.price.public)}
                            </Text>
                            <Text fontWeight="bold" color="green.500">
                                {parseCurrencyAR(
                                    product.price.public *
                                        product.currency.rate.sale
                                )}
                            </Text>
                            <Button
                                backgroundColor="orange.100"
                                _hover={{
                                    background: 'orange.200',
                                    transition: '.5s',
                                }}
                                onClick={() => onSelect(product)}
                                rightIcon={
                                    <IconAwesome
                                        name="cart-plus"
                                        size={24}
                                        color="000000"
                                    />
                                }
                            >
                                Agregar
                            </Button>
                        </Stack>
                    ))}
            </Grid>
        </Stack>
    )
}

export default ProductList
