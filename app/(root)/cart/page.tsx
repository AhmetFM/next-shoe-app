import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, X } from "lucide-react";
import React from "react";

const CartPage = () => {
  return (
    <div className="mt-12 max-w-screen-xl mx-auto w-full bg-zinc-50 min-h-[calc(75dvh)] rounded-xl flex flex-col xl:flex-row">
      <div className="flex-1 px-16 py-16 xl:px-4 xl:py-3">
        <h3 className="text-xl font-bold">Shopping Cart</h3>
        {/* Single cart product */}
        <div className="flex items-center gap-8 w-full border-b">
          <img src="/images/single-item-image.png" alt="" className="w-32" />
          <span className="text-lg">Product Name</span>
          <div className="flex items-center">
            <button className="cursor-pointer px-2 py-1 hover:bg-zinc-300 duration-300 rounded-full">
              <Minus />
            </button>
            <span className="flex items-center justify-center border rounded-xl px-4 py-1">
              1
            </span>
            <button className="cursor-pointer px-2 py-1 hover:bg-zinc-300 duration-300 rounded-full">
              <Plus />
            </button>
          </div>
          <span className="text-xl font-semibold">$160</span>
          <button className="cursor-pointer px-2 py-1 hover:bg-zinc-300 duration-300 rounded-full">
            <X />
          </button>
        </div>
        <div className="flex items-center gap-8 w-full border-b">
          <img src="/images/single-item-image.png" alt="" className="w-32" />
          <span className="text-lg">Product Name</span>
          <div className="flex items-center">
            <button className="cursor-pointer px-2 py-1 hover:bg-zinc-300 duration-300 rounded-full">
              <Minus />
            </button>
            <span className="flex items-center justify-center border rounded-xl px-4 py-1">
              1
            </span>
            <button className="cursor-pointer px-2 py-1 hover:bg-zinc-300 duration-300 rounded-full">
              <Plus />
            </button>
          </div>
          <span className="text-xl font-semibold">$160</span>
          <button className="cursor-pointer px-2 py-1 hover:bg-zinc-300 duration-300 rounded-full">
            <X />
          </button>
        </div>
      </div>
      <div className="flex-1 lg:border-l px-16 py-16 border-t xl:border-t-0">
        <h3 className="text-xl font-bold">Order Summary</h3>
        <div className="mt-12 flex flex-col gap-4">
          <Label className="font-light" htmlFor="discount">
            Discount code / Promo code
          </Label>
          <Input
            type="text"
            id="discount"
            placeholder="Code"
            className="py-6"
          />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <Label className="font-light" htmlFor="bonus">
            Your bonus card number
          </Label>
          <Input
            type="number"
            id="bonus"
            placeholder="Enter Card Number"
            className="py-6"
          />
        </div>
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>$2347</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Estimated Tax</span>
            <span>$50</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Estimated shipping & Handling</span>
            <span>$29</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Total</span>
            <span>$2426</span>
          </div>
        </div>
        <button className="flex items-center justify-center w-full bg-zinc-800 text-white px-4 py-3 rounded-xl mt-16">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
