export interface Customer {
    id: number,
    name: string,
    firstName: string,
    lastName: string,
    username: string,
    address: Array<string>,
    profile: Array<string>,
    company: string,
    email: string,
    createdAt: Date,
}
