import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center justify-between px-9 py-20 gap-4 h-[500px] md:h-[600px] w-full bg-[url('/front.jpg')] bg-center bg-cover bg-no-repeat rounded-xl">
        <div className="text-center max-w-xl">
          <h2 className="text-white text-2xl md:text-7xl font-bold">
            Transform Your Special Day with Elegant Decorations
          </h2>
          <h3 className="max-w-xl mx-auto text-white text-2xl mt-4">
            We provide beautiful, custom decoration setups to make your event
            unforgettable.
          </h3>
        </div>
        <Button
          size={"lg"}
          className="bg-blush-500 hover:bg-blush-600 hover:scale-110 transition-transform cursor-pointer text-md text-white font-bold"
        >
          <Link href="#featured-packages">View Packages</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
