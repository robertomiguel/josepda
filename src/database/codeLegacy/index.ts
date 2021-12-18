import { Schema } from 'mongoose'

const codeLegacySchema = new Schema(
    {
        code: { type: String},
        name: { type: String},
        model: { type: String},
        color: { type: String},
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default codeLegacySchema