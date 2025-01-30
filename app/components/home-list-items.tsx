import React from "react";
import SingleListItem from "./single-list-item";
import { getAllProducts, SingleProductType } from "../lib/db";

const HomeListItems = async () => {
  const products = await getAllProducts();

  return (
    <div className="mt-10">
      <h3 className="font-semibold text-2xl mx-4 lg:mx-0">Shoes For You !</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4 lg:mx-0 space-x-2">
        {products
          ?.filter((_: SingleProductType, idx: number) => idx < 8)
          .map((product: SingleProductType, idx: number) => (
            <SingleListItem key={idx} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomeListItems;
