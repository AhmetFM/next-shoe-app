import React from "react";
import ProductImages from "@/components/product-images";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { products } from "@/lib/db";
import { Heart, ShoppingBag, Truck } from "lucide-react";

const SingleItemPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const product = products.find((p) => p.id === slug);

  const calculateRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - Number(halfStar);

    return (
      <div className="flex lg:gap-1 gap-0">
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

  if (!product) {
    return <></>;
  }
  return (
    <div className="max-w-screen-xl mx-auto w-full mt-5 px-4">
      {/* Breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/categories?brand=nike">
              {product?.brand.charAt(0).toUpperCase() +
                product?.brand.substring(1)!}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {product?.name.split(" ").slice(1).join(" ")}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col lg:flex-row h-full w-full mt-10 gap-16">
        <div className="flex-1">
          <ProductImages />
        </div>
        <div className="flex-1">
          {/* Desc */}
          <div className="flex flex-col gap-4 lg:gap-8">
            <h2 className="font-semibold text-2xl">Nike Zoom Vomero 5</h2>
            <div className="flex items-center gap-2">
              {calculateRatingStars(product?.rating)}
            </div>
          </div>
          <div className="mt-16">
            <span className="text-5xl font-medium">${product.price}</span>
          </div>
          <div className="mt-12">
            Color{"  "}
            <span className="text-gray-400">
              • {" " + product.color.toLocaleUpperCase()}
            </span>
            <img
              src="/images/single-item-image.png"
              alt="imageColor"
              className="w-14 h-20 aspect-auto mt-4 rounded-md border border-zinc-900/40"
            />
          </div>
          <div className="mt-12">
            Size{"  "}
            <span className="text-gray-400">• Eu Men</span>
            <div className=" px-3 py-2 border w-16 h-10 flex items-center justify-center rounded-md">
              {product.size}
            </div>
            <span className="text-xs text-green-700 font-light">
              Size guide
            </span>
          </div>

          <div className="w-full mt-12 flex items-center gap-2">
            <button className="bg-zinc-900 hover:bg-zinc-700 duration-200 text-white w-full rounded-xl px-4 py-4 flex items-center justify-center gap-4 font-medium">
              <ShoppingBag />
              Add to cart
            </button>
            <button className="bg-zinc-200 hover:bg-zinc-400 duration-200 px-4 py-4 rounded-xl">
              <Heart />
            </button>
          </div>
          <span className="flex mt-4 gap-2 items-center font-medium text-sm">
            <Truck /> Free delivery on orders over $30.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleItemPage;
