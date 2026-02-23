"use client";

import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full" >
      {/* TOP BAR */}
      <div className="bg-[#9ACD32] text-[#2f2f2f] text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left font-medium">
            We’re 24/7 Hours Service Provider!
          </p>

          <div className="flex flex-col gap-2 md:flex-row md:gap-6 items-center">
            <div className="flex items-center gap-4">
              <span>Toronto Location</span>
              <div className="flex items-center gap-1">
              <FaPhoneAlt />
              <span>+1-236-880-5678</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span>Mississauga Location</span>
        

                  <div className="flex items-center gap-1">
              <FaPhoneAlt />
              <span>+1-437-998-8017</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <h1 className="text-2xl font-bold tracking-wide text-[#2f2f2f]">
            Easyshift  <span className="text-[#9ACD32]">MOVERS</span>
          </h1>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            <a
           href="#home"
             
              className="px-5 py-2 rounded-full bg-[#9ACD32] text-[#2f2f2f] font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-medium text-[#2f2f2f] hover:text-[#9ACD32]"
            >
              About
            </a>
            <a
              href="#services"
              className="font-medium text-[#2f2f2f] hover:text-[#9ACD32]"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="font-medium text-[#2f2f2f] hover:text-[#9ACD32]"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="font-medium text-[#9ACD32] hover:underline"
            >
              Get Quote
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-[#2f2f2f]"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col px-4 py-4 gap-4">
              <a  href="#home" className="font-medium text-[#9ACD32]">Home</a>
              <a   href="#about" className="font-medium text-[#2f2f2f]">About</a>
              <a  href="#services" className="font-medium text-[#2f2f2f]">Services</a>
              <a  href="#gallery" className="font-medium text-[#2f2f2f]">Gallery</a>
              <a  href="#contact" className="font-medium text-[#9ACD32]">Get Quote</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}