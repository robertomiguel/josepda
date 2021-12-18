import { Currency } from "types/currency";
import { Supplier } from "types/supplier";
import { User } from "types/user";
import { ProductCategory } from "./productCategory";
import { ProductStatus } from "./productStatus";

export interface Product {
    _id: string
    name: string
    model: string
    ncm: string
    price: {
        buyRate: number
        buy: number
        public: number
        special: number
    }
    currency: Currency
    code: string
    status: ProductStatus
    category: ProductCategory
    supplier: Supplier
    storage: string
    deleted: boolean
    created: Date
    updated: Date
    userCreated: User
    userModified: User
    details: {
        imei: string
        color: string
        capacity: string
    }
}
