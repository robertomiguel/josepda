import { createContext } from 'react'
import { ConceptType } from 'types/conceptType'
import { CurrencyInvoice } from 'types/invoice/currencyInvoice'
import { CustomerInvoice } from 'types/invoice/invoice'
import { InvoiceAccount } from 'types/invoice/invoiceAccount'
import { InvoiceStatus } from 'types/invoice/invoiceStatus'
import { InvoiceType } from 'types/invoice/invoiceType'
import { PaymentMethod } from 'types/paymentMethod'
import { PointOfSale } from 'types/pointOfSale'
import { Product } from 'types/product/product'
import { User } from 'types/user'
import { connection } from '../connection'

export interface PaymentInvoice {
    paymentMethod: PaymentMethod
    amount: number
    currency: CurrencyInvoice
}

export interface ConceptInvoice {
    conceptType: ConceptType
    detail: string
    amount: number
    currency: {
        symbol: string
        rate: number
    }
    product: Product
}

export interface Invoice {
    _id: string
    number: number
    invoiceType: InvoiceType
    customer: CustomerInvoice
    status: InvoiceStatus
    date: Date
    pointOfSale: PointOfSale
    invoiceAccount: InvoiceAccount
    currency: CurrencyInvoice
    totalAmount: number
    pendingAmount: number
    payAmount: number
    payment: PaymentInvoice[]
    concept: ConceptInvoice[]
    created: Date
    updated: Date
    userCreated: User
    userModified: User
}

export interface InvoiceStore {
    list: Partial<Invoice>[]
    getList: () => Promise<boolean>
    getById: (id: string) => Promise<boolean>
    isLoading: boolean
    item: Invoice | {} | any
    createUpdate: (data: Partial<Invoice>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    openEditor: boolean
    sort: { field: string; sorted: number }
}

const InvoiceStore = () =>
    <InvoiceStore>{
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 }, // order default
        async getList() {
            this.isLoading = true
            const list: Invoice[] = await connection({}, 'POST', '/_PATH')
            this.isLoading = false
            this.list = list
            return true
        },
        async getById(id) {
            const data: Invoice[] = await connection({}, 'POST', '/_PATH')
            if (data) this.item = data[0]
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

export default createContext(InvoiceStore())
