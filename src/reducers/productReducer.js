import { productConstants } from '../constants/productConstants';

const initialState = {
  loading: true,
  productCount: '',
  productList: [],
  currentPageProductList: []
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case productConstants.LOAD_CURRENT_PAGE:
      return {
        ...state,
        currentPageProductList: action.productList,
        loading: false
      };

    case productConstants.LOAD_PRODUCT_LIST:
      return {
        ...state,
        productList: action.productList,
        loading: false
      };

    default:
      return state;
  }
}
