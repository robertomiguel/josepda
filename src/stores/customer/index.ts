import { createContext } from 'react'
import { observable } from 'mobx'
import { connection } from '../connection'
import { TablePaginationConfig } from 'antd'

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
    pagination: TablePaginationConfig
    select: string
    filter: any
}
interface GetList {
    docs: Customer[]
    totalDocs: number
}

const CustomerStore = () =>
    observable<CustomerStore>({
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 }, // order default
        pagination: {
            total: 0,
            current: 1,
            pageSize: 10,
        },
        filter: {},
        select: '',
        async getList() {
            this.isLoading = true
            const list: GetList = await connection.customer(
                {
                    filter: this.filter,
                    limit: this.pagination.pageSize,
                    page: this.pagination.current,
                    select: this.select,
                    sort: { [this.sort.field]: this.sort.sorted },
                },
                'POST'
            )
            this.pagination.total = list.totalDocs
            this.list = list.docs
            this.isLoading = false
            return true
        },
        async getById(id) {
            const data: GetList = await connection.customer(
                {
                    filter: { _id: id },
                    limit: 1,
                    page: 1,
                    select: '',
                    sort: { [this.sort.field]: this.sort.sorted },
                },
                'POST'
            )
            if (data.docs) this.item = data.docs[0]
            return true
        },
        async createUpdate(value) {
            const q = {
                filter: this.item._id ? { _id: this.item._id } : {},
                data: value,
            }
            const data = await connection.customer(q, 'PUT')
            return data.ok === 1 ? true : false
        },
        async deleteById(id) {
            const data = await connection.customer({ _id: id }, 'DELETE')
            return data.ok === 1 ? true : false
        },
    })

export default createContext(CustomerStore())
