import { createContext } from 'react'
import { connection } from '../connection'
import { ProductStatus } from 'types/product/productStatus'

export interface ProductStatusStore {
    list: Partial<ProductStatus>[]
    getList: (filter?: Partial<ProductStatus>) => Promise<ProductStatus[]>
    getById: (id: string) => Promise<boolean>
    isLoading: boolean
    item: ProductStatus | {} | any
    createUpdate: (data: Partial<ProductStatus>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    openEditor: boolean
    sort: { field: string; sorted: number }
}

const ProductStatusStore = () =>
    <ProductStatusStore>{
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 }, // order default
        async getList(filter) {
            this.isLoading = true
            const list: ProductStatus[] = await connection({}, 'POST', '/_PATH')
            this.isLoading = false
            this.list = list
            return list
        },
        async getById(id) {
            this.isLoading = true
            const data: ProductStatus[] = await connection({}, 'POST', '/_PATH')
            if (data) this.item = data[0]
            this.isLoading = false
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

export default createContext(ProductStatusStore())
