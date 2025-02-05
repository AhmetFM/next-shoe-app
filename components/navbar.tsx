"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import Searchbar from "./searchbar";
import HeaderCategories from "./header-categories";
import HamburgerMenu from "./hamburger-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 border-b max-w-screen-xl w-full flex items-center justify-between mx-auto px-5 space-x-10 z-10">
      <div className="text-4xl font-semibold">
        <Link href="/">ShoeShop</Link>
      </div>
      <div>
        <ul className="xl:flex items-center gap-8 font-medium hidden">
          <li className="relative">
            <HeaderCategories />
          </li>
          <li className="cursor-pointer">Deals</li>
          <li className="cursor-pointer">What&apos;s New</li>
          <li className="cursor-pointer">Delivery</li>
        </ul>
      </div>
      <Searchbar />
      <div className="hidden md:flex gap-8 font-medium">
        <Link href="/login" className="flex items-center justify-center gap-1">
          <FiUser size={24} />
          Account
        </Link>
        <Link href="/cart" className="flex items-center justify-center gap-1">
          <FiShoppingCart size={24} />
          Cart
        </Link>
      </div>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div
          className={`md:hidden absolute top-20 right-0 w-3/4 h-[calc(100vh-80px)] border-l flex flex-col bg-gray-100 z-10`}
        >
          <ul className="flex flex-col items-center font-medium flex-1 ">
            <li className="cursor-pointer w-full flex items-center justify-center h-40 text-xl hover:bg-gray-300 duration-200 border-b">
              <Link href="/categories" onClick={() => setIsOpen(false)}>
                Categories
              </Link>
            </li>
            <li className="cursor-pointer w-full flex items-center justify-center h-40 text-xl hover:bg-gray-300 duration-200 border-b">
              Deals
            </li>
            <li className="cursor-pointer w-full flex items-center justify-center h-40 text-xl hover:bg-gray-300 duration-200 border-b">
              What&apos;s New
            </li>
            <li className="cursor-pointer w-full flex items-center justify-center h-40 text-xl hover:bg-gray-300 duration-200 border-b">
              Delivery
            </li>
          </ul>
          <div className="flex w-full items-center font-medium ">
            <Link
              href="/login"
              className="flex items-center justify-center flex-1 border w-full h-16"
            >
              <FiUser size={24} />
              Account
            </Link>
            <Link
              href="/cart"
              className="flex items-center justify-center flex-1 border w-full h-16"
            >
              <FiShoppingCart size={24} />
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
