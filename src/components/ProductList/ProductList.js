import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { productActions } from '../../actions/productActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  constructor(props) {
    super(props);

    const initialPageNumber = parseInt(this.props.queryParams.get('page'), 10);
    const initialPageSize = parseInt(
      this.props.queryParams.get('per_page'),
      10
    );

    this.state = {
      loading: true,
      pageNumber: initialPageNumber,
      pageSize: initialPageSize
    };
    this.handlePageSizeTo8 = this.handlePageSizeTo8.bind(this);
    this.handlePageSizeTo16 = this.handlePageSizeTo16.bind(this);
    this.reLoadProductPage = this.reLoadProductPage.bind(this);
  }

  componentDidMount() {
    this.props.loadProductList().then(() => {
      this.reLoadProductPage();
    });
  }

  handlePageSizeTo8() {
    this.setState(
      {
        pageSize: 8
      },
      () => this.reLoadProductPage()
    );
  }
  handlePageSizeTo16() {
    this.setState(
      {
        pageSize: 16
      },
      () => this.reLoadProductPage()
    );
  }

  handleNextPageClick() {
    let currentPageNumber = this.state.pageNumber;
    this.setState(
      {
        pageNumber: currentPageNumber + 1
      },
      () => this.reLoadProductPage()
    );
  }

  handlePreviousPageClick() {
    let currentPageNumber = this.state.pageNumber;
    this.setState(
      {
        pageNumber: currentPageNumber - 1
      },
      () => this.reLoadProductPage()
    );
  }

  reLoadProductPage() {
    console.log('this.state=', this.state);
    this.props.loadCurrentPage(
      this.state.pageNumber,
      this.state.pageSize,
      this.props.productList
    );
  }

  render() {
    const { productList, currentProductList } = this.props;
    const { pageNumber, pageSize } = this.state;
    console.log('currentProductLlist=', currentProductList);
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
              <Link to={'/home/?page=1&per_page=8'}>8 per page</Link>
              <Link to={'/home/?page=1&per_page=16'}>16 per page</Link>
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

        <div className="listing_navigation">
          <a href="#" className="listing_navigation__disabled">
            Previous page{' '}
          </a>
          <a href="#" className="listing_navigation__active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">Next page &gt;</a>
        </div>
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

ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);

export default ProductList;
