import { createContext } from 'react'
import { connection } from '../connection'
import { Currency } from 'types/currency'

export interface CurrencyStore {
    list: Partial<Currency>[]
    getList: () => Promise<boolean>
    getById: (id: string) => Promise<Currency>
    isLoading: boolean
    item: Currency | {} | any
    createUpdate: (data: Partial<Currency>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    openEditor: boolean
    sort: { field: string; sorted: number }
}

const CurrencyStore = () =>
    <CurrencyStore>{
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 }, // order default
        async getList() {
            this.isLoading = true
            const list: Currency[] = await connection({}, 'POST', '/_PATH')
            this.isLoading = false
            this.list = list
            return true
        },
        async getById(id) {
            this.isLoading = true
            const data: Currency = await connection({}, 'POST', '/_PATH')
            this.isLoading = false
            return data
        },
        async createUpdate(value) {
            const q = {
                filter: this.item._id ? { _id: this.item._id } : {},
                data: value,
            }
            const data = await connection({}, 'POST', '/_PATH')
            return data.ok === 1 ? true : false
        },
        async deleteById(id) {
            const data = await connection({}, 'POST', '/_PATH')
            return data.ok === 1 ? true : false
        },
    }

export default createContext(CurrencyStore())
