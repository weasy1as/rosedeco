import React from "react";

const Events = () => {
  const eventImages = Array.from(
    { length: 6 },
    (_, i) => `/events/event${i + 1}.jpg`
  );

  return (
    <div className="flex flex-col p-8 pt-15">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Past Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventImages.map((image, index) => (
          <div
            key={index}
            className="h-76 bg-cover bg-center rounded-xl shadow-md"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default Events;
