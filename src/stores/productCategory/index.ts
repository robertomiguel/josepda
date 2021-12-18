import { createContext } from 'react'
import { connection } from '../connection'
import { ProductCategory } from 'types/product/productCategory'

export interface ProductCategoryStore {
    list: Partial<ProductCategory>[]
    getList: () => Promise<boolean>
    getById: (id: string) => Promise<boolean>
    isLoading: boolean
    item: ProductCategory | {} | any
    createUpdate: (data: Partial<ProductCategory>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    openEditor: boolean
    sort: { field: string; sorted: number }
}

const ProductCategoryStore = () =>
    <ProductCategoryStore>{
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 },
        async getList() {
            this.isLoading = true
            const list: ProductCategory[] = await connection(
                {},
                'POST',
                '/_PATH'
            )
            this.isLoading = false
            this.list = list
            return true
        },
        async getById(id) {
            const data: ProductCategory[] = await connection(
                {},
                'POST',
                '/_PATH'
            )
            if (data) this.item = data[0]
            return true
        },
        async createUpdate(value) {
            await connection({}, 'POST', '/_PATH')
            return true
        },
        async deleteById(id) {
            await connection({}, 'POST', '/_PATH')
            return true
        },
    }

export default createContext(ProductCategoryStore())
