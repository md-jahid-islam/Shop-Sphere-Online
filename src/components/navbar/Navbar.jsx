import React, { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router";

 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/image/shop.png" alt="JBL" className="w-10 h-10 object-contain rounded-full " />
              <h1 className="text-xl font-bold">
                Shop-Sphere-Online<span className="text-red-600">!</span>
              </h1>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <li><Link to="/headphonePage" className="hover:text-red-600">Headphone</Link></li>
              <li><Link to="/speakers" className="hover:text-red-600">Speakers</Link></li>
              <li><Link to="/soundbar" className="hover:text-red-600">Soundbar</Link></li>
              <li><Link to="/luxuryAudio" className="hover:text-red-600">Luxury</Link></li>
              <li><Link to="/professionalAudio" className="hover:text-red-600">Audio</Link></li>
              <li><Link to="/carAudio" className="hover:text-red-600">Car</Link></li>
              <li><Link to="/accessories" className="hover:text-red-600">Accessories</Link></li>
              <li><Link to="/soundOfCelebrations" className="hover:text-red-600">Sound Box</Link></li>
              <li><Link to="/clearanceSale" className="hover:text-red-600">Sale</Link></li>
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-4">

              {/* Search */}
              <div className="relative hidden md:flex items-center">
                <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-3 py-1.5 border rounded-full text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all"
                />
              </div>

              {/* Mobile search toggle */}
              <button className="md:hidden text-2xl" onClick={() => setSearchOpen(!searchOpen)}>
              <CiSearch />
              </button>

              {/* Cart */}
              <Link to="/cart">
              <CiShoppingCart className="text-2xl hover:text-red-600 transition" />
              </Link>

              {/* Mobile menu button */}
              <button className="lg:hidden text-3xl ml-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Input */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-2">
            <input type="text" placeholder="Search..." className="w-full border rounded-full px-10 py-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"/>
          </div>
        )}

        {/* Mobile Slide Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full" }`}>
          <ul className="flex flex-col gap-5 p-6 text-base font-medium mt-16">
            <li><Link to="/headphonePage" onClick={() => setIsOpen(false)}>Headphone</Link></li>
            <li><Link to="/speakers" onClick={() => setIsOpen(false)}>Speakers</Link></li>
            <li><Link to="/soundbar" onClick={() => setIsOpen(false)}>Soundbar</Link></li>
            <li><Link to="/luxuryAudio" onClick={() => setIsOpen(false)}>Luxury</Link></li>
            <li><Link to="/professionalAudio" onClick={() => setIsOpen(false)}>Audio</Link></li>
            <li><Link to="/carAudio" onClick={() => setIsOpen(false)}>Car Audio</Link></li>
            <li><Link to="/accessories" onClick={() => setIsOpen(false)}>Accessories</Link></li>
            <li><Link to="/soundOfCelebrations" onClick={() => setIsOpen(false)}>Sound Box</Link></li>
            <li><Link to="/clearanceSale" onClick={() => setIsOpen(false)}>Sale</Link></li>
          </ul>
        </div>
      </nav>

      {/* Page padding for fixed navbar */}
      <div className="pt-16"></div>
    </>
  );
 };

 export default Navbar;
