import { User } from "./user";

export interface Wholesaler {
    _id: string
    customer: User
    isActive: boolean
    created: Date
    updated: Date
    userCreated: User
    userModified: User
}
