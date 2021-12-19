import {
    Input,
    InputGroup,
    InputLeftElement,
    Spinner,
    Stack,
} from '@chakra-ui/react'
import React from 'react'
import IconAwesome from './IconOnline'

interface Props {
    value: string
    onChange: (value: string) => void
    isLoading?: boolean
    placeHolder?: string
}

const SearchInput = ({ value, onChange, isLoading, placeHolder }: Props) => {
    return (
        <Stack spacing={4} alignSelf="center">
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    {!isLoading && (
                        <IconAwesome name="search" size={24} color="bbbbbb" />
                    )}
                    {isLoading && <Spinner />}
                </InputLeftElement>

                <Input
                    width={{ sm: '300px', md: '600px' }}
                    placeholder={placeHolder}
                    type="search"
                    value={value}
                    onChange={(value) => onChange(value.target.value)}
                />
            </InputGroup>
        </Stack>
    )
}

export default SearchInput
