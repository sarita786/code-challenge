import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const footerItems = [
    {
      to: "/",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/linear/home">
            <g id="vuesax/linear/home_2">
              <g id="home">
                <path
                  id="Vector"
                  d="M12 18V15"
                  stroke="#7D7F88"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M10.0698 2.82L3.13978 8.37C2.35978 8.99 1.85978 10.3 2.02978 11.28L3.35978 19.24C3.59978 20.66 4.95978 21.81 6.39978 21.81H17.5998C19.0298 21.81 20.3998 20.65 20.6398 19.24L21.9698 11.28C22.1298 10.3 21.6298 8.99 20.8598 8.37L13.9298 2.83C12.8598 1.97 11.1298 1.97 10.0698 2.82Z"
                  stroke="#7D7F88"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </g>
        </svg>
      ),
      label: "Home",
      activeColor: "#684DEC",
      inactiveColor: "none",
    },
    {
      to: "/explore",
      icon: (
        <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        className={`${
          activeLink.toLowerCase() === "explore" ? "active" : "inactive"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          color: activeLink.toLowerCase() === "explore" ? "#684DEC" : "#7D8588",
        }}
      >
        <g id="vuesax/outline/signpost">
          <g id="vuesax/outline/signpost_2">
            <g id="signpost">
              <path
                id="Vector"
                d="M17.72 9.75H9.46002C8.90002 9.75 8.34002 9.56001 7.90002 9.20001L5.71002 7.45001C5.11002 6.97001 4.77002 6.26 4.77002 5.5C4.77002 4.74 5.11002 4.01999 5.71002 3.54999L7.90002 1.79999C8.34002 1.44999 8.90002 1.25 9.46002 1.25H17.72C19.1 1.25 20.22 2.37 20.22 3.75V7.25C20.22 8.63 19.1 9.75 17.72 9.75ZM9.46002 2.75C9.23002 2.75 9.01003 2.83 8.84003 2.97L6.65002 4.72C6.41002 4.91 6.27002 5.2 6.27002 5.5C6.27002 5.8 6.41002 6.09 6.65002 6.28L8.84003 8.03C9.02003 8.17 9.24002 8.25 9.46002 8.25H17.72C18.27 8.25 18.72 7.8 18.72 7.25V3.75C18.72 3.2 18.27 2.75 17.72 2.75H9.46002Z"
                fill="#7D8588"
              />
              <path
                id="Vector_2"
                d="M15.5598 19.75H7.2998C5.9198 19.75 4.7998 18.63 4.7998 17.25V13.75C4.7998 12.37 5.9198 11.25 7.2998 11.25H15.5598C16.1298 11.25 16.6798 11.44 17.1198 11.8L19.3098 13.55C19.9098 14.03 20.2498 14.74 20.2498 15.5C20.2498 16.26 19.9098 16.98 19.3098 17.45L17.1198 19.2C16.6798 19.56 16.1298 19.75 15.5598 19.75ZM7.2998 12.75C6.7498 12.75 6.2998 13.2 6.2998 13.75V17.25C6.2998 17.8 6.7498 18.25 7.2998 18.25H15.5598C15.7898 18.25 16.0098 18.17 16.1798 18.03L18.3698 16.28C18.6098 16.09 18.7498 15.8 18.7498 15.5C18.7498 15.2 18.6098 14.91 18.3698 14.72L16.1798 12.97C15.9998 12.83 15.7798 12.75 15.5598 12.75H7.2998Z"
                fill="#7D8588"
              />
              <path
                id="Vector_3"
                d="M12.5 12.75C12.09 12.75 11.75 12.41 11.75 12V9C11.75 8.59 12.09 8.25 12.5 8.25C12.91 8.25 13.25 8.59 13.25 9V12C13.25 12.41 12.91 12.75 12.5 12.75Z"
                fill="#7D8588"
              />
              <path
                id="Vector_4"
                d="M12.5 22.75C12.09 22.75 11.75 22.41 11.75 22V19C11.75 18.59 12.09 18.25 12.5 18.25C12.91 18.25 13.25 18.59 13.25 19V22C13.25 22.41 12.91 22.75 12.5 22.75Z"
                fill="#7D8588"
              />
              <path
                id="Vector_5"
                d="M15.5 22.75H9.5C9.09 22.75 8.75 22.41 8.75 22C8.75 21.59 9.09 21.25 9.5 21.25H15.5C15.91 21.25 16.25 21.59 16.25 22C16.25 22.41 15.91 22.75 15.5 22.75Z"
                fill="#7D8588"
              />
            </g>
          </g>
        </g>
      </svg>
  
      ),
      label: "Explore",
      activeColor: "#684DEC",
      inactiveColor: "none",
    },
    
    {
      to: "/chat",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/linear/message-text">
            <g id="vuesax/linear/message-text_2">
              <g id="message-text">
                <path
                  id="Vector"
                  d="M9 19H8.5C4.5 19 2.5 18 2.5 13V8C2.5 4 4.5 2 8.5 2H16.5C20.5 2 22.5 4 22.5 8V13C22.5 17 20.5 19 16.5 19H16C15.69 19 15.39 19.15 15.2 19.4L13.7 21.4C13.04 22.28 11.96 22.28 11.3 21.4L9.8 19.4C9.64 19.18 9.27 19 9 19Z"
                  stroke="#7D7F88"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M7.5 8H17.5"
                  stroke="#7D7F88"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M7.5 13H13.5"
                  stroke="#7D7F88"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </g>
        </svg>
      ),
      label: "Chat",
      activeColor: "#684DEC",
      inactiveColor: "none",
    },
    {
      to: "",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <g id="vuesax/linear/heart">
            <g id="vuesax/linear/heart_2">
              <g id="heart">
                <path
                  id="Vector"
                  d="M13.12 20.81C12.78 20.93 12.22 20.93 11.88 20.81C8.98 19.82 2.5 15.69 2.5 8.69001C2.5 5.60001 4.99 3.10001 8.06 3.10001C9.88 3.10001 11.49 3.98001 12.5 5.34001C13.51 3.98001 15.13 3.10001 16.94 3.10001C20.01 3.10001 22.5 5.60001 22.5 8.69001C22.5 15.69 16.02 19.82 13.12 20.81Z"
                  stroke="#7D7F88"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </g>
        </svg>
      ),
      label: "Save",
      activeColor: "#684DEC",
      inactiveColor: "#684DEC",
    },
    {
      to: "/profile",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/linear/profile">
            <g id="vuesax/linear/profile_2">
              <g id="profile">
                <path
                  id="Vector"
                  d="M12.6601 10.87C12.5601 10.86 12.4401 10.86 12.3301 10.87C9.95006 10.79 8.06006 8.84 8.06006 6.44C8.06006 3.99 10.0401 2 12.5001 2C14.9501 2 16.9401 3.99 16.9401 6.44C16.9301 8.84 15.0401 10.79 12.6601 10.87Z"
                  stroke="#7D7F88"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M7.66021 14.56C5.24021 16.18 5.24021 18.82 7.66021 20.43C10.4102 22.27 14.9202 22.27 17.6702 20.43C20.0902 18.81 20.0902 16.17 17.6702 14.56C14.9302 12.73 10.4202 12.73 7.66021 14.56Z"
                  stroke="#7D7F88"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </g>
        </svg>
      ),
      label: "Profile",
      activeColor: "#684DEC",
      inactiveColor: "none",
    },
  ];

  useEffect(() => {
    const subpage = pathname.split("/")?.[1] || "home";
    setActiveLink(subpage);
  }, [pathname]);

  const handleLinkClick = (label) => {
    setActiveLink(label.toLowerCase());
  };

  return (
    <footer className="bg-white text-white shadow-md fixed bottom-0 left-0 w-full">
      <div className="p-6">
      <nav className="flex justify-center items-center space-x-4 gap-8 md:gap-16">
          {footerItems.map((item, index) => (
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
