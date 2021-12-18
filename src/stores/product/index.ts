import { createContext } from 'react'
import { connection } from '../connection'
import { Product } from 'types/product/product'
import { ConceptType } from 'types/conceptType'

export interface ProductStore {
    list: Partial<Product>[]
    select: string
    sort: { field: string; sorted: number }
    filter: any
    getList: (filter?: any) => Promise<boolean>
    getById: (id: string) => Promise<boolean>
    createUpdate: (data: Partial<Product>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    isLoading: boolean
    openEditor: boolean
    item: Product | {} | any
    concept: ConceptType | {} | any
}

interface IGetList {
    docs: Product[]
    totalDocs: number
}

const ProductStore = () =>
    <ProductStore>{
        list: [],
        pagination: {
            total: 0,
            current: 1,
            pageSize: 10,
        },
        filter: {},
        sort: { field: 'name', sorted: 1 },
        select: '',
        isLoading: false,
        openEditor: false,
        item: {},
        concept: {},
        async getList(filter) {
            this.isLoading = true
            const list: IGetList = await connection({}, 'POST', '/_PATH')
            this.list = list.docs
            this.isLoading = false
            return true
        },
        async getById(id) {
            this.isLoading = true
            const data: IGetList = await connection({}, 'POST', '/_PATH')
            if (data.docs) this.item = data.docs[0]
            this.isLoading = false
            return true
        },
        async createUpdate(data: Partial<Product>) {
            const res = await connection({}, 'POST', '/_PATH')
            return true
        },
        async deleteById(id) {
            const res = await connection({}, 'POST', '/_PATH')
            return true
        },
    }

export default createContext(ProductStore())
