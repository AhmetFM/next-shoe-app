import React from "react";

const HamburgerMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      className="flex flex-col gap-1 md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`h-1 w-6 bg-black duration-500 rounded-sm ease-in-out origin-left ${
          isOpen && "rotate-45"
        }`}
      ></div>
      <div
        className={`h-1 w-6 bg-black duration-500 rounded-sm ease-in-out ${
          isOpen && "opacity-0"
        }`}
      ></div>
      <div
        className={`h-1 w-6 bg-black duration-500 rounded-sm ease-in-out origin-left ${
          isOpen && "-rotate-45"
        }`}
      ></div>
    </button>
  );
};

export default HamburgerMenu;
