import React, { Component } from 'react';
import './ProductCard.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const { price, image, name, description } = this.props;
    return (
      <div className="listing_content__element">
        <div className="listing_content__element-image">
          <img src={image} alt="product" width="280px" />
        </div>
        <hr />
        <div className="listing_content__element-description">
          <h2>{name}</h2>
          <p>{description}</p>
          <span>{price}</span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
