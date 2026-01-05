
import React, { useState, useEffect } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  // ============ Mobile top menu ============ // 
  const [topOpen, setTopOpen] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 
  const [searchOpen, setSearchOpen] = useState(false);

  const [showTopBar, setShowTopBar] = useState(true);
  const [showMainBar, setShowMainBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ========== Top bar hide after scroll 50px ========= // 
      setShowTopBar(currentScrollY < 50);

      // ========== Main navbar hide on scroll down, show on scroll up ========== // 
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowMainBar(false); 
      } else {
        setShowMainBar(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top Navbar */}
      <div className={`fixed top-0 left-0 w-full bg-gray-100 z-50 transition-transform duration-300 ${
          showTopBar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center">
          {/* Desktop Top Menu */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            
            <li><Link to="#">📞 Phone: ++8801540587085</Link></li>
            <li><Link to="#">✉ Email Address: jahidulislam.tazenix@gmail.com </Link></li>
            <li><Link to="#">🏠 Choose an address</Link></li>
            <li><Link to="#">Become A Seller</Link></li>
            <li><Link to="#">Help & Support</Link></li>
            <li><Link to="#">Language</Link></li>
            <li><Link to="#">Login</Link></li>
            <li><Link to="#">Sign Up</Link></li>
          </ul>

          {/* Mobile Top Toggle */}
          <div className="md:hidden">
            <button onClick={() => setTopOpen(!topOpen)}>
              {topOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Top Dropdown */}
        {topOpen && (
          <ul className="md:hidden mt-3 flex flex-col gap-3 text-sm bg-white shadow p-4 rounded">
            <li><Link to="#">📞 Phone: ++8801540587085</Link></li>
            <li><Link to="#">✉ Email Address: jahidulislam.tazenix@gmail.com</Link></li>
            <li><Link to="#">🏠 Choose an address</Link></li>
            <li><Link to="#">Become A Seller</Link></li>
            <li><Link to="#">Help & Support</Link></li>
            <li><Link to="#">Language</Link></li>
            <li><Link to="#">Login</Link></li>
            <li><Link to="#">Sign Up</Link></li>
          </ul>
        )}
      </div>

      {/* Main Navbar */}
      <nav className={`fixed top-12 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
          showMainBar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/image/shop.png" alt="Shop-Sphere" className="w-10 h-10 object-contain rounded-full"/>
              <h1 className="text-xl font-bold">
                Shop-Sphere<span className="text-red-600">!</span>
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

              {/* Desktop Search */}
              <div className="relative hidden md:flex items-center">
                <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search..."className="pl-9 pr-3 py-1.5 border rounded-full text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all"/>
              </div>

              {/* Mobile Search */}
              <button className="md:hidden text-2xl" onClick={() => setSearchOpen(!searchOpen)}>
                <CiSearch />
              </button>

              {/* Cart */}
              <Link to="/cart">
                <CiShoppingCart className="text-2xl hover:text-red-600 transition" />
              </Link>

              {/* Mobile Slide Menu Toggle */}
              <button className="lg:hidden text-3xl ml-2" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
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
        <div className={`lg:hidden fixed top-12 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="flex flex-col gap-5 p-6 text-base font-medium mt-16">
            <li><Link to="/headphonePage" onClick={() => setMenuOpen(false)}>Headphone</Link></li>
            <li><Link to="/speakers" onClick={() => setMenuOpen(false)}>Speakers</Link></li>
            <li><Link to="/soundbar" onClick={() => setMenuOpen(false)}>Soundbar</Link></li>
            <li><Link to="/luxuryAudio" onClick={() => setMenuOpen(false)}>Luxury</Link></li>
            <li><Link to="/professionalAudio" onClick={() => setMenuOpen(false)}>Audio</Link></li>
            <li><Link to="/carAudio" onClick={() => setMenuOpen(false)}>Car Audio</Link></li>
            <li><Link to="/accessories" onClick={() => setMenuOpen(false)}>Accessories</Link></li>
            <li><Link to="/soundOfCelebrations" onClick={() => setMenuOpen(false)}>Sound Box</Link></li>
            <li><Link to="/clearanceSale" onClick={() => setMenuOpen(false)}>Sale</Link></li>
          </ul>
        </div>
      </nav>
      
      {/* Page padding for fixed navbar */}
      <div className="pt-40"></div>
    </>
  );
 };

 export default Navbar;
