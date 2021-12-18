import { model, models } from 'mongoose'
import productSchema from './product'
import productStatusSchema from './productStatus'
import productCategorySchema from './productCategory'
import productStorageSchema from './productStorage'
import userSchema from './user'
import userGroupSchema from './userGroup'
import currencySchema from './currency'
import documentTypeSchema from './documentType'
import fiscalCategorySchema from './fiscalCategory'
import supplierSchema from './supplier'
import pointOfSaleSchema from './pointOfSale'
import invoiceTypeSchema from './invoiceType'
import paymentMethodSchema from './paymentMethod'
import conceptTypeSchema from './conceptType'
import invoiceStatusSchema from './invoiceStatus'
import customerSchema from './customer'
import invoiceAccountSchema from './invoiceAccount'
import invoiceSchema from './invoice'
import codeLegacySchema from './codeLegacy'
import wholesalerSchema from './wholesaler'

const dbModel = {
    Product: models?.Product || model('Product', productSchema),
    ProductStatus: models?.ProductStatus || model('ProductStatus', productStatusSchema),
    ProductCategory: models?.ProductCategory || model('ProductCategory', productCategorySchema),
    ProductStorage: models?.ProductStorage || model('ProductStorage', productStorageSchema),

    User: models?.User || model('User', userSchema),
    UserGroup: models?.UserGroup || model('UserGroup', userGroupSchema),

    Currency: models?.Currency || model('Currency', currencySchema),
    DocumentType: models?.DocumentType || model('DocumentType', documentTypeSchema),
    FiscalCategory: models?.FiscalCategory || model('FiscalCategory', fiscalCategorySchema),

    Supplier: models?.Supplier || model('Supplier', supplierSchema),

    PointOfSale: models?.PointOfSale || model('PointOfSale', pointOfSaleSchema),

    InvoiceType: models?.InvoiceType || model('InvoiceType', invoiceTypeSchema),

    PaymentMethod: models?.PaymentMethod || model('PaymentMethod', paymentMethodSchema),

    ConceptType: models?.ConceptType || model('ConceptType', conceptTypeSchema),

    InvoiceStatus: models?.InvoiceStatus || model('InvoiceStatus', invoiceStatusSchema),

    Customer: models?.Customer || model('Customer', customerSchema),

    InvoiceAccount: models?.InvoiceAccount || model('InvoiceAccount', invoiceAccountSchema),

    Invoice: models?.Invoice || model('Invoice', invoiceSchema),

    CodeLegacy: models?.CodeLegacy || model('CodeLegacy', codeLegacySchema),

    Wholesaler: models?.Wholesaler || model('Wholesaler', wholesalerSchema)
}

export default dbModel
