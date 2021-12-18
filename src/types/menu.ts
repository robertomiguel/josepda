export interface MainMenu {
    icon: string
    href: string
    label: string
}

export interface MainMenuProps {
    list: MainMenu[]
    onSelect: (path: string) => void
}
