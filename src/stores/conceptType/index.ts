import { createContext } from 'react'
import { connection } from '../connection'
import { ConceptType } from 'types/conceptType'

export interface ConceptTypeStore {
    list: Partial<ConceptType>[]
    getList: (filter?: Partial<ConceptType>) => Promise<ConceptType[]>
    getById: (id: string) => Promise<boolean>
    isLoading: boolean
    item: ConceptType | {} | any
    createUpdate: (data: Partial<ConceptType>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    openEditor: boolean
    sort: { field: string; sorted: number }
}

const ConceptTypeStore = () =>
    <ConceptTypeStore>{
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 }, // order default
        async getList(filter) {
            this.isLoading = true
            const list: ConceptType[] = await connection({}, 'POST', '/_PATH')
            this.isLoading = false
            this.list = list
            return list
        },
        async getById(id) {
            const data: ConceptType[] = await connection(
                { id },
                'POST',
                '/_PATH'
            )

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
            const data = await connection({ id }, 'POST', '/_PATH')
            return data.ok === 1 ? true : false
        },
    }

export default createContext(ConceptTypeStore())
