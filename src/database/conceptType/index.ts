import { Schema } from 'mongoose'

/*
NAME                        isCredit
Producto                    true                
Reparaciones                true
Pago Alquiler               false
Bonificación                false
Luz                         false
Telefonía                   false
Pago proveedores            false
*/

const conceptTypeSchema = new Schema(
    {
        name: { type: String, require: true },
        isCredit: { type: Boolean },
        detail: { type: String },
        created: { type: Date, default: new Date() },
    },
    { versionKey: false, collation: { locale: 'es' } }
)

export default conceptTypeSchema
