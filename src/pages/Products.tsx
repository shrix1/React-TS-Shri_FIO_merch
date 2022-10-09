import React, { FC } from "react";
import { products } from "./Mainproducts";

const Products: FC = () => {
  return (
    <div>
      {products.map((i, k) => {
        return (
          <div key={k}>
            <img src={i.img} alt={i.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
