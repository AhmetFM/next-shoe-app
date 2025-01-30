import React from "react";

const FilterButtons = () => {
  return (
    <div className="flex mt-12 justify-between px-4 md:px-0">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          defaultValue=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option value="" disabled>
            Shoe Types
          </option>
          <option value="sneakers">Sneakers</option>
          <option value="loafers">Loafers</option>
          <option value="boots">Boots</option>
          <option value="sandals">Sandals</option>
          <option value="slippers">Slippers</option>
        </select>
        <select
          name="price"
          id=""
          defaultValue=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option value="" disabled>
            Price
          </option>
          <option>Low to High</option>
          <option>High to low</option>
        </select>
        <select
          name="color"
          id=""
          defaultValue=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option value="" disabled>
            Color
          </option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="other">Other</option>
        </select>
        <select
          name="size"
          id=""
          defaultValue=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option value="" disabled>
            Size
          </option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
        </select>
      </div>
      <div>
        <select
          name="sort"
          id="sort"
          defaultValue=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        >
          <option value="" disabled>
            Sort By
          </option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="name-asc">Name (A to Z)</option>
          <option value="name-desc">Name (Z to A)</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="top-rated">Top Rated</option>
          <option value="best-selling">Best Selling</option>
          <option value="featured">Featured</option>
          <option value="on-sale">On Sale</option>
        </select>
      </div>
    </div>
  );
};

export default FilterButtons;
