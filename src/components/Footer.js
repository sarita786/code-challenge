import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SvgIcon from "./SvgIcon";

const Footer = () => {
  const links = [
    {
      to: "/",
      icon: "/footer/home.svg",
      label: "Home",
    },
    {
      to: "/explore",
      icon: "/footer/signpost.svg",
      label: "Explore",
    },
    {
      to: "/chat",
      icon: "/footer/message-text.svg",
      label: "Chat",
    },
    {
      to: "",
      icon: "/footer/heart.svg",
      label: "Save",
    },
    {
      to: "/profile",
      icon: "/footer/profile.svg",
      label: "Profile",
    },
  ];

  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const subpage = pathname.split("/")?.[1] || "home";
    setActiveLink(subpage);
  }, [pathname]);

  return (
    <footer className="bg-white text-white shadow-md fixed bottom-0 left-0 w-full">
      <div className="p-6">
        <nav className="flex justify-center items-center space-x-4 gap-8 md:gap-16">
          {links.map((link, index) => (
            <div
              key={index}
              className={` ${
                activeLink === link.label.toLowerCase()
                  ? " text-indigo-500"
                  : "text-zinc-500 "
              }`}
            >
              <Link to={link.to}>
              <SvgIcon src={link.icon} alt="Search Icon" />
                <div className="text-center text-xs font-semibold font-['SF Pro Display']">
                  {link.label}
                </div>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
