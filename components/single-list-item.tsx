import Image from "next/image";
import React from "react";
import { SingleProductType } from "../lib/db";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const SingleListItem = ({ product }: { product: SingleProductType }) => {
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
      <div className="relative w-full min-h-[300px]">
        {/* Image */}
        <Image
          src="/images/single-item-image.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        {/* Details */}
        <div className="flex items-center justify-between w-full font-medium">
          <span>{product.name}</span>
          <span>${parseInt(product.price) / 20}</span>
        </div>
        <div className="text-sm text-gray-600">{product.description}</div>
        <div className="flex items-center gap-1">
          {/* Stars */}
          <div className="flex">{calculateRatingStars(product.rating)}</div>
          <span>(121)</span>
        </div>
        <button className="px-4 py-3 border-green-900 border rounded-full w-1/2 text-green-900 hover:bg-green-900 hover:border-white hover:text-white font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleListItem;
