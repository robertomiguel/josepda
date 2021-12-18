import { Schema } from 'mongoose'

const invoiceSchema = new Schema(
    {
        number: { type: Number },
        invoiceType: {
            type: Schema.Types.ObjectId,
            ref: 'InvoiceType',
        },
        customer: {
            _id: { type: Schema.Types.ObjectId },
            name: { type: String },
            fiscalCategory: { type: String },
            documentType: { type: String },
            documentNumber: { type: Number },
            address: { type: String },
        },
        status: {
            type: Schema.Types.ObjectId,
            ref: 'InvoiceStatus',
        },
        date: { type: Date },
        pointOfSale: {
            type: Schema.Types.ObjectId,
            ref: 'PointOfSale',
        },
        invoiceAccount: {
            type: Schema.Types.ObjectId,
            ref: 'InvoiceAccount',
        },
        currency: {
            name: { type: String },
            symbol: { type: String },
            rate: { type: Number },
        },
        totalAmount: { type: Number },
        pendingAmount: { type: Number },
        payAmount: { type: Number },
        payment: [
            {
                paymentMethod: {
                    type: Schema.Types.ObjectId,
                    ref: 'PaymentMethod',
                },
                amount: { type: Number },
                currency: {
                    name: { type: String },
                    symbol: { type: String },
                    rate: { type: Number },
                },
            },
        ],
        concept: [
            {
                conceptType: {
                    type: Schema.Types.ObjectId,
                    ref: 'ConceptType',
                },
                detail: { type: String },
                amount: { type: Number },
                currency: {
                    symbol: { type: String },
                    rate: { type: Number },
                },
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                },
            },
        ],
        created: { type: Date },
        updated: { type: Date },
        userCreated: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        userModified: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default invoiceSchema
