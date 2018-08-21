import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { productActions } from '../../actions/productActions';
import Pagination from '../PaginationControl/PaginationControl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getProductPageUrl } from '../../utils';

// add export to ProductList so it can be tested without connect
export class ProductList extends Component {
  constructor(props) {
    super(props);

    // small changes for getting data from queryParams
    let initialPageNumber = parseInt(this.props.queryParams.page, 10);
    let initialPageSize = parseInt(this.props.queryParams.per_page, 10);

    if (isNaN(initialPageNumber)) initialPageNumber = 1;
    if (isNaN(initialPageSize)) initialPageSize = 8;

    this.state = {
      loading: true,
      pageNumber: initialPageNumber,
      pageSize: initialPageSize
    };

    this.reLoadProductPage = this.reLoadProductPage.bind(this);
  }

  componentDidMount() {
    this.props.loadProductList().then(() => {
      this.reLoadProductPage();
    });
  }

  reLoadProductPage() {
    this.props.loadCurrentPage(
      this.state.pageNumber,
      this.state.pageSize,
      this.props.productList
    );
  }

  render() {
    const { productList, currentProductList } = this.props;
    const { pageNumber, pageSize } = this.state;

    //Todo: show loading when this.state.loading is true
    return (
      <div className="productListing">
        <div className="listing_header">
          <div className="listing_header__title">
            <h1>All Products</h1>
            <p>{productList.length} products</p>
          </div>

          <div className="listing_header__menu">
            <button>{pageSize} per page &#9660;</button>
            <div className="listing_header__menu_dropDown">
              <Link to={getProductPageUrl(1, 8)}>8 per page</Link>
              <Link to={getProductPageUrl(1, 16)}>16 per page</Link>
              <Link to={getProductPageUrl(1, 32)}>32 per page</Link>
              <Link to={getProductPageUrl(1, 64)}>64 per page</Link>
            </div>
          </div>
        </div>

        <div className="listing_content">
          {currentProductList.map(item => (
            <ProductCard
              key={item.id}
              price={item.price}
              image={item.product_image}
              name={item.product_name}
              description={item.description}
            />
          ))}
        </div>

        <Pagination
          pageNumber={pageNumber}
          pageSize={pageSize}
          totalProducts={productList.length}
          maxPageNumbersToShow={4}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadProductList: productActions.loadProductList,
      loadCurrentPage: productActions.loadCurrentPage
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    productList: state.productReducer.productList,
    currentProductList: state.productReducer.currentPageProductList
  };
};

// export default connect so it could be tested separately from ProductList
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
