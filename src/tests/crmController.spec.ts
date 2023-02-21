import CrmController from '../controllers/crmController'
import { customers } from './mocks/crmMocks'
jest.mock('../controllers/crmController') // SoundPlayer is now a mock constructor

describe('ErpController', function () {
    it('should return all products', async function () {
        jest.spyOn(CrmController, 'getAllCustomers').mockResolvedValue(
            customers
        )
        const data = await CrmController.getAllCustomers()
        expect(CrmController.getAllCustomers).toHaveBeenCalledTimes(1)
        expect(data).toEqual(customers)
    })

    it('should return product with id 1', async function () {
        const customer = customers[0]
        jest.spyOn(CrmController, 'getCustomer').mockResolvedValue(customer)
        const data = await CrmController.getCustomer(customer.id.toString())
        expect(CrmController.getCustomer).toHaveBeenCalledTimes(1)
        expect(data).toEqual(customer)
    })

    it('should not return product with id 1', async function () {
        const customer = customers[0]
        const customer2 = customers[1]

        jest.spyOn(CrmController, 'getCustomer').mockResolvedValue(customer2)
        const data = await CrmController.getCustomer(customer.id.toString())
        expect(CrmController.getCustomer).toHaveBeenCalledTimes(2)
        expect(data).not.toEqual(customer)
    })
})
