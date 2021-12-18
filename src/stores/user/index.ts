import { createContext } from 'react'
import { connection } from '../connection'
import { LoginCredential, User } from 'types/user'

export interface UserStore {
    list: Partial<User>[]
    getList: () => Promise<boolean>
    getById: (id: string) => Promise<boolean>
    isLoading: boolean
    item: User | {} | any
    createUpdate: (data: Partial<User>) => Promise<boolean>
    deleteById: (id: string) => Promise<boolean>
    openEditor: boolean
    sort: { field: string; sorted: number }
    isLogged: boolean
    login: (credential: LoginCredential) => Promise<boolean>
    logout: () => Promise<boolean>
    user: Partial<User>
    checkSession: () => Promise<boolean>
}

const UserStore = () =>
    <UserStore>{
        list: [],
        isLoading: false,
        item: {},
        openEditor: false,
        sort: { field: 'name', sorted: 1 }, // order default
        isLogged: false,
        async getList() {
            this.isLoading = true
            const list: User[] = await connection({}, 'POST', '/_PATH')
            this.isLoading = false
            this.list = list
            return true
        },
        user: {},
        async getById(id) {
            const data: User[] = await connection({}, 'POST', '/_PATH')
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
        async login(credential: LoginCredential) {
            const user = await connection({}, 'POST', '/_PATH')
            if (user) {
                this.user = user
                this.isLogged = true
                window.location.href = '/'
            } else {
                this.isLogged = false
            }

            return true
        },
        async logout() {
            await connection({}, 'POST', '/_PATH')
            this.isLogged = false
            return true
        },
        async checkSession() {
            const user = await connection({}, 'POST', '/_PATH')
            if (user) {
                this.user = user
                this.isLogged = true
                return false
            } else {
                this.isLogged = false
                return true
            }
        },
    }

export default createContext(UserStore())
