import { BASE_URL } from '../models/constant'
import fetch from 'node-fetch'

export default class ErpController {
    static getProduct(id: string): Promise<any> {
        return fetch(BASE_URL + `/products/${id}`)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(res.statusText)
                }

                return res.json()
            })
            .then((data) => {
                return data
            })
            .catch((err) => {
                throw new Error(`Error fetching product ${err}`)
            })
    }

    static getProducts(): Promise<any> {
        return fetch(BASE_URL + '/products')
            .then((res) => res.json())
            .then((data) => {
                return data
            })
            .catch((err) => {
                throw new Error(`Error fetching products ${err}`)
            })
    }
}
