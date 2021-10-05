import React, { useState, useEffect } from "react";
import "./Products.css";
import TopMenu from "./TopMenu/TopMenu";
import ListProducts from "./ListProducts/ListProducts";
import Pagination from "./../../components/Pagination/Pagination";
const PRODUCTS = [
  {
    imageLink: "http://mvbinz.xyz/images/1.jpg",
    name: "Rayon a-line Dress",
    price: "13.45",
    type: "Orther",
  },
  {
    imageLink: "http://mvbinz.xyz/images/2.jpg",
    name: "Black men Watch",
    price: "13.45",
    type: "Watch",
  },
  {
    imageLink: "http://mvbinz.xyz/images/3.jpg",
    name: "Men's Regular Fit Shirts",
    price: "13.45",
    type: "Shirts",
  },
  {
    imageLink: "http://mvbinz.xyz/images/4.jpg",
    name: "Men's Handbag",
    price: "13.45",
    type: "Handbag",
  },
  {
    imageLink: "http://mvbinz.xyz/images/5.jpg",
    name: "Women's Relaxed Fit Jeans",
    price: "13.45",
    type: "Orther",
  },
  {
    imageLink: "http://mvbinz.xyz/images/6.jpg",
    name: "Round Neck Printed Top",
    price: "13.45",
    type: "Orther",
  },
  {
    imageLink: "http://mvbinz.xyz/images/7.jpg",
    name: "Mens Running Shoe",
    price: "13.45",
    type: "Orther",
  },
  {
    imageLink: "http://mvbinz.xyz/images/8.jpg",
    name: "Men Pullover Sweater",
    price: "13.45",
    type: "Orther",
  },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const productsFilter = useState([
    "All",
    "Watch",
    "Shirts",
    "Handbag",
    "Orther",
  ])[0];
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    console.log(currentFilter)
    if (currentFilter !== "All") {
      const currentProd = PRODUCTS.filter((e) => e.type === currentFilter);
      setProducts([...currentProd]);
      return;
    }
    setProducts([...PRODUCTS]);
  }, [currentFilter]);

  const changeCurrentFilterHandler = (type) => {
    setCurrentFilter(type);
  };
  return (
    <section>
      <TopMenu
        productsFilter={productsFilter}
        changeFilter={changeCurrentFilterHandler}
        currentFilter={currentFilter}
      />
      <ListProducts products={products} />
      <Pagination />
    </section>
  );
};

export default Products;
