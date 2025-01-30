import Image from "next/image";
import React from "react";

const CategoryItem = () => {
  return (
    <div className="flex bg-gray-100 p-4 rounded-xl gap-4 cursor-pointer hover:bg-gray-300 duration-300">
      <div className="bg-white rounded-lg">
        <Image
          src="/images/single-item-image.png"
          alt="category-item"
          width={80}
          height={80}
          className="w-[80px] h-[80px] object-cover rounded-lg"
        />
      </div>
      <div className=" flex flex-col gap-1">
        <h4 className="text-xl font-semibold">Shoe</h4>
        <p className="font-light">240 item Available</p>
      </div>
    </div>
  );
};

export default CategoryItem;
