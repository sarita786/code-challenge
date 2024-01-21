import React, { useState } from "react";
import FindTrip from "../components/explore/FindTrip";
import LivingStyle from "../components/explore/LivingStyle";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Experience from "../components/explore/Experience";
import SvgIcon from "../components/SvgIcon";

const Explore = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  return (
    <>
      <div className="p-8 bg-zinc-50">
        <SearchBar
          onSearch={handleSearch}
          placeholder={"Search address, city, location"}
          leftIcon={<SvgIcon src="/search-normal.svg" alt="Search Icon"/>}
          rightIcon={<SvgIcon src="/setting.svg" alt="setting"/>}
        />
        <FindTrip searchInput={searchInput} />
        <LivingStyle />
        <Experience />
      </div>
      <Footer />
    </>
  );
};

export default Explore;
