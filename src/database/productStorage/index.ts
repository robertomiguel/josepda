import { Schema } from 'mongoose'

const productStorageSchema = new Schema(
    {
        name: { type: String, require: true },
        address: { type: String },
        phone: { type: String },
        isMain: { type: Boolean },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default productStorageSchema
