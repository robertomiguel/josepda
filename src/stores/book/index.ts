import { createContext, useContext } from 'react'
import { makeAutoObservable, toJS } from 'mobx'
import { IBook } from 'types/book'
import { connection } from 'stores/connection'

export interface IBookStore {
    isLoading: boolean
    list: IBook
    form: any
    isFormLoaded: boolean
    getList: (filter?: any) => Promise<void>
    getById: (bookId: string) => Promise<IBook>
    create: (book: IBook) => Promise<string>
    update: (book: IBook) => Promise<boolean>
    delete: (bookId: string) => Promise<boolean>
    getForm: (formName: string) => Promise<boolean>
}

const bookStore = () =>
    makeAutoObservable<IBookStore>({
        list: {} as IBook,
        isLoading: false,
        form: undefined,
        isFormLoaded: false,
        async getList() {
            this.isLoading = true
            this.list = await connection({}, 'POST', '/book/list')
            this.isLoading = false
        },
        async getById(bookId: string) {
            return {} as IBook
        },
        async create(book: IBook) {
            return 'ok'
        },
        async update(book: IBook) {
            return true
        },
        async delete(bookId: string) {
            return true
        },
        async getForm(formName: string) {
            this.isLoading = true
            this.isFormLoaded = false
            this.form = await connection(
                { name: formName },
                'GET',
                '/form/getById'
            )
            this.isLoading = false
            this.isFormLoaded = true
            return true
        },
    })

const StoreContext = createContext<IBookStore>(bookStore())

// creación del hook para usar en componentes
const useBookStore = () => {
    return useContext(StoreContext)
}

export { bookStore, useBookStore }
