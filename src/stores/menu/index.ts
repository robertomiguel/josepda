import { createContext } from 'react'
import { observable } from 'mobx'
import { connection } from 'stores/connection'
import { IMainMenu } from 'types/menu'

export interface IMainMenuStore {
    isLoading: boolean
    list: IMainMenu[]
    getList: () => Promise<void>
}

const mainMenuStore = () =>
    observable<IMainMenuStore>({
        list: [] as IMainMenu[],
        isLoading: false,
        async getList() {
            return (this.list = await connection({}, 'POST', '/menu/list'))
        },
    })

export default createContext(mainMenuStore())
