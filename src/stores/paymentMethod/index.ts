import { createContext } from 'react'
import { observable } from 'mobx'
import { connection } from '../connection'
import { PaymentMethod } from 'types/paymentMethod'

export interface PaymentMethodStore {
    list: Partial<PaymentMethod>[]
    getList: () => Promise<boolean>
    getById: (id: string) => Promise<boolean>
    isLoading: boolean
    item: PaymentMethod | {} | any
    createUpdate: (data: Partial<PaymentMethod>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    openEditor: boolean
    sort: { field: string; sorted: number }
}

const PaymentMethodStore = () =>
    observable<PaymentMethodStore>({
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 }, // order default
        async getList() {
            this.isLoading = true
            const list: PaymentMethod[] = await connection.paymentMethod(
                { filter: {}, sort: { [this.sort.field]: this.sort.sorted } },
                'POST'
            )
            console.log('product storage ', list, ' orden ', this.sort)
            this.isLoading = false
            this.list = list
            return true
        },
        async getById(id) {
            const data: PaymentMethod[] = await connection.paymentMethod(
                {
                    filter: { _id: id },
                    options: {
                        limit: 1,
                    },
                },
                'POST'
            )

            if (data) this.item = data[0]
            return true
        },
        async createUpdate(value) {
            const q = {
                filter: this.item._id ? { _id: this.item._id } : {},
                data: value,
            }
            console.log('se envía q: ', q)

            const data = await connection.paymentMethod(q, 'PUT')
            return data.ok === 1 ? true : false
        },
        async deleteById(id) {
            const data = await connection.paymentMethod({ _id: id }, 'DELETE')
            return data.ok === 1 ? true : false
        },
    })

export default createContext(PaymentMethodStore())