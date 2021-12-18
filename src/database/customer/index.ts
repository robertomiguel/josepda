import { Schema } from 'mongoose'

const customerSchema = new Schema(
    {
        firstname: { type: String, trim: true },
        lastname: { type: String, trim: true },
        address: { type: String, trim: true },
        phone: { type: String, trim: true },
        email: { type: String, trim: true },
        isOrganization: { type: Boolean },
        organizationName: { type: String, trim: true },
        documentType: {
            type: Schema.Types.ObjectId,
            ref: 'DocumentType',
        },
        documentNumber: { type: String },
        fiscalCategory: {
            type: Schema.Types.ObjectId,
            ref: 'FiscalCategory',
        },
        created: {
            type: Date,
            default: new Date(),
        },
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

// Activar los campos virtuales
customerSchema.set('toObject', { virtuals: true })
customerSchema.set('toJSON', { virtuals: true })

customerSchema.virtual('fullname').get(function (this: any) {
    if (this.isOrganization) {
        return `${this.firstname} ${this.lastname}`
    } else {
        return this.organizationName
    }
})

export default customerSchema
