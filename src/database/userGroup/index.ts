import { Schema } from 'mongoose'

const userGroupSchema = new Schema(
    {
        name: { type: String, require: true },
        level: { type: Number, default: 0 },
        isActive: { type: Boolean, default: true },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default userGroupSchema
