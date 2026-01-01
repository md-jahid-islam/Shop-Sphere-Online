import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const speakers = [
  {
    id: 1,
    name: "JBL Flip 6",
    price: "$129",
    img: "/images/speaker1.png",
  },
  {
    id: 2,
    name: "JBL Charge 5",
    price: "$179",
    img: "/images/speaker2.png",
  },
  {
    id: 3,
    name: "JBL Xtreme 3",
    price: "$249",
    img: "/images/speaker3.png",
  },
  {
    id: 4,
    name: "JBL Boombox 3",
    price: "$399",
    img: "/images/speaker4.png",
  },
];

function SpeakersPage() {
  return (
    <>
      <Breadcrumb />

      {/* ===== Page Header ===== */}
      <section className="bg-black text-white py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            JBL Speakers
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Powerful bass, crystal clear sound & rugged design.
          </p>
        </div>
      </section>

      {/* ===== Speakers Grid ===== */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {speakers.map((item) => (
              <div
                key={item.id}
                className="group border rounded-lg overflow-hidden bg-white hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="bg-gray-100 p-6 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-40 group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-orange-500 font-bold mb-3">
                    {item.price}
                  </p>

                  <button className="w-full py-2 text-sm font-semibold border border-black rounded hover:bg-black hover:text-white transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SpeakersPage;
