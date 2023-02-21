import axios from 'axios'
import { BASE_URL } from '../models/constant'
import { Product } from '../models/product'

export default class ErpController {
    static getProduct(id: string): Promise<Product> {
        return axios
            .get(BASE_URL + `/products/${id}`)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(`Error fetching product ${err}`)
            })
    }

    static getProducts(): Promise<Product[]> {
        return axios
            .get(BASE_URL + '/products')
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(`Error fetching products ${err}`)
            })
    }
}
