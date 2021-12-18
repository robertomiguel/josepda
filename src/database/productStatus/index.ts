import { Schema } from 'mongoose'

const productStatusSchema = new Schema(
    {
        name: { type: String },
        isAvailableForSale: { type: Boolean },
        isRMA: { type: Boolean },
        isSold: { type: Boolean },
        isInitialStatus: { type: Boolean },
        isDeleted: { type: Boolean },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default productStatusSchema
