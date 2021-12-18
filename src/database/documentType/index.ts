import { Schema } from 'mongoose'

const documentTypeSchema = new Schema(
    {
        name: { type: String, require: true },
        shortname: { type: String, require: true },
    },
    { versionKey: false, collation: { locale: 'es' } }
)
export default documentTypeSchema
