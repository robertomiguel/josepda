import { FiscalCategoryType } from "./fiscalCategory";
import { User } from "./user";

export interface Customer {
    _id: string
    firstname: string
    lastname: string
    fullname: string
    address: string
    phone: string
    email: string
    isOrganization: boolean
    organizationName: string
    documentType: DocumentType
    documentNumber: string
    fiscalCategory: FiscalCategoryType
    created: Date
    updated: Date
    userCreated: User
    userModified: User
}
