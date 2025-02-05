import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="relative flex-1 w-full gap-4 animate-pulse">
      <div className="min-h-[300px] w-full bg-gray-200 rounded-md" />
      <div className="flex flex-col gap-2 mt-1">
        <span className="h-6 w-full bg-gray-200 rounded-md" />
        <div className="w-full mt-1 flex items-center justify-between">
          <span className="h-5 w-16 bg-gray-200 rounded-md" />
          <span className="h-5 w-32 bg-gray-200 rounded-md" />
        </div>
        <span className="h-7 w-full bg-gray-200 rounded-md" />
        <div className="px-4 py-3 mx-4 my-3 self-center bg-gray-200 rounded-full w-3/4 h-12" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
