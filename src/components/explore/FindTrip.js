import React, { useEffect, useState } from "react";

const FindTrip = ({ searchInput }) => {
  const [showAll, setShowAll] = useState(false);
  const [tripsList, setTripList] = useState([]);

  useEffect(() => {
    const fetchTripsList = async() => {
      try {
        const response = await fetch("/trips.json");
        const data = await response.json();
        setTripList(data);
      } catch (error) {
        console.log("Error fetching trip:", error);
      }
    };

    fetchTripsList();
  }, []);

  const filteredData = tripsList.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const visibleData = showAll ? filteredData : filteredData.slice(0, 2);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4 mt-8">
        <h5 className=" text-gray-900 text-lg font-semibold font-['SF Pro Display'] leading-normal tracking-tight">
          Find your next trip
        </h5>
        <div
          onClick={toggleShowAll}
          className="text-right text-indigo-500 text-sm font-medium font-['SF Pro Display'] leading-[18.20px] tracking-tight cursor-pointer"
        >
          {showAll ? "Show less" : "See all"}
        </div>
      </div>
      {filteredData.length === 0 && (
        <p className="text-gray-600 mb-4">No matching trips found!</p>
      )}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {visibleData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mx-4 mt-4">{item.name}</h3>
            <p className="text-gray-600 mx-4 mb-4">{`${item.rented_props_count} rented props`}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FindTrip;
