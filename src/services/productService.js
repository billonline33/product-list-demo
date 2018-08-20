const apiUrl = 'https://whitechdevs.github.io/reactjs-test';

export const productService = {
  loadProductCount,
  loadProductList
};

function loadProductCount() {
  fetch(`${apiUrl}/products.json`).then(handleResponse);
}

function loadProductList(pageSize = 12, pageNumber = 1) {
  return fetch(`${apiUrl}/products.json`).then(response =>
    handleResponse(response)
  );
}

function handleResponse(response) {
  //Todo: check web server response code here
  //if all successful: return below:
  return response.json();
}
