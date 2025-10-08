import React from "react";
import Marquee from "react-fast-marquee";

const Events = () => {
  const eventImages = Array.from(
    { length: 6 },
    (_, i) => `/events/event${i + 1}.jpg`
  );

  return (
    <div id="events" className="flex flex-col p-8 pt-15">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Past Events
      </h2>
      <Marquee
        pauseOnHover
        gradient={false}
        speed={40}
        className="w-full overflow-hidden"
      >
        {eventImages.map((image, index) => (
          <div
            key={index}
            className="w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-cover bg-center rounded-xl shadow-md mx-4"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Events;
