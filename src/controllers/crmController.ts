import fetch from "node-fetch";
import {BASE_URL} from "../models/constant";

export default class CrmController {
    static getAllCustomers(): Promise<void> {
        return fetch(BASE_URL + '/customers')
            .then((res) => res.json())
            .then((data) => {
                return data;
            })
            .catch((err) => {
                throw new Error(`Error fetching customers ${err}`);
            });
    }

    static getCustomer(id: string): Promise<void> {
        return fetch(BASE_URL + `/customers/${id}`)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                throw new Error(`Error fetching customer ${err}`);
            });
    }

    static getCustomerOrders(id: string): Promise<void> {
        return fetch(BASE_URL + `/customers/${id}/orders`)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                throw new Error(`Error fetching customer ${err}`);
            });
    }

    static getCustomerOrderProducts(customerId: string, orderId:string): Promise<void> {
        console.log(customerId)
        console.log(orderId)
        return fetch(BASE_URL + `/customers/${customerId}/orders/${orderId}/products`)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(res.statusText);
                }
                return res.json()
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                throw new Error(`Error fetching customer ${err}`);
            });
    }
}
