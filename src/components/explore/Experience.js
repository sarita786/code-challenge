import React, { useEffect, useState } from "react";

const Experience = () => {
  const [discoverExp, setDiscoverExp] = useState([]);

  useEffect(() => {
    const fetchExpData = async () => {
      try {
        const response = await fetch("/other-experiences.json");
        const data = await response.json();
        setDiscoverExp(data);
      } catch (error) {
        console.error("Error fetching exp:", error);
      }
    };

    fetchExpData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-4 mt-8">
        <h5 className="w-full text-gray-900 text-lg font-semibold font-['SF Pro Display'] leading-normal tracking-tight">
          Want to discover other experiences
        </h5>
      </div>
      <div className="grid grid-cols-4 gap-4 sliding-images-container">
        {discoverExp.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded sliding-image mb-32"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mx-4 my-4">{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
