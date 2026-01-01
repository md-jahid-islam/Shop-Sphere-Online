import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <footer className="block px-2 py-1 rounded transition">
      <div className="max-w-7xl mx-auto ">
        {/* ================= Top Section ================= */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-b border-gray-700 pb-12">
          {/* SHOP */}
          <div>
            <h4 className="text-white font-semibold mb-4">SHOP</h4>
            <ul className="space-y-2">
              {[
                "Featured",
                "Headphones",
                "Gaming",
                "Speakers",
                "Soundbars",
                "Professional",
                "Offer Zone",
              ].map((item, i) => (
                <li key={i} className="hover:text-white transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              {[
                "Order Status",
                "Bulk Purchase Program",
                "Buy Authentic",
                "Product Support",
                "Paperless Warranty",
                "Shipping & Delivery policy",
                "Cancellation & Refund Policy",
                "Service Center",
                "Brand Stores",
                "Store Locator",
              ].map((item, i) => (
                <li key={i} className="hover:text-white transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="text-white font-semibold mb-4">ABOUT US</h4>
            <ul className="space-y-2">
              {[
                "Shop-Sphere-Online Corporate",
                "Privacy Policy",
                "Cookie Policy",
                "Cookie Settings",
                "Warranty Policy",
                "Terms of use",
                "Why Buy Direct",
                "JBL Sound Partners",
              ].map((item, i) => (
                <li key={i} className="hover:text-white transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">CONTACT US</h4>

            <p className="leading-relaxed">
              <span className="text-white">1800-102-0525</span>
              <br />
              Mon – Sun: 8:00 am – 6:00 pm (IST)
            </p>

            <div className="mt-4 space-y-3 text-xs leading-relaxed">
              <div>
                <p className="font-semibold text-white">Manufactured by:</p>
                <p>
                  Shop-Sphere-Online International Industries, Inc.
                  <br />1210, Dhaka, CA 91329, USA
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Imported by:</p>
                <p>
                  Shop-Sphere-Online International (Bangladesh) Pvt. Ltd.
                  <br />Dhaka – 1230, Uttara, Bangladesh
                </p>
              </div>

              <div>
                <p className="font-semibold text-orange-500">
                  PRODUCT COUNTRY OF ORIGIN
                </p>
                <p>India / China / Vietnam / Malaysia</p>
              </div>

              <div>
                <p className="font-semibold text-green-500">
                  SUSTAINABILITY 🌱
                </p>
                <p className="hover:text-white transition cursor-pointer">
                  Follow Our Efforts
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-4">FOLLOW US</h4>
            <div className="flex gap-4 text-xl">
              <a className="hover:text-blue-500 transition" href="#">
                <FaFacebookF />
              </a>
              <a className="hover:text-sky-400 transition" href="#">
                <FaTwitter />
              </a>
              <a className="hover:text-pink-500 transition" href="#">
                <FaInstagram />
              </a>
              <a className="hover:text-red-500 transition" href="#">
                <FaYoutube />
              </a>
              <a className="hover:text-gray-300 transition" href="#">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        {/* ================= Bottom Section ================= */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2025 Harman International Industries, Incorporated. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <img src="/image/akg.png" alt="AKG" className="h-4 opacity-70" />
            <img src="/image/jbl.png" alt="JBL" className="h-4 opacity-70" />
          </div>
        </div>
      </div>
    </footer>    
    </>
  );
 };

 export default Footer;
