import { createContext } from 'react'
import { connection } from '../connection'

export interface DocumentTypeStore {
    list: Partial<DocumentType>[]
    getList: () => Promise<boolean>
    getById: (id: string) => Promise<boolean>
    isLoading: boolean
    item: DocumentType | {} | any
    createUpdate: (data: Partial<DocumentType>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    openEditor: boolean
    sort: { field: string; sorted: number }
}

const DocumentTypeStore = () =>
    <DocumentTypeStore>{
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 }, // order default
        async getList() {
            this.isLoading = true
            const list: DocumentType[] = await connection({}, 'POST', '/_PATH')
            this.isLoading = false
            this.list = list
            return true
        },
        async getById(id) {
            const data: DocumentType[] = await connection({}, 'POST', '/_PATH')

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

export default createContext(DocumentTypeStore())
