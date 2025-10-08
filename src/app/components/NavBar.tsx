import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-blush-50 border-b-2 border-gray-200">
      <div className="flex items-center space-x-4">
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h2 className="text-2xl font-bold tracking-tight">
          The Rose Decorations
        </h2>
      </div>
      <div className="flex items-center text-xl font-sans space-x-4 text-gray-600 font-medium">
        <Link className="hover:text-[#D4AF37] transition-colors" href="/">
          Home
        </Link>
        <Link className="hover:text-[#D4AF37] transition-colors" href="/about">
          Packages
        </Link>
        <Link
          className="hover:text-[#D4AF37] transition-colors"
          href="/gallery"
        >
          Gallery
        </Link>
        <Link className="hover:text-[#D4AF37] transition-colors" href="/about">
          About
        </Link>
        <Link
          className="hover:text-[#D4AF37] transition-colors"
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <div>
        <Button
          size={"lg"}
          className="bg-blush-500 text-md font-bold hover:bg-blush-600"
        >
          Book now
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
