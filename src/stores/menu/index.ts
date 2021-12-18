import { createContext } from 'react'
import { connection } from 'stores/connection'
import { MainMenu } from 'types/menu'

export interface IMainMenuStore {
    isLoading: boolean
    list: MainMenu[]
    getList: () => Promise<void>
}

const mainMenuStore = () =>
    <IMainMenuStore>{
        list: [] as MainMenu[],
        isLoading: false,
        async getList() {
            return (this.list = await connection({}, 'POST', '/menu/list'))
        },
    }

export default createContext(mainMenuStore())
