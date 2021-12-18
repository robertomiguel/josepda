import React from 'react'
import {
    Paginator,
    Container,
    Previous,
    Next,
    PageGroup,
    usePaginator,
} from 'chakra-paginator'
import { Stack } from '@chakra-ui/react'

interface Props {
    totalPage: number
    startPage: number
    onPageChange: (page: number) => void
}

export const PDAPaginator = ({ totalPage, startPage, onPageChange }: Props) => {
    const { currentPage, setCurrentPage } = usePaginator({
        initialState: { currentPage: startPage },
    })

    const handlePageChange = (value: number) => {
        setCurrentPage(value)
        onPageChange(value)
    }

    return (
        <Paginator
            pagesQuantity={totalPage}
            currentPage={currentPage}
            onPageChange={(value) => handlePageChange(value)}
            outerLimit={1}
            innerLimit={3}
            activeStyles={{
                bg: 'orange.400',
                color: 'white',
            }}
        >
            <Stack alignItems="center">
                <Container
                    align="center"
                    justify="space-between"
                    w="fit-content"
                    p={4}
                >
                    <Previous variant="link" fontWeight="bold">
                        {'<'}
                    </Previous>
                    <PageGroup isInline align="center" />
                    <Next variant="link" fontWeight="bold">
                        {'>'}
                    </Next>
                </Container>
            </Stack>
        </Paginator>
    )
}
