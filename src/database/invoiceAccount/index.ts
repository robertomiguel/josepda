import { Schema } from 'mongoose'

const invoiceAccountSchema = new Schema(
    {
        name: { type: String, require: true },
        address: { type: String },
        fiscalCategory: {
            type: Schema.Types.ObjectId,
            ref: 'FiscalCategory',
        },
        cuit: { type: String },
        iibb: { type: String },
        fantasyName: { type: String },
        activityStartDate: { type: Date },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default invoiceAccountSchema
