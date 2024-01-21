import React, { useState } from "react";

const ClickableIcon = ({ svgPath, alt, className }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`m-3 flex space-x-2 ${isClicked ? "text-zinc-400" : "text-indigo-500"} cursor-pointer`} onClick={handleClick}>
      <div className={`fill-current ${isClicked ? "text-zinc-400" : "text-indigo-400"}`}>
        {svgPath}
      </div>
      {alt && <span>{alt}</span>}
    </div>
  );
};

export default ClickableIcon;