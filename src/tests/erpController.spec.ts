import ErpController from '../controllers/erpController'
import { products } from './mocks/erpMocks'
jest.mock('../controllers/erpController') // SoundPlayer is now a mock constructor

describe('ErpController', function () {
    it('should return all products', async function () {
        jest.spyOn(ErpController, 'getProducts').mockResolvedValue(products)
        const data = await ErpController.getProducts()
        expect(ErpController.getProducts).toHaveBeenCalledTimes(1)
        expect(data).toEqual(products)
    })

    it('should return product with id 1', async function () {
        jest.spyOn(ErpController, 'getProduct').mockResolvedValue(products[0])
        const data = await ErpController.getProduct('2')
        expect(ErpController.getProduct).toHaveBeenCalledTimes(1)
        expect(data).toEqual(products[0])
    })
})
