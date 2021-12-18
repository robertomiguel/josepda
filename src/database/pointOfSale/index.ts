import { Schema } from 'mongoose'

const userSchema = new Schema(
    {
        name: { type: String, require: true },
        address: { type: String, require: true },
        defaultInvoiceAccount: {
            type: Schema.Types.ObjectId,
            ref: 'InvoiceAccount',
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default userSchema
