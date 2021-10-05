import React  from "react";
import "./ListProducts.css";
import ProductItem from "./ProductItem/ProductItem";

const ListProducts = (props) => {
  const { products } = props;

  return (
    <div className="container">
      <div className="listPro">
        {products &&
          products.map((e) => (
            <ProductItem key={e.name} image={e.imageLink} name={e.name} price={e.price} />
          ))}
      </div>
    </div>
  );
};
export default ListProducts;
