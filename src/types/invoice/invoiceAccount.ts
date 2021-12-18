import { FiscalCategoryType } from "types/fiscalCategory";

export interface InvoiceAccount {
    _id: string
    name: string
    address: string
    fiscalCategory: FiscalCategoryType
    cuit: string
    iibb: string
    fantasyName: string
    activityStartDate: Date
}
