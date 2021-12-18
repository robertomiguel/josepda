import React from 'react'
import { Image } from '@chakra-ui/react'

interface Props {
    name: string
    size?: number
    color?: string
}

const IconAwesome = ({ name, size = 32, color = '000000' }: Props) => (
    <Image
        alt=""
        src={`https://icongr.am/fontawesome/${name}.svg?size=${size}&color=${color}`}
    />
)

export default IconAwesome
