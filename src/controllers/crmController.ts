import { BASE_URL } from "../models/constant";
import api from "../axios-api/api";
import {Customer} from "../models/customer";

export default class CrmController {
  static getAllCustomers(): Promise<Customer[]> {
    return api
      .get(BASE_URL + "/customers")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.data;
      })
      .catch((err) => {
        throw new Error(`Error fetching customers ${err}`);
      });
  }

  static getCustomer(id: string): Promise<Customer> {
    return api
      .get(BASE_URL + `/customers/${id}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.data;
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw new Error(`Error fetching customer ${err}`);
      });
  }

  static getCustomerOrders(id: string): Promise<void> {
    return api
      .get(BASE_URL + `/customers/${id}/orders`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.data;
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw new Error(`Error fetching customer ${err}`);
      });
  }

  static getCustomerOrderProducts(
    customerId: string,
    orderId: string
  ): Promise<void> {
    console.log(customerId);
    console.log(orderId);

    return api
      .get(BASE_URL + `/customers/${customerId}/orders/${orderId}/products`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.data;
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw new Error(`Error fetching customer ${err}`);
      });
  }
}
