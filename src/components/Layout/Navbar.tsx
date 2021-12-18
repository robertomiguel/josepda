import React from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MainMenu } from 'types/menu'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

const Navbar = () => {
    const route = useRouter()
    const menuList: MainMenu[] = [
        { icon: 'eye', href: '/', label: 'Dashboard' },
        { icon: 'eye', href: '/product/list', label: 'Productos' },
        { icon: 'eye', href: '/sales', label: 'Caja' },
        { icon: 'eye', href: '/customer', label: 'Clientes' },
        { icon: 'eye', href: '/supplier', label: 'Proveedores' },
        { icon: 'eye', href: '/admin', label: 'Configuración' },
    ]

    function handleOnSelect(href: string) {
        route.push(href)
    }

    return (
        <Box padding={4} backgroundColor="white">
            <DesktopMenu
                list={menuList}
                onSelect={(href) => handleOnSelect(href)}
            />
            <MobileMenu
                list={menuList}
                onSelect={(href) => handleOnSelect(href)}
            />
        </Box>
    )
}

export default Navbar
