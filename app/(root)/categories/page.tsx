"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { useState } from "react";
//import { useQuery } from "@tanstack/react-query";
//import axios from "axios";
import { products } from "@/lib/db";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronLeft, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import Product from "@/components/product/product";
//import ProductSkeleton from "@/components/product/product-skeleton";
import { ProductState } from "@/lib/validators/product-validator";
import { Slider } from "@/components/ui/slider";
import { useSearchParams } from "next/navigation";
//import { set } from "zod";

const SORT_OPTIONS = [
  { name: "None", value: "none" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
  { name: "Rating", value: "rating" },
] as const;

const BRAND_FILTERS = {
  id: "brand",
  name: "Brand",
  options: [
    { value: "nike", label: "Nike" },
    { value: "adidas", label: "Adidas" },
    { value: "puma", label: "Puma" },
    { value: "reebok", label: "Reebok" },
    { value: "under armour", label: "Under Armour" },
  ],
} as const;

const SIZE_FILTERS = {
  id: "size",
  name: "Size",
  options: [
    { value: "35", label: "35" },
    { value: "36", label: "36" },
    { value: "37", label: "37" },
    { value: "38", label: "38" },
    { value: "39", label: "39" },
    { value: "40", label: "40" },
    { value: "41", label: "41" },
    { value: "42", label: "42" },
    { value: "43", label: "43" },
    { value: "44", label: "44" },
    { value: "45", label: "45" },
    { value: "46", label: "46" },
  ],
} as const;

const COLOR_FILTERS = {
  id: "color",
  name: "Color",
  options: [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "grey", label: "Grey" },
  ],
} as const;

const PRICE_FILTERS = {
  id: "price",
  name: "price",
  options: [
    { value: [0, 10000], label: "Any Price" },
    { value: [0, 500], label: "Under 500$" },
    { value: [0, 1000], label: "Under 1000$" },
    { value: [0, 1500], label: "Under 1500$" },
    { value: [0, 2000], label: "Under 2000$" },
    //custom
  ],
} as const;

const DEFAULT_CUSTOM_PRICE = [0, 10000] as [number, number];

const Categories = () => {
  //Checking if user clicks only one brand
  const searchParams = useSearchParams();
  const brandFromParams = searchParams.get("brand");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filter, setFilter] = useState<ProductState>({
    brand: ["nike", "adidas", "puma", "reebok", "under armour"],
    size: [
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
    ],
    color: ["red", "blue", "green", "yellow", "black", "white", "grey"],
    sort: "none",
    price: {
      isCustom: false,
      range: DEFAULT_CUSTOM_PRICE,
    },
  });
  // useEffect(() => {
  //     if (brandFromParams) {
  //       if (
  //         BRAND_FILTERS.options.filter((o) => o.value === brandFromParams)
  //           .length === 0
  //       ) {
  //         /* Reset filter if search param not valid */
  //         setFilter((prev) => ({
  //           ...prev,
  //           brand: ["nike", "adidas", "puma", "reebok", "under armour"],
  //         }));
  //         router.replace("/categories", undefined);
  //       }
  //     }
  //     setFilter((prev) => ({
  //       ...prev,
  //       brand: prev.brand.filter((b) => b === brandFromParams),
  //     }));
  //   }, [brandFromParams]);

  /* const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("/api/products");
      return data;
    },
  }); */

  const applyArrayFilter = ({
    category,
    value,
  }: {
    category: keyof Omit<typeof filter, "price" | "sort">;
    value: string;
  }) => {
    const isFilterApllied = filter[category].includes(value as never);

    if (isFilterApllied) {
      setFilter((prev) => ({
        ...prev,
        [category]: prev[category].filter((v) => v !== value),
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        [category]: [...prev[category], value],
      }));
    }
  };

  const minPrice = Math.min(filter.price.range[0], filter.price.range[1]);
  const maxPrice = Math.max(filter.price.range[0], filter.price.range[1]);

  return (
    <section className="max-w-screen-xl mx-auto w-full mt-5 px-4 min-h-screen">
      {/* Breadcrumbs */}
      <div className="hidden md:flex mb-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>

            {brandFromParams && filter.brand.length === 1 && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/categories">
                    {brandFromParams.charAt(0).toUpperCase() +
                      brandFromParams.substring(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <div
          className={cn("lg:col-span-1", {
            "hidden lg:block": !isMobileFilterOpen,
          })}
        >
          {isMobileFilterOpen && (
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="flex gap-4 text-2xl items-center mb-8"
            >
              <ChevronLeft />
              Filters
            </button>
          )}
          {/* Brand Accordion Filters */}
          <Accordion type="multiple" className="animate-none">
            {/* Brand */}
            <AccordionItem value="brand">
              <AccordionTrigger className="">Brand</AccordionTrigger>
              <AccordionContent className="pt-6 animate-none">
                <ul className="space-y-4">
                  {BRAND_FILTERS.options.map((option, optionIdx) => (
                    <li key={option.value} className="flex items-center">
                      <input
                        className="h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-800 accent-gray-800 "
                        type="checkbox"
                        id={`brand-${optionIdx}`}
                        checked={filter.brand.includes(option.value)}
                        onChange={() => {
                          applyArrayFilter({
                            category: "brand",
                            value: option.value,
                          });
                        }}
                      />
                      <label
                        htmlFor={`brand-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            {/* Size */}
            <AccordionItem value="size">
              <AccordionTrigger className="">Size</AccordionTrigger>
              <AccordionContent className="pt-6 animate-none">
                <ul className="grid grid-cols-4 gap-4">
                  {SIZE_FILTERS.options.map((option, optionIdx) => (
                    <li key={option.value} className="flex items-center">
                      <input
                        className="h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-800 accent-gray-800 "
                        type="checkbox"
                        id={`size-${optionIdx}`}
                        checked={filter.size.includes(option.value)}
                        onChange={() => {
                          applyArrayFilter({
                            category: "size",
                            value: option.value,
                          });
                        }}
                      />
                      <label
                        htmlFor={`size-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            {/* Color */}
            <AccordionItem value="color">
              <AccordionTrigger className="">Color</AccordionTrigger>
              <AccordionContent className="pt-6 animate-none">
                <ul className="space-y-4">
                  {COLOR_FILTERS.options.map((option, optionIdx) => (
                    <li key={option.value} className="flex items-center">
                      <input
                        className="h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-800 accent-gray-800 "
                        type="checkbox"
                        id={`color-${optionIdx}`}
                        checked={filter.color.includes(option.value)}
                        onChange={() => {
                          applyArrayFilter({
                            category: "color",
                            value: option.value,
                          });
                        }}
                      />
                      <label
                        htmlFor={`color-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Price  */}
            <AccordionItem value="price">
              <AccordionTrigger className="">Price</AccordionTrigger>
              <AccordionContent className="pt-6 animate-none">
                <ul className="space-y-4">
                  {PRICE_FILTERS.options.map((option, optionIdx) => (
                    <li key={option.label} className="flex items-center">
                      <input
                        className="h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-800 accent-gray-800 "
                        type="radio"
                        id={`price-${optionIdx}`}
                        checked={
                          !filter.price.isCustom &&
                          filter.price.range[0] === option.value[0] &&
                          filter.price.range[1] === option.value[1]
                        }
                        onChange={() => {
                          setFilter((prev) => ({
                            ...prev,
                            price: {
                              isCustom: false,
                              range: [...option.value],
                            },
                          }));
                        }}
                      />
                      <label
                        htmlFor={`price-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </li>
                  ))}
                  <li className="flex justify-center flex-col gap-2">
                    <div className="flex items-center">
                      <input
                        className="h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-800 accent-gray-800 "
                        type="radio"
                        id={`price-${PRICE_FILTERS.options.length}`}
                        checked={filter.price.isCustom}
                        onChange={() => {
                          setFilter((prev) => ({
                            ...prev,
                            price: {
                              isCustom: true,
                              range: [0, 10000],
                            },
                          }));
                        }}
                      />
                      <label
                        htmlFor={`price-${PRICE_FILTERS.options.length}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        Custom
                      </label>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-medium">Price</p>
                      <div>
                        {filter.price.isCustom
                          ? minPrice.toFixed(0)
                          : filter.price.range[0].toFixed(0)}{" "}
                        $ -{" "}
                        {filter.price.isCustom
                          ? maxPrice.toFixed(0)
                          : filter.price.range[1].toFixed(0)}{" "}
                        $
                      </div>
                    </div>
                    <Slider
                      className={cn({
                        "opacity-10": !filter.price.isCustom,
                      })}
                      disabled={!filter.price.isCustom}
                      onValueChange={(range) => {
                        const [newMin, newMax] = range;

                        setFilter((prev) => ({
                          ...prev,
                          price: {
                            isCustom: true,
                            range: [newMin, newMax],
                          },
                        }));
                      }}
                      value={
                        filter.price.isCustom
                          ? filter.price.range
                          : DEFAULT_CUSTOM_PRICE
                      }
                      min={DEFAULT_CUSTOM_PRICE[0]}
                      defaultValue={DEFAULT_CUSTOM_PRICE}
                      max={DEFAULT_CUSTOM_PRICE[1]}
                      step={10}
                    />
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {isMobileFilterOpen && (
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full rounded-md mt-12 px-4 py-3 bg-gray-900 text-white"
            >
              Apply
            </button>
          )}
        </div>
        <div
          className={cn(
            "lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
            {
              "hidden lg:block": isMobileFilterOpen,
            }
          )}
        >
          <div className="col-span-full flex items-center flex-col-reverse lg:flex-row justify-between">
            <h3 className="flex w-full items-center justify-start mt-12 lg:mt-0">
              Products Results :{" "}
              <span className="font-medium text-lg">{products.length}</span>
            </h3>
            <div className="flex items-center justify-between lg:justify-end w-full">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="px-4 py-3 gap-4 flex items-center justify-center lg:hidden text-gray-700 hover:text-gray-900 border rounded-md border-gray-400"
              >
                Filters
                <Filter />
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  {filter.sort === "none"
                    ? "Sort"
                    : SORT_OPTIONS.find(
                        (option) => option.value === filter.sort
                      )?.name}
                  <ChevronDown className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {SORT_OPTIONS.map((option) => (
                    <button
                      key={option.name}
                      onClick={() =>
                        setFilter({ ...filter, sort: option.value })
                      }
                      className={cn(
                        "text-left w-full block px-4 py-2 text-sm",
                        {
                          "text-gray-900 bg-gray-100":
                            option.value === filter.sort,
                          "text-gray-500": option.value !== filter.sort,
                        }
                      )}
                    >
                      {option.name}
                    </button>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          {/* TODO: Make a pagination component after completed backend */}
        </div>
      </div>
    </section>
  );
};

export default Categories;
