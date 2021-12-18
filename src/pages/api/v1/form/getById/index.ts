import { NextApiRequest, NextApiResponse } from 'next'
import bookFormBasic from './book/formBasic.json'
import bookFormAdvance from './book/formAdvance.json'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // En app real, se recupura desde una DB el formato del formulario
    const formListDB: { [index: string]: any } = {
        bookFormBasic,
        bookFormAdvance,
    }
    const form = formListDB[req.query.name as string]
    if (form) res.status(200).json(form)
    else res.status(500).emit('error')
}
