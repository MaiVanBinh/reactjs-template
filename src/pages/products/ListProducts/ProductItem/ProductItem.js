import React from "react";
import "./ProductItem.css";
import {
  IconHeart,
  IconShoppongCart,
  IconView,
} from "./../../../../utilities/SVG";

const ProductItem = (props) => {
  const { price, image, name } = props;
  return (
    <div className="card" data-item="+">
      <div className="imgBx">
        <img alt="" src={image} />
        <ul className="action">
          <li>
            <IconHeart width={16} height={16} />
            <span>Add to Wishlist</span>
          </li>
          <li>
            <IconShoppongCart width={16} height={16} />
            <span>Add to Cart</span>
          </li>
          <li>
            <IconView width={16} height={16} />
            <span>Add to Details</span>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="productName">
          <h3>{name}</h3>
        </div>
        <div className="price_rating">
          <h2>${price}</h2>
          <div className="rating">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
