export interface Product {
    id: number,
    name: string,
    createdAt: Date,
    details: ProductDetails,
    stock: number
}

interface ProductDetails {
    price: number,
    description: string,
    color: string
}
