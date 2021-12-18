import { Schema } from 'mongoose'

const currencySchema = new Schema(
    {
        name: { type: String, require: true },
        symbol: { type: String, require: true },
        rate: {
            buy: { type: Number },
            sale: { type: Number },
        },
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

export default currencySchema
