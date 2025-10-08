import { CardDescription, CardHeader } from "@/components/ui/card";
import React from "react";

const FeaturedPackages = () => {
  return (
    <div
      id="featured-packages"
      className="p-8 pt-15  grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <div className="flex flex-col bg-[#FAF5F5] rounded-xl shadow-md hover:scale-110 transition-transform hover:px-2">
        <CardHeader className="bg-[url('/packages/birthday.jpg')] bg-center bg-cover h-60 rounded-t-xl"></CardHeader>
        <CardDescription className="p-4 flex flex-col gap-4 justify-center items-center text-center">
          <h3 className="text-2xl font-bold text-gray-800">Birthdays</h3>
          <p className="mt-2 max-w-xs text-gray-600 font-sans">
            Celebrate another year with stunning and personalized birthday
            decorations.
          </p>
        </CardDescription>
      </div>

      <div className="flex flex-col bg-[#FAF5F5] rounded-xl shadow-md hover:scale-110 transition-transform hover:px-2">
        <CardHeader className="bg-[url('/packages/babyShower.jpg')] bg-center bg-cover h-60 rounded-t-xl"></CardHeader>
        <CardDescription className="p-4 flex flex-col gap-4 justify-center items-center text-center">
          <h3 className="text-2xl font-bold text-gray-800">Baby Showers</h3>
          <p className="mt-2 max-w-xs text-gray-600 font-sans">
            Celebrate the arrival of a new baby with our beautiful baby shower
            decorations.
          </p>
        </CardDescription>
      </div>
      <div className="flex flex-col bg-[#FAF5F5] rounded-xl shadow-md hover:scale-110 transition-transform hover:px-2">
        <CardHeader className="bg-[url('/packages/engagement.jpg')] bg-center bg-cover h-60 rounded-t-xl"></CardHeader>
        <CardDescription className="p-4 flex flex-col gap-4 justify-center items-center text-center">
          <h3 className="text-2xl font-bold text-gray-800">Engagements</h3>
          <p className="mt-2 max-w-xs text-gray-600 font-sans">
            Celebrate your love with our stunning engagement decorations.
          </p>
        </CardDescription>
      </div>
    </div>
  );
};

export default FeaturedPackages;
