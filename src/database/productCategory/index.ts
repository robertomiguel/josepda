import { Schema } from 'mongoose'

const productCategorySchema = new Schema(
    {
        name: { type: String, require: true },
        stockMin: { type: Number, default: 0 },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default productCategorySchema
