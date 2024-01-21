import React, { useEffect, useState } from "react";

const LivingStyle = () => {
  const [livingStyleData, setLivingStyleData] = useState([])

  useEffect(()=> {
    const fetchLivingStyle = async() => {
      try {
        const response = await fetch("/living-style.json");
        const data = await response.json();
        setLivingStyleData(data);
      } catch(error){
        console.log("Error fecthing style:", error)
      }
    }

    fetchLivingStyle();
  }, [])

  return (
    <>
      <div className="flex items-center justify-between mb-4 mt-8">
        <h5 className="w-[183px] text-gray-900 text-lg font-semibold font-['SF Pro Display'] leading-normal tracking-tight">
        Explore by living style
        </h5>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 sliding-images-container">
        {livingStyleData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded sliding-image">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mx-4 mt-4">{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default LivingStyle;
