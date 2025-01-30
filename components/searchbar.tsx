import React from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div className="md:flex hidden items-center justify-center relative flex-1">
      <input
        type="search"
        id="search"
        className="w-full bg-gray-100 px-4 py-2 rounded-full outline-none"
        placeholder="Search Product"
      />
      <label htmlFor="search" className="absolute right-4">
        <FiSearch size={24} fill="transparent" color="grey" />
      </label>
    </div>
  );
};

export default Searchbar;
