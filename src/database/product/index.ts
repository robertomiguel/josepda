import { Schema } from 'mongoose'
import autoPopulate from 'mongoose-autopopulate'

// El Schema hace el tipado y también validación
const productSchema = new Schema(
    {
        name: { type: String },
        model: { type: String },
        code: { type: String },
        barcode: { type: String },
        currency: {
            type: Schema.Types.ObjectId,
            ref: 'Currency',
            autopopulate: true,
        },
        price: {
            buyRate: { type: Number },
            buy: { type: Number },
            public: { type: Number },
            special: { type: Number },
        },
        status: {
            type: Schema.Types.ObjectId,
            ref: 'ProductStatus',
            autopopulate: true,
        },
        invoice: {
            type: Schema.Types.ObjectId,
            ref: 'Invoice',
            autopopulate: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'ProductCategory',
            autopopulate: true,
        },
        supplier: {
            type: Schema.Types.ObjectId,
            ref: 'Supplier',
            autopopulate: true,
        },
        storage: {
            type: Schema.Types.ObjectId,
            ref: 'ProductStorage',
            autopopulate: true,
        },
        details: {
            imei: { type: String },
            color: { type: String },
            capacity: { type: String },
            info: { type: String },
            image: { type: String },
        },
        deleted: { type: Boolean },
        created: { type: Date },
        updated: { type: Date },
        userCreated: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            autopopulate: true,
        },
        userModified: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            autopopulate: true,
        },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

productSchema.plugin(autoPopulate)

export default productSchema
