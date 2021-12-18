import dbModel from 'database'
import { dbConnect } from 'database/connection'
import { NextApiRequest, NextApiResponse } from 'next'
import { Product } from 'types/product/product'

export interface QueryGetList {
    filter: { [index: string]: any }
    sort: { [index: string]: number }
    select: string[]
    limit: number
    page: number
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') res.status(500).end()

    const query = req.body as QueryGetList

    await dbConnect()

    const page = parseInt(req.query.p.toString()) || 1
    const search = decodeURI(req.query.q as string) || ''
    const limit = query.limit > 50 ? 50 : query.limit
    const filter = {
        $or: [
            {
                name: {
                    $regex: search,
                    $options: 'i',
                },
            },
            {
                'details.imei': {
                    $regex: search,
                    $options: 'i',
                },
            },
        ],
    }

    try {
        const count: Number = await dbModel.Product.countDocuments(filter)
        const list: Product[] = await dbModel.Product.find(filter)
            .sort(query.sort)
            .select(query.select)
            .limit(limit)
            .skip((page - 1) * query.limit)
            .exec()

        res.status(200).json({ docs: list, totalDocs: count })
    } catch (e) {
        console.log('error: ', e)

        res.status(500).json({
            name: 'error',
            message: e,
        })
    }
}
