import { createContext } from 'react'
import { connection } from '../connection'
import { Wholesaler } from 'types/wholesaler'
import { ConceptType } from 'types/conceptType'

export interface WholesalerStore {
    list: Partial<Wholesaler>[]
    select: string
    sort: { field: string; sorted: number }
    filter: any
    getList: (filter?: any) => Promise<boolean>
    getById: (id: string) => Promise<boolean>
    createUpdate: (data: Partial<Wholesaler>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    isLoading: boolean
    openEditor: boolean
    item: Wholesaler | {} | any
    concept: ConceptType | {} | any
}

interface IGetList {
    docs: Wholesaler[]
    totalDocs: number
}

const WholesalerStore = () =>
    <WholesalerStore>{
        list: [],
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
        async createUpdate(data: Partial<Wholesaler>) {
            const res = await connection({}, 'POST', '/_PATH')
            return true
        },
        async deleteById(id) {
            const res = await connection({}, 'POST', '/_PATH')
            return true
        },
    }

export default createContext(WholesalerStore())
