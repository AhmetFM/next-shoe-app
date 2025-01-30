import React from "react";
import SingleListItem from "./single-list-item";
import { SingleProductType } from "@/lib/db";

const HomeListItems = () => {
  /* const products = await getAllProducts(); */

  const products: SingleProductType[] = [
    {
      name: "Nike Air Max 270",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "120",
    },
    {
      name: "Nike Air Max 97",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "150",
    },
    {
      name: "Nike Air Max 720",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "180",
    },
    {
      name: "Nike Air Max 90",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "100",
    },
    {
      name: "Nike Air Max 95",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "110",
    },
    {
      name: "Nike Air Max 2090",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "130",
    },
    {
      name: "Nike Air Max 2090",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "130",
    },
    {
      name: "Nike Air Max 2090",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "130",
    },
  ];

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
