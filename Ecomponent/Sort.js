import React from "react";
import "./Sort.css";
import Filter from "./Filter";
import { useFilterContext } from "../Context/Filter_Context";

const Sort = () => {
  const { filter_products } = useFilterContext();
  let quantity = filter_products.length;
  // console.error(quantity);

  return (
    <>
      <h1 className="text-center">
        {quantity === 12
          ? `All Product Available`
          : `${quantity} Product Available`}
      </h1>
    </>
  );
};

export default Sort;
