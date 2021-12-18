import { Schema } from 'mongoose'

const InoiceStatusSchema = new Schema(
    {
        name: { type: String, require: true },
        isCollected: { type: Boolean, default: false },
        isPaid: { type: Boolean, default: false },
        isPending: { type: Boolean, default: false },
        isCanceled: { type: Boolean, default: false },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default InoiceStatusSchema
