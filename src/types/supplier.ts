export interface Supplier {
    _id: string
    name: string
    created: Date
    updated: Date
    userCreated: { name: string }
    userModified: { name: string }
}
