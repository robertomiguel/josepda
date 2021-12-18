import { createContext } from 'react'
import { observable } from 'mobx'
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
    observable<ProductCategoryStore>({
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 },
        async getList() {
            this.isLoading = true
            const list: ProductCategory[] = await connection.productCategory(
                { filter: {}, sort: { [this.sort.field]: this.sort.sorted } },
                'POST'
            )
            console.log('product category ', list)
            this.isLoading = false
            this.list = list
            return true
        },
        async getById(id) {
            const data: ProductCategory[] = await connection.productCategory(
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
            await connection.productCategory(
                {
                    filter: { _id: this.item._id },
                    data: value,
                },
                'PUT'
            )
            return true
        },
        async deleteById(id) {
            await connection.productCategory({ _id: id }, 'DELETE')
            return true
        },
    })

export default createContext(ProductCategoryStore())
