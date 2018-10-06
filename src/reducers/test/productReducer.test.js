import { productConstants } from '../../constants/productConstants';
import { productReducer } from '../productReducer';

const initialState = {
  loading: true,
  productCount: '',
  productList: [],
  currentPageProductList: []
};

describe('productReducer test', () => {
  it('should return the initial state', () => {
    expect(productReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOAD_PRODUCT_LIST', () => {
    expect(
      productReducer(initialState, {
        type: productConstants.LOAD_PRODUCT_LIST,
        productList: [1, 2, 3]
      })
    ).toEqual({
      ...initialState,
      loading: false,
      productList: [1, 2, 3]
    });
  });

  it('should handle LOAD_PRODUCT_LIST', () => {
    expect(
      productReducer(initialState, {
        type: productConstants.LOAD_CURRENT_PAGE,
        productList: [1, 2, 3]
      })
    ).toEqual({
      ...initialState,
      loading: false,
      currentPageProductList: [1, 2, 3]
    });
  });
});
