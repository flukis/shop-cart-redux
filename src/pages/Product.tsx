import { useState, useEffect } from "react";
import Footer from "components/Footer";
import ProductItem from "components/ProductItem";
import Navbar from "components/Navbar";
import FilterProductSection from "components/FilterProductSection";
import ScrollButton from "components/ScrollButton";
import Toast from "components/Toast";

import { LoadProduct } from "actions/ProductAction";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "hooks";

function AllProduct() {
  const dispatch = useDispatch();
  const { loading, filteredProducts } = useTypedSelector(
    (state) => state.products
  );
  const { show, msg, type } = useTypedSelector((state) => state.toasts);
  useEffect(() => {
    dispatch(LoadProduct());
  }, []);
  return (
    <>
      {show && <Toast msg={msg} type={type} />}
      <Navbar />
      <FilterProductSection />
      <div className="list-product">
        {!loading &&
          filteredProducts.map((item, index) => {
            return <ProductItem key={index} {...item} />;
          })}
      </div>
      <ScrollButton />
      {filteredProducts.length === 0 ? null : <Footer />}
    </>
  );
}

export default AllProduct;
