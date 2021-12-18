import { Box, Divider, Stack, useToast } from '@chakra-ui/react'
import { useDebounce } from 'common/useDebounce'
import { PDAPaginator } from 'components/common/PDAPaginator'
import SearchInput from 'components/common/SearchInput'
import BuyList from 'components/product/BuyList'
import ProductList from 'components/product/ProductList'
import React, { useEffect, useState } from 'react'
import { connection } from 'stores/connection'
import useSWR from 'swr'
import { set, setIn } from 'timm'
import { Product } from 'types/product/product'

const ProductPage = () => {
    const [cart, setCart] = useState<Product[]>([])
    const toast = useToast()
    const [text, setText] = useState('')
    const [list, setList] = useState<Product[]>([])
    const [totalItems, setTotalItems] = useState(0)
    const searchText = useDebounce(text, 500)
    const [isLoading, setIsLoading] = useState(false)

    const [searchQuery, setSearchQuery] = useState({
        filter: ['name', 'details.imei'],
        limit: 5,
        page: 1,
        select: [],
        sort: { name: 1 },
    })

    const fetcher = (url: string, query: any) => {
        setIsLoading(() => true)
        const res = connection(query, 'POST', url)
        setIsLoading(() => false)
        return res
    }

    const { data } = useSWR(
        `/product/list?p=${searchQuery.page}&q=${encodeURI(searchText)}`,
        (url) => fetcher(url, searchQuery)
    )

    useEffect(() => {
        if (data && data.docs) {
            setIsLoading(() => false)
            setList(() => data.docs)
            setTotalItems(() => data.totalDocs)
        }
    }, [data])

    const handleAddToCart = (product: Product) => {
        setCart((cart) => cart.concat(product))
        toast({
            title: product.name,
            description: 'Agregado a la Lista',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top',
            variant: 'subtle',
        })
    }

    return (
        <Stack>
            <SearchInput
                value={text}
                onChange={(value) => setText(() => value)}
                placeHolder="Nombre o IMEI..."
                isLoading={isLoading}
            />

            <Divider marginY={6} />

            {Boolean(cart.length) && <BuyList list={cart} />}

            <ProductList list={list} onSelect={handleAddToCart} />

            {totalItems > 0 && (
                <Box bottom={0} position="sticky">
                    <PDAPaginator
                        totalPage={parseInt(
                            `${totalItems / searchQuery.limit}`
                        )}
                        startPage={1}
                        onPageChange={(page: number) => {
                            setSearchQuery((searchQuery) =>
                                set(searchQuery, 'page', page)
                            )
                        }}
                    />
                </Box>
            )}
        </Stack>
    )
}

export default ProductPage
