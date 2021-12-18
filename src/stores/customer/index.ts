import { createContext } from 'react'
import { connection } from '../connection'
import { Customer } from 'types/customer'

export interface CustomerStore {
    list: Partial<Customer>[]
    getList: () => Promise<boolean>
    getById: (id: string) => Promise<boolean>
    isLoading: boolean
    item: Customer | {} | any
    createUpdate: (data: Partial<Customer>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    openEditor: boolean
    sort: { field: string; sorted: number }
    select: string
    filter: any
}
interface GetList {
    docs: Customer[]
    totalDocs: number
}

const CustomerStore = () =>
    <CustomerStore>{
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 }, // order default
        filter: {},
        select: '',
        async getList() {
            this.isLoading = true
            const list: GetList = await connection({}, 'POST', '/_PATH')
            this.list = list.docs
            this.isLoading = false
            return true
        },
        async getById(id) {
            const data: GetList = await connection({}, 'POST', '/_PATH')
            if (data.docs) this.item = data.docs[0]
            return true
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

export default createContext(CustomerStore())
