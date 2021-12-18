import { Schema } from 'mongoose'

const wholesalerSchema = new Schema(
    {
        customer: { 
            type: Schema.Types.ObjectId,
            ref: 'Customer',
            require: true 
        },
        isActive: { type: Boolean },
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

export default wholesalerSchema
