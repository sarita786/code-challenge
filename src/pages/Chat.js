/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import profileList from "../api/profileList";
import SvgIcon from "../components/SvgIcon";

const Chat = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  const filteredProfiles = profileList.filter((profile) =>
    profile.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="p-4 md:p-8 bg-zinc-50 h-[900px]">
        <SearchBar
          onSearch={handleSearch}
          placeholder={"Search messages"}
          leftIcon={<SvgIcon src="/search-normal.svg" alt="Search Icon" />}
        />
        <div>
          <div className="w-full h-[646px] mt-8">
            <div className="flow-root">
              <ul role="list">
                {filteredProfiles.map((profile, index) => (
                  <li key={index} className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={profile.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <div className="text-gray-900 text-base flex justify-between font-semibold font-['SF Pro Display'] leading-none tracking-tight mb-2">
                          {profile.name}
                          <div className="text-zinc-500 text-xs font-normal font-['SF Pro Display'] leading-3 tracking-tight">
                            {profile.dateTime}
                          </div>
                        </div>
                        <div className="text-zinc-500 text-sm flex justify-between font-normal font-['SF Pro Display'] leading-[14px] tracking-tight">
                          {profile.message}
                          {profile.action && <div>{profile.action}</div>}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chat;
