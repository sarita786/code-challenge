import React from "react";
import Footer from "../components/Footer";
import ListItem from "../components/ListItem";
import listItems from "../api/listItems";
import SvgIcon from "../components/SvgIcon";

const Profile = () => {
  return (
    <>
      <div className="p-4 md:p-8 bg-zinc-50 h-[900px]">
        <div className="flex flex-col justify-center items-center pb-6 ">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/images/lucy.png"
            alt="lucy"
          />
          <div className="text-center text-gray-900 text-2xl font-semibold font-['SF Pro Display'] leading-normal tracking-tight">
            Lucy Bond
          </div>
          <div className="text-center text-zinc-500 text-base font-normal font-['SF Pro Display'] leading-none tracking-tight mt-2">
            lucybond08@gmail.com
          </div>
          <div className="w-full  border border-zinc-300 mt-16"></div>
        </div>
        <ul className="my-4 space-y-3">
          {listItems.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
          <div className="w-full border"></div>
          <ListItem
            label="Switch to hosting"
            icon={<SvgIcon src="/toggle-off-circle.svg" alt="toggle-off" />}
            action={<SvgIcon src="/arrow-right.svg" alt="Search Icon" />}
          />
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
