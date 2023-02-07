import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../../redux/Slices/productSlices";
import NavBar from "../Navbar/NavBar";
import SingleProduct from "../singleProduct/singleProduct";
import "./ProductList.css";
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    dispatch(loadProducts(data));
  }
  return (
    <>
      <NavBar />
      <div className="product-list">
        {products.map((item) => (
          <SingleProduct key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
