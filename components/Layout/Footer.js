import React from "react";
import LogoVPN from "../../public/assets/Logo3.png";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24  ">
      <div className="max-w-screen-xl w-full  mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-5  gap-10">
        <div className="row-span-1 w-48 gap-4  sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image src={LogoVPN} className="object-contain" />
          <p className="mb-4">
            <strong className="font-medium">Revive and Thrive</strong> : Your Source for Affordable Refurbished Laptops!
          </p>
          <div className="flex flex-col invisible lg:visible gap-1 mt-16 ">
            <p className="text-gray-400 ">©{new Date().getFullYear()} - Remacify</p>
            <p className="text-gray-400 text-sm flex flex-row gap-2"><img src="   https://cdn-icons-png.flaticon.com/512/5968/5968965.png " className="w-4 opacity-50 object-contain" alt="shopify" /> powered by Shopify </p>
          </div>

        </div>
        <div className=" row-span-1 sm:col-span-2  sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Links</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Features{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Testimonials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Products{" "}
            </li>

          </ul>
        </div>
        <div className="row-span-1  sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Center</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Need Help ?{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Refund policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Shipping Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>

      </div>
      <div className="flex flex-col  visible lg:invisible w-screen lg:w-fit gap-1 mt-16">
        <p className="text-gray-400 ">©{new Date().getFullYear()} - Remacify</p>
        <p className="text-gray-400 text-sm flex flex-row gap-2"><img src="   https://cdn-icons-png.flaticon.com/512/5968/5968965.png " className="w-4 opacity-50 object-contain" alt="shopify" /> powered by Shopify </p>
      </div>
    </div>
  );
};

export default Footer;
