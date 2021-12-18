export interface Currency {
    _id: string
    name: string
    symbol: string
    rate: {
        buy: number
        sale: number
    }
    created: Date
    updated: Date
    userCreated: { name: string }
    userModified: { name: string }
}
