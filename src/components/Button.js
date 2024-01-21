import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, bgColor, textColor, link }) => {
  const buttonContent = (
    <div
      className={`text-center text-base font-medium font-['SF Pro Display'] leading-normal tracking-tight`}
      style={{ color: textColor }}
    >
      {text}
    </div>
  );

  return link ? (
    <Link to={link}>
      <div
        className={`w-full h-[50px] py-[13px] rounded-[54px] border border-zinc-200 justify-center items-center inline-flex`}
        style={{ backgroundColor: bgColor }}
      >
        {buttonContent}
      </div>
    </Link>
  ) : (
    <div
      className={`w-full h-[50px] py-[13px] rounded-[54px] border border-zinc-200 justify-center items-center inline-flex`}
      style={{ backgroundColor: bgColor }}
    >
      {buttonContent}
    </div>
  );
};

export default Button;