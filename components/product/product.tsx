import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { TProduct } from "@/types";
import Link from "next/link";

const Product = ({ product }: { product: TProduct }) => {
  const calculateRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - Number(halfStar);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfStroke className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="flex-1 w-full gap-4">
      <div className="relative w-full min-h-[300px] rounded-md">
        {/* Image */}
        <Link href={`/${product.id}`}>
          <Image
            src="/images/single-item-image.png"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {/* Details */}
        <div className="flex items-center justify-between w-full font-medium">
          <span className="text-xl font-medium">{product.name}</span>
        </div>
        <div className="text-sm flex items-center justify-between text-gray-600">
          <span>{product.category}</span>

          <div className="flex items-center gap-1">
            {/* Stars */}
            <div className="flex">{calculateRatingStars(product.rating)}</div>
            <span>(121)</span>
          </div>
        </div>
        <span className="text-2xl font-medium">${product.price}</span>
        <button className="px-4 py-3 self-center border-gray-900 border rounded-full w-3/4 mx-4 my-3 text-gray-900 hover:bg-gray-700 hover:border-white hover:text-white font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
