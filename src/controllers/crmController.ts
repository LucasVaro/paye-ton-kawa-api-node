import { BASE_URL } from '../models/constant'
import { Customer } from '../models/customer'
import axios from 'axios'

export default class CrmController {
    static getAllCustomers(): Promise<Customer[]> {
        return axios
            .get(BASE_URL + '/customers')
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(`Error fetching customers ${err}`)
            })
    }

    static getCustomer(id: string): Promise<Customer> {
        return axios
            .get(BASE_URL + `/customers/${id}`)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(`Error fetching customer ${err}`)
            })
    }

    static getCustomerOrders(id: string): Promise<void> {
        return axios
            .get(BASE_URL + `/customers/${id}/orders`)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(`Error fetching customer ${err}`)
            })
    }

    static getCustomerOrderProducts(
        customerId: string,
        orderId: string
    ): Promise<void> {
        return axios
            .get(
                BASE_URL + `/customers/${customerId}/orders/${orderId}/products`
            )
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(`Error fetching customer ${err}`)
            })
    }
}
