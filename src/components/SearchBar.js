import React, { useState } from "react";

const SearchBar = ({ onSearch, placeholder, leftIcon, rightIcon }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    onSearch(inputValue);
  };

  return (
    <div className="mt-2 relative">
      {leftIcon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          {leftIcon}
        </span>
      )}
      <input
        id="search"
        name="search"
        type="search"
        placeholder={placeholder || "Search..."}
        className={`w-full h-12 pl-[46px] pr-[90px] bg-zinc-100 rounded-[81px] focus:outline-indigo-400 focus:bg-indigo-100 focus:border-indigo-400 justify-start items-center inline-flex ${
          leftIcon ? "pl-[50px]" : ""
        }`}
        style={{
          border: "0.8px solid #E3E3E7",
          background: "#F2F2F3",
        }}
        onChange={handleInputChange}
        value={searchInput}
      />
      {rightIcon && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          {rightIcon}
        </span>
      )}
    </div>
  );
};

export default SearchBar;
