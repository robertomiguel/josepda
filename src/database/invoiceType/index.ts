import { Schema } from 'mongoose'

const invoiceTypeSchema = new Schema(
    {
        name: { type: String, require: true },
        shortname: { type: String, require: true },
        symbol: { type: String, require: true },
        isCredit: { type: Boolean, default: false },
        lastNumber: { type: Number, default: 0 },
        isEInvoice: { type: Boolean, default: false },
        updated: { type: Date },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default invoiceTypeSchema
