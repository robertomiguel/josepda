import { Schema } from 'mongoose'

const fiscalCategorySchema = new Schema(
    {
        name: { type: String, require: true },
        shortname: { type: String, require: true },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default fiscalCategorySchema
