import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const HomePage = () => {
  return (
    <>
      <Breadcrumb />

      {/* ===== Hero Section ===== */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Feel the <span className="text-orange-500">Bass</span>
            </h1>
            <p className="text-gray-300 mb-6">
              Premium Shop-Sphere-Online speakers & headphones with powerful sound and Charging & Power Protection & Style Smart Wearables Audio Gear.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-semibold transition">
              Shop Now
            </button>
          </div>

          <div>
            <img src="/images/Speakers.png"alt="JBL Speaker"className="w-full"/>
          </div>
        </div>
      </section>

      {/* ===== Categories Section ===== */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Shop by Category
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Speakers", "Headphones", "Earbuds", "Accessories"].map(
              (item, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer"
                >
                  <h3 className="text-xl font-semibold">{item}</h3>
                </div>
              )
            )}
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 ">
            {["Charging & Power", "Protection & Style", "Audio Gear", "Smart Wearables"].map(
              (item, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer">
                  <h3 className="text-xl font-semibold">{item}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== Featured Products ===== */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Products
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg p-4 shadow hover:shadow-xl transition">
                <img src="/image/gamingheadset.png" alt="JBL Product" className="mb-4"/>
                <h3 className="font-semibold mb-2">Shop-Sphere-Online! Bluetooth Speaker</h3>
                <p className="text-orange-500 font-bold">$129</p>
                <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-orange-500 transition">
                Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg p-4 shadow hover:shadow-xl transition">
                <img src="/image/gamingheadset.png" alt="JBL Product" className="mb-4"/>
                <h3 className="font-semibold mb-2">Shop-Sphere-Online! Bluetooth Speaker</h3>
                <p className="text-orange-500 font-bold">$129</p>
                <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-orange-500 transition">
                Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Promo Banner ===== */}
      <section className="bg-orange-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-2">Big Sound, Bigger Deals</h2>
        <p className="mb-4">Up to 30% off on selected products</p>
        <button className="bg-black px-6 py-3 rounded font-semibold hover:bg-gray-900 transition">
          Explore Deals
        </button>
      </section>
    </>
  );
 };

 export default HomePage;
