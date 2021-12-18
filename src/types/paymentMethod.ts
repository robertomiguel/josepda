export interface PaymentMethod {
    _id: string
    name: string
    useForCollect: boolean
    useForPayment: boolean
    isCheck: boolean
    isBank: boolean
    isMoney: boolean
}
