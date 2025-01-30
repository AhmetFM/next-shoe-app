import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-full relative bg-black mt-6">
      <Image
        src="/images/banner.jpg"
        alt="banner"
        width={800}
        height={200}
        className="w-full h-[300px] object-cover grayscale-[100%] opacity-25"
      />
      <div className="absolute top-1/2 left-12 text-white font-semibold text-4xl -translate-y-1/2 px-4 md:px-8 md:w-1/3 flex flex-row md:flex-col gap-2 items-start">
        <span>Grab Upto 50% Off On Selected Shoe</span>
        <button className="bg-white/75 hover:bg-white/100 duration-300 border text-black p-4 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
