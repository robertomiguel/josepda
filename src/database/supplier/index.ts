import { Schema } from 'mongoose'

const supplierSchema = new Schema(
    {
        name: { type: String, require: true },
        address: { type: String },
        phone: { type: String },
        email: { type: String },
        fiscalDocumentType: {
            type: Schema.Types.ObjectId,
            ref: 'DocumentType',
        },
        fiscalNumber: { type: String },
        fiscalCategory: {
            type: Schema.Types.ObjectId,
            ref: 'FiscalCategory',
        },
        created: { type: Date, default: new Date() },
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

export default supplierSchema
