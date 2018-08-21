import { productService } from './productService';

describe('productService test', () => {
  it('loadProductList return a promise', () => {
    return productService.loadProductList().then(data => {
      expect(data).toBeDefined();
    });
  });

  it('loadProductCount return a promise', () => {
    return productService.loadProductCount().then(data => {
      expect(data).toBeDefined();
      expect(data).toEqual(1000);
    });
  });
});
