export interface InvoiceType {
    _id: string
    name: string
    shortname: string
    symbol: string
    isCredit: boolean
    lastNumber: number
    isEInvoice: boolean
    updated: Date
}
