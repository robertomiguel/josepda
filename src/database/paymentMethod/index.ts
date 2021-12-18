import { Schema } from 'mongoose'

const paymentMethodSchema = new Schema(
    {
        name: { type: String, require: true },
        useForCollect: { type: Boolean, default: false },
        useForPayment: { type: Boolean, default: false },
        isCheck: { type: Boolean, default: false },
        isBank: { type: Boolean, default: false },
        isMoney: { type: Boolean, default: false },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default paymentMethodSchema
