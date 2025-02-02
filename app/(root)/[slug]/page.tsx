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

const SingleItemPage = () => {
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
            <BreadcrumbPage>Nike Zoom Vomero 5</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex h-full w-full mt-10 gap-16">
        <div className="flex-1">
          <ProductImages />
        </div>
        <div className="flex-1">
          {/* Desc */}
          <div className="">
            <h2>Nike Zoom Vomero 5</h2>
            <span>A perfect description</span>
            <div>Stars and (121)</div>
          </div>
          <div>
            <span>$120 or $20/month</span>
            <p>Suggested payments with 6 months special financing</p>
          </div>
          <div className="w-full flex items-center gap-4">
            <button className="bg-green-900 text-white w-full rounded-full px-4 py-3">
              Buy Now
            </button>
            <button className="border border-green-900 text-green-900 w-full rounded-full px-4 py-3">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItemPage;
