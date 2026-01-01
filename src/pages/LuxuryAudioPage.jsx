import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const luxuryProducts = [
  {
    id: 1,
    name: "JBL Synthesis SDR-35",
    price: "$6,999",
    img: "/images/luxury1.png",
  },
  {
    id: 2,
    name: "JBL Everest Elite 750NC",
    price: "$799",
    img: "/images/luxury2.png",
  },
  {
    id: 3,
    name: "JBL K2 S9900",
    price: "$29,999",
    img: "/images/luxury3.png",
  },
  {
    id: 4,
    name: "JBL Project Array 1400",
    price: "$19,999",
    img: "/images/luxury4.png",
  },
];

function LuxuryAudioPage() {
  return (
    <>
      <Breadcrumb />

      {/* ===== Luxury Hero ===== */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-widest mb-4">
            LUXURY AUDIO
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Crafted for audiophiles who demand perfection.
          </p>
          <button className="border border-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition">
            Discover Excellence
          </button>
        </div>
      </section>

      {/* ===== Brand Values ===== */}
      <section className="py-14 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Handcrafted Design",
            "Studio Grade Sound",
            "Premium Materials",
            "Elite Engineering",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-sm font-semibold tracking-wide text-gray-800">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Luxury Products ===== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-wider text-center mb-12">
            Signature Collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {luxuryProducts.map((item) => (
              <div
                key={item.id}
                className="group border border-gray-200 bg-white hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="bg-gray-50 p-10 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-40 group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-sm font-semibold tracking-wide mb-2">
                    {item.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-4">
                    {item.price}
                  </p>

                  <button className="text-xs uppercase tracking-widest border border-black px-6 py-2 hover:bg-black hover:text-white transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Luxury CTA ===== */}
      <section className="bg-black text-white py-16 text-center px-4">
        <h2 className="text-3xl font-light tracking-widest mb-4">
          Experience Audio Without Compromise
        </h2>
        <p className="text-gray-400 mb-8">
          Designed for the world’s most discerning listeners.
        </p>
        <button className="border border-white px-10 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition">
          Book a Private Demo
        </button>
      </section>
    </>
  );
}

export default LuxuryAudioPage;
