import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const soundbars = [
  {
    id: 1,
    name: "JBL Bar 2.1 Deep Bass",
    price: "$299",
    img: "/images/soundbar1.png",
  },
  {
    id: 2,
    name: "JBL Bar 5.1 Surround",
    price: "$499",
    img: "/images/soundbar2.png",
  },
  {
    id: 3,
    name: "JBL Bar 9.1 True Wireless",
    price: "$899",
    img: "/images/soundbar3.png",
  },
  {
    id: 4,
    name: "JBL Bar 1000",
    price: "$1099",
    img: "/images/soundbar4.png",
  },
];

function SoundbarPage() {
  return (
    <>
      <Breadcrumb />

      {/* ===== Hero Section ===== */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            JBL Soundbars
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Cinematic sound. Powerful bass. Wireless freedom.
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded font-semibold hover:bg-orange-600 transition">
            Explore Home Theatre
          </button>
        </div>
      </section>

      {/* ===== Key Features ===== */}
      <section className="py-12 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Dolby Atmos",
            "Wireless Subwoofer",
            "4K HDMI eARC",
            "Smart Sound Mode",
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

      {/* ===== Soundbar Products ===== */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Premium Soundbars
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {soundbars.map((item) => (
              <div
                key={item.id}
                className="group border rounded-lg overflow-hidden bg-white hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="bg-gray-100 p-6 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-32 md:h-36 group-hover:scale-110 transition duration-300"
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
          Bring Cinema Home 🎬
        </h2>
        <p className="mb-6">
          Upgrade your TV sound with JBL immersive audio.
        </p>
        <button className="bg-black px-8 py-3 rounded font-semibold hover:bg-gray-900 transition">
          Shop Soundbars
        </button>
      </section>
    </>
  );
}

export default SoundbarPage;
