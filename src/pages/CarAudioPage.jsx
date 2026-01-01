import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const carAudioProducts = [
  {
    id: 1,
    name: "JBL GTO609C",
    price: "$199",
    img: "/images/caraudio1.png",
  },
  {
    id: 2,
    name: "JBL Stadium GTO 930",
    price: "$249",
    img: "/images/caraudio2.png",
  },
  {
    id: 3,
    name: "JBL BassPro SL",
    price: "$349",
    img: "/images/caraudio3.png",
  },
  {
    id: 4,
    name: "JBL Club WS1200",
    price: "$399",
    img: "/images/caraudio4.png",
  },
];

function CarAudioPage() {
  return (
    <>
      <Breadcrumb />

      {/* ===== Hero Section ===== */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            JBL Car Audio
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Drive with powerful sound engineered for the road.
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded font-semibold hover:bg-orange-600 transition">
            Upgrade Your Ride
          </button>
        </div>
      </section>

      {/* ===== Key Highlights ===== */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "High Power Output",
            "Deep Bass Performance",
            "Vehicle Tuned",
            "Durable Build",
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-gray-800">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Product Grid ===== */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Performance Audio Systems
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {carAudioProducts.map((item) => (
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

      {/* ===== CTA Section ===== */}
      <section className="bg-orange-500 text-white py-14 text-center px-4">
        <h2 className="text-3xl font-bold mb-3">
          Feel the Road. Hear the Power.
        </h2>
        <p className="mb-6">
          Premium JBL car audio systems built for every journey.
        </p>
        <button className="bg-black px-8 py-3 rounded font-semibold hover:bg-gray-900 transition">
          Shop Car Audio
        </button>
      </section>
    </>
  );
}

export default CarAudioPage;
