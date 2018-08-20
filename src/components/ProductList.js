import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div className="productListing">
        <div className="listing_header">
          <div className="listing_header__title">
            <h1>All Products</h1>
            <p>24 products</p>
          </div>

          <div className="listing_header__menu">
            <button>8 per page &#9660;</button>
            <div className="listing_header__menu_dropDown">
              <a href="#">16 per page</a>
              <a href="#">32 per page</a>
              <a href="#">64 per page</a>
            </div>
          </div>
        </div>

        <div className="listing_content">
          <div className="listing_content__element">
            <div className="listing_content__element-image">
              <img src="https://picsum.photos/200/200/?random" alt="product" />
            </div>
            <hr />
            <div className="listing_content__element-description">
              <h2>Product Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita cumque quas labore, quo! Nostrum, esse!
              </p>
              <span>$16.99</span>
            </div>
          </div>

          <div className="listing_content__element">
            <div className="listing_content__element-image">
              <img src="https://picsum.photos/200/200/?random" alt="product" />
            </div>
            <hr />
            <div className="listing_content__element-description">
              <h2>Product Title</h2>
              <p>Product Description</p>
              <span>$16.99</span>
            </div>
          </div>
          <div className="listing_content__element">
            <div className="listing_content__element-image">
              <img src="https://picsum.photos/200/200/?random" alt="product" />
            </div>
            <hr />
            <div className="listing_content__element-description">
              <h2>Product Title</h2>
              <p>Product Description</p>
              <span>$16.99</span>
            </div>
          </div>
          <div className="listing_content__element">
            <div className="listing_content__element-image">
              <img src="https://picsum.photos/200/200/?random" alt="product" />
            </div>
            <hr />
            <div className="listing_content__element-description">
              <h2>Product Title</h2>
              <p>Product Description</p>
              <span>$16.99</span>
            </div>
          </div>
          <div className="listing_content__element">
            <div className="listing_content__element-image">
              <img src="https://picsum.photos/200/200/?random" alt="product" />
            </div>
            <hr />
            <div className="listing_content__element-description">
              <h2>Product Title</h2>
              <p>Product Description</p>
              <span>$16.99</span>
            </div>
          </div>
        </div>

        <div className="listing_navigation">
          <a href="#" className="listing_navigation__disabled">
            &lt; Previous page
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

export default ProductList;
