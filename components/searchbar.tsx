import React from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = ({
  small,
  className,
}: {
  small?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`md:flex hidden items-center justify-center relative flex-1 ${className}`}
    >
      <input
        type="search"
        id="search"
        className={`w-full bg-gray-100 ${
          small ? "px-2 py-1 pl-10" : "px-4 py-2 pl-12"
        }  rounded-full outline-none`}
        placeholder="Search"
      />
      <label htmlFor="search" className="absolute left-4">
        <button className="w-full h-full flex items-center justify-center">
          <FiSearch
            size={small ? "16" : "24"}
            fill="transparent"
            color="grey"
          />
        </button>
      </label>
    </div>
  );
};

export default Searchbar;
