import axios, { Method } from 'axios'

const PUBLIC_URL = process.env.NEXT_PUBLIC_LOCALHOST || 'https://bookstore-eta.vercel.app' // 'http://localhost:3000'

export const BASE_URL = `${PUBLIC_URL}/api/v1`

const BASE_HEADER = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
}

export const connection = async (
    data: object,
    method: Method,
    routePath: string
) =>
(
        await axios({
            method,
            url: `${BASE_URL + routePath}`,
            data: method !== 'GET' ? data : undefined,
            headers: BASE_HEADER,
            params: method === 'GET' ? data : undefined,
        })
    ).data
