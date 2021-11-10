import React, { useState, useEffect } from "react";
import "./Products.css";
import TopMenu from "./TopMenu/TopMenu";
import ListProducts from "./ListProducts/ListProducts";
import Pagination from "./../../components/Pagination/Pagination";
import ApiFetching from "../../utilities/ApiFetching";
import  { useSelector }  from 'react-redux';

const Products = () => {
  
  const { getProducts } = ApiFetching();
  const token = useSelector(state => state.token);

  const [products, setProducts] = useState([]);
  

  const productsFilter = useState([
    "All",
    "Watch",
    "Shirts",
    "Handbag",
    "Orther",
  ])[0];
  const [currentFilter, setCurrentFilter] = useState("All");

  // useEffect(() => {
  //   console.log(currentFilter)
  //   if (currentFilter !== "All") {
  //     const currentProd = PRODUCTS.filter((e) => e.type === currentFilter);
  //     setProducts([...currentProd]);
  //     return;
  //   }
  //   setProducts([...PRODUCTS]);
  // }, [currentFilter]);

  useEffect(() => {
    if(token) {
      getProducts(token,  (data) => {
        setProducts(data.products);
      })
    }
  }, [token, getProducts]);

  const changeCurrentFilterHandler = (type) => {
    setCurrentFilter(type);
  };
  return (
    <section>
      {/* <TopMenu
        productsFilter={productsFilter}
        changeFilter={changeCurrentFilterHandler}
        currentFilter={currentFilter}
      /> */}
      <ListProducts products={products} />
      <Pagination />
    </section>
  );
};

export default Products;
