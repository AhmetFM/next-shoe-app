import Link from "next/link";
import React from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import Searchbar from "./searchbar";
import HeaderCategories from "./header-categories";

const Navbar = () => {
  return (
    <header className="h-20 border-b max-w-screen-xl w-full flex items-center justify-between mx-auto px-5 space-x-10 z-10">
      <div className="text-4xl font-semibold">
        <Link href="/">e-catalog</Link>
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
      <div className="sm:flex gap-8 font-medium hidden">
        <Link href="/login" className="flex items-center justify-center gap-1">
          <FiUser size={24} />
          Account
        </Link>
        <Link href="/cart" className="flex items-center justify-center gap-1">
          <FiShoppingCart size={24} />
          Cart
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
