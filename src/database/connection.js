import mongoose from 'mongoose'

// crear archivo .dev y agregar su conexción a mongodb con la clave: NEXT_PUBLIC_MONGODB=....
const url = process.env.NEXT_PUBLIC_MONGODB

const conn = {
    isConnected: false,
}

export const dbConnect = async () => {
    if (conn.isConnected) return
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = mongoose.connection

    // ejecuta una vez
    db.once('open', () => {
        console.log('conectado a DB')
        conn.isConnected = true
    })

    // ejecuta cada vez que hay un error
    db.on('error', (error) => {
        console.log('error de conexión en DB: ', error)
    })
}
