import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const clearanceProducts = [
  {
    id: 1,
    name: "JBL Flip 6",
    oldPrice: "$149",
    price: "$129",
    img: "/images/flip6.png",
  },
  {
    id: 2,
    name: "JBL Charge 5",
    oldPrice: "$199",
    price: "$179",
    img: "/images/charge5.png",
  },
  {
    id: 3,
    name: "JBL Xtreme 3",
    oldPrice: "$269",
    price: "$249",
    img: "/images/xtreme3.png",
  },
  {
    id: 4,
    name: "JBL Boombox 3",
    oldPrice: "$429",
    price: "$399",
    img: "/images/boombox3.png",
  },
];

function ClearanceSalePage() {
  return (
    <>
      <Breadcrumb />

      {/* ===== Hero Banner ===== */}
      <section className="bg-red-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Clearance Sale
          </h1>
          <p className="text-gray-100 max-w-xl mx-auto mb-6">
            Grab your favorite JBL gear at unbeatable prices!
          </p>
          <button className="bg-black px-6 py-3 rounded font-semibold hover:bg-gray-900 transition">
            Shop Deals
          </button>
        </div>
      </section>

      {/* ===== Products Grid ===== */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Clearance Products
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clearanceProducts.map((item) => (
              <div
                key={item.id}
                className="group border rounded-lg overflow-hidden bg-white hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="bg-gray-100 p-6 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-36 group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 line-through mb-1">
                    {item.oldPrice}
                  </p>
                  <p className="text-orange-500 font-bold mb-3">{item.price}</p>

                  <button className="w-full py-2 text-sm font-semibold border border-black rounded hover:bg-black hover:text-white transition">
                    View Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="bg-red-600 text-white py-14 text-center px-4">
        <h2 className="text-3xl font-bold mb-3">
          Don’t Miss Out!
        </h2>
        <p className="mb-6">
          Limited stock. Grab your JBL favorites before they're gone.
        </p>
        <button className="bg-black px-8 py-3 rounded font-semibold hover:bg-gray-900 transition">
          Shop Now
        </button>
      </section>
    </>
  );
}

export default ClearanceSalePage;
