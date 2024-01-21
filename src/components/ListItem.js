import React from "react";

const ListItem = ({ icon, label, action }) => {
  return (
    <li>
      <div className="flex items-center justify-between p-3 text-base font-bold text-gray-900 rounded-lg  hover:bg-gray-50 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <div className="flex items-center">
          <div className="w-10 h-10 p-[9px] bg-white rounded-[10px] shadow border border-zinc-200 justify-center items-center inline-flex">
            {icon}
          </div>
          <div className="text-gray-900 text-base text-center font-medium font-['SF Pro Display'] ml-4">
            {label}
          </div>
        </div>
        <div className="px-2 py-0.5">{action}</div>
      </div>
    </li>
  );
};

export default ListItem;
