import { Schema } from 'mongoose'

// El Schema hace el tipado y también validación
const userSchema = new Schema(
    {
        username: { type: String, require: true },
        password: { type: String, require: true },
        token: { type: String },
        name: { type: String },
        group: {
            type: Schema.Types.ObjectId,
            ref: 'UserGroup',
        },
        isActive: { type: Boolean },
        deleted: { type: Boolean },
        lastAccessDate: { type: Date },
        lastIpAccess: { type: String },
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

export default userSchema
