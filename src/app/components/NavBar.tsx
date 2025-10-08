"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" border-b-2 border-gray-200 p-4">
      {" "}
      <div className="flex items-center justify-between">
        {/* Logo + Title */}{" "}
        <Link href={"/"} className="flex items-center space-x-4">
          {" "}
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />{" "}
          <h2 className="text-2xl font-bold text-[#D4AF37] tracking-tight">
            The Rose Decorations{" "}
          </h2>{" "}
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center text-xl font-sans space-x-6 text-gray-600 font-medium">
          <Link className="hover:text-[#D4AF37] transition-colors" href="/">
            Home
          </Link>
          <Link
            className="hover:text-[#D4AF37] transition-colors"
            href="#featured-packages"
          >
            Packages
          </Link>
          <Link
            className="hover:text-[#D4AF37] transition-colors"
            href="#events"
          >
            Gallery
          </Link>
          <Link className="hover:text-[#D4AF37] transition-colors" href="#">
            About
          </Link>
          <Link
            className="hover:text-[#D4AF37] transition-colors"
            href="#contact"
          >
            Contact
          </Link>
          <Button
            size="lg"
            className="bg-blush-500 text-md font-bold hover:bg-blush-600 hover:scale-110 transition-transform cursor-pointer text-white"
          >
            Book now
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col items-center space-y-4 text-lg text-gray-700 font-medium md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="#featured-packages" onClick={() => setMenuOpen(false)}>
            Packages
          </Link>
          <Link href="#events" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Button
            size="lg"
            className="bg-blush-500 text-md font-bold hover:bg-blush-600 transition-transform cursor-pointer text-white"
          >
            Book now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
