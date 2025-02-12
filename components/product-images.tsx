"use client";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="">
      {isExpanded && (
        <div className="fixed top-0 left-0 bg-black/75 z-50 w-full h-full">
          <div className="h-[100dvh] w-[90dvw] md:h-[70dvh] md:w-[50dvw] object-contain absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={images[index].url}
              alt=""
              fill
              sizes="50vw"
              className="object-contain rounded-md"
            />
          </div>
          <button
            className="w-6 h-6 absolute right-6 top-6"
            onClick={() => setIsExpanded(false)}
          >
            <X color="white" />
          </button>
        </div>
      )}
      <div className="relative h-[500px]">
        <button className="cursor-pointer" onClick={() => setIsExpanded(true)}>
          <Image
            src={images[index].url}
            alt=""
            fill
            sizes="50vw"
            className="object-cover rounded-md"
          />
        </button>
      </div>
      <div className="flex justify-between gap-4 mt-2 ">
        {images.map((image, i) => (
          <button
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={image.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
