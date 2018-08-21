const apiUrl = 'https://whitechdevs.github.io/reactjs-test'; //todo: remove hardcode data here

export const productService = {
  loadProductCount,
  loadProductList
};

function loadProductCount() {
  return fetch(`${apiUrl}/products.json`).then(response =>
    handleResponse(response).then(data => data.length)
  );
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
