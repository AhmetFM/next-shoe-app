"use client";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import CategoryItem from "./category-item";

const HeaderCategories = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        className="flex items-center justify-center h-20 cursor-pointer gap-1 z-10 border-black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Categories
        <FaArrowDown size={12} />
      </div>
      {isHovered && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute top-[80px] bg-white border-x border-b w-[48rem] h-[480px] rounded-b-xl z-10 p-6"
        >
          <h3 className="text-2xl font-semibold border-b pb-5 mb-5">
            Popular Categories
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </div>
          <br />
        </div>
      )}
    </div>
  );
};

export default HeaderCategories;
