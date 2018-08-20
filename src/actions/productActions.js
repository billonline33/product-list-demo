import { productService } from '../services/productService';
import { productConstants } from '../constants/productConstants';

export const productActions = {
  loadProductList,
  loadCurrentPage
};

function loadProductList() {
  return dispatch => {
    return productService.loadProductList().then(response => {
      let productList = response;
      dispatch({
        type: productConstants.LOAD_PRODUCT_LIST,
        productList
      });
    });
  };
}

function loadCurrentPage(pageNumber = 1, pageSize = 24, productList) {
  return dispatch => {
    let currentPageList = productList.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );

    dispatch({
      type: productConstants.LOAD_CURRENT_PAGE,
      productList: currentPageList
    });
  };
}
