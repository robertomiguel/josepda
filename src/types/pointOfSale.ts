import { InvoiceAccount } from "./invoice/invoiceAccount";
import { User } from "./user";

export interface PointOfSale {
    _id: string
    name: string
    address: string
    defaultInvoiceAccount: InvoiceAccount
    users: Partial<User>[]
}
