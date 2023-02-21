import { Customer } from '../../models/customer'

export const customers: Customer[] = [
    {
        id: 1,
        name: 'customer1',
        firstName: 'customer1',
        lastName: 'customer1',
        username: 'customer1',
        address: ['address1'],
        profile: ['profile1'],
        company: 'company1',
        email: 'email1',
        createdAt: new Date(),
    },
    {
        id: 2,
        name: 'customer2',
        firstName: 'customer2',
        lastName: 'customer2',
        username: 'customer2',
        address: ['address2'],
        profile: ['profile2'],
        company: 'company2',
        email: 'email2',
        createdAt: new Date(),
    },
]
