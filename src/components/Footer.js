import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import getFooterItems from "../api/getFooterItems";

const Footer = () => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const subpage = pathname.split("/")?.[1] || "home";
    setActiveLink(subpage);
  }, [pathname]);

  const handleLinkClick = (label) => {
    setActiveLink(label.toLowerCase());
  };

  const footerItems = useCallback((activeLink)=> getFooterItems(activeLink), [activeLink])

  return (
    <footer className="bg-white text-white shadow-md fixed bottom-0 left-0 w-full">
      <div className="p-6">
      <nav className="flex justify-center items-center space-x-4 gap-8 md:gap-16">
          {footerItems(activeLink).map((item, index) => (
            <div key={index}>
              <Link
                to={item.to}
                className={`flex flex-col items-center ${
                  activeLink.toLowerCase() === item.label?.toLowerCase()
                    ? "text-indigo-500"
                    : "text-zinc-500"
                }`}
                onClick={() => handleLinkClick(item.label)}
              >
                {React.cloneElement(item.icon, {
                  className: `icon ${activeLink.toLowerCase() === item.label?.toLowerCase() ? 'active' : 'inactive'}`
                })}
                <div className="text-center text-xs font-semibold font-['SF Pro Display']">
                  {item.label}
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
