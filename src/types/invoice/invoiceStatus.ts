export interface InvoiceStatus {
    _id: string
    name: string
    isCollected: boolean
    isPaid: boolean
    isPending: boolean
    isCanceled: boolean
}
