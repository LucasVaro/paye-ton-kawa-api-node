import { BASE_URL } from "../models/constant";
import api from "../axios-api/api";

export default class ErpController {
  static getProduct(id: string): Promise<any> {
    return api
      .get(BASE_URL + `/products/${id}`)
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
        throw new Error(`Error fetching product ${err}`);
      });
  }


  static getProducts(): Promise<any> {
    return api
      .get(BASE_URL + "/products")
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
        throw new Error(`Error fetching products ${err}`);
      });
  }
}
