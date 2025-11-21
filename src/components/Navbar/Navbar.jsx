import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import MenuIcon from "../../assets/icons8-menu.svg"; 
import easyLogo from "../../assets/easylogo.webp"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md fixed w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-10 h-16">
          <div className="flex items-center gap-8">
            {/* ✅ Added width/height + fetchpriority for LCP */}
            <img
              src={easyLogo}
              alt="EasyPagar Logo"
              width="200"
              height="60"
              loading="eager"
             
              className="md:h-[60px] sm:h-[50px] h-[50px] w-auto"
            />
            <div className="hidden md:flex flex-col">
              <a href="/#home" className="text-xs font-bold text-gray-800 leading-8">
                Easy Pagar
              </a>
              <p className="text-xs font-semibold text-blue-shade2">Ab Pagar Hua Easy</p>
            </div>
          </div>

          {/* ✅ Replaced empty div with aria-hidden span */}
          <span aria-hidden="true" className="flex-grow"></span>

          <div className="hidden md:flex md:space-x-8">
            <HashLink
              to="/#home"
              smooth
              className="text-gray-800 hover:text-yellow-400 px-3 py-2 rounded-md text-xs font-medium cursor-pointer"
            >
              Home
            </HashLink>
            <HashLink
              to="/#attendence"
              smooth
              className="text-gray-800 hover:text-yellow-400 px-3 py-2 rounded-md text-xs font-medium cursor-pointer"
            >
              Products
            </HashLink>
            <HashLink
              to="/#pricing"
              smooth
              className="text-gray-800 hover:text-yellow-400 px-3 py-2 rounded-md text-xs font-medium cursor-pointer"
            >
              Plans & Pricing
            </HashLink>
            <HashLink
              to="/#partners"
              smooth
              className="text-gray-800 hover:text-yellow-400 px-3 py-2 rounded-md text-xs font-medium cursor-pointer"
            >
              Partners
            </HashLink>
            <HashLink
              to="/#testimonials"
              smooth
              className="text-gray-800 hover:text-yellow-400 px-3 py-2 rounded-md text-xs font-medium cursor-pointer"
            >
              Help
            </HashLink>
            <HashLink
              to="/#contact"
              smooth
              className="text-gray-800 hover:text-yellow-400 px-3 py-2 rounded-md text-xs font-medium cursor-pointer"
            >
              Contact Us
            </HashLink>
          </div>

          {/* ✅ aria-controls always points to existing element */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-yellow-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <img src={MenuIcon} alt="Menu" width="24" height="24" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile menu always rendered but hidden instead of removed */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="px-2 text-center pt-2 pb-3 space-y-1 sm:px-3">
          <HashLink
            to="/#hero2"
            smooth
            className="text-gray-800 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Home
          </HashLink>
          <HashLink
            to="/#attendence"
            smooth
            className="text-gray-800 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Products
          </HashLink>
          <HashLink
            to="/#pricing"
            smooth
            className="text-gray-800 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Plans & Pricing
          </HashLink>
          <HashLink
            to="/#partners"
            smooth
            className="text-gray-800 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Partners
          </HashLink>
          <HashLink
            to="/#testimonials"
            smooth
            className="text-gray-800 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Help
          </HashLink>
          <HashLink
            to="/#contact"
            smooth
            className="text-gray-800 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
