import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-secondary border-t border-gray-200">
        <div className="container mx-auto px-9 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <a
              className="flex flex-col md:flex-row items-center  gap-3 text-foreground"
              href="#"
            >
              <Image
                src="/logo.jpg"
                alt="The Rose Decoration"
                className="rounded-full"
                width={100}
                height={100}
              />
              <h3 className="text-xl font-bold text-[#D4AF37]">
                The Rose Decoration
              </h3>
            </a>
            <div className="flex gap-6 text-gray-600 font-medium">
              <a className="hover:text-[#D4AF37] transition-colors" href="#">
                Home
              </a>
              <a className="hover:text-[#D4AF37] transition-colors" href="#">
                Gallery
              </a>
              <a className="hover:text-[#D4AF37] transition-colors" href="#">
                About
              </a>
              <a className="hover:text-[#D4AF37] transition-colors" href="#">
                Contact
              </a>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <h2 className="font-bold text-sm md:text-md">
                Follow us on Instagram
              </h2>
              <Link
                href="https://www.instagram.com/therosedecorators/"
                target="_blank"
              >
                <FaInstagram
                  size={34}
                  color="#E1306C"
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm font-sans">
            © 2024 The Rose Decoration. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
