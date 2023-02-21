import {Product} from "../../models/product";

export const products: Product[] = [
    {
      id: 1,
      name: "product1",
      createdAt: new Date(),
      details: {
        price: 1,
        description:  "description1",
        color: "color1",
      },
      stock: 1,
    },
    {
        id: 2,
        name: "product2",
        createdAt: new Date(),
        details: {
            price: 2,
            description:  "description2",
            color: "color2",
        },
        stock: 2,
    }
];
