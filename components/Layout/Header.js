import React, { useState, useEffect } from "react";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import Link from "next/link";
import LogoVPN from "../../public/assets/Logo3.png";
import pc from "../../public/assets/pc.png";
import Image from "next/image";
import Cart from "../Cart";
import { useRouter } from "next/router";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 w-28 col-end-2 flex items-center">
            <Image src={LogoVPN} className="object-contain" />
          </div>
          {
            router.pathname === '/' ?
              <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
                <LinkScroll
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("about");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "about"
                      ? " text-orange-500 animation-active "
                      : " text-black-500 hover:text-orange-500 a")
                  }
                >
                  About
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="feature"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("feature");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "feature"
                      ? " text-orange-500 animation-active "
                      : " text-black-500 hover:text-orange-500 ")
                  }
                >
                  Feature
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("pricing");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "pricing"
                      ? " text-orange-500 animation-active "
                      : " text-black-500 hover:text-orange-500 ")
                  }
                >
                  Best Selling
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="testimoni"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("testimoni");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "testimoni"
                      ? " text-orange-500 animation-active "
                      : " text-black-500 hover:text-orange-500 ")
                  }
                >
                  Testimonial
                </LinkScroll>
                <Link className="cursor-pointer" href="/product">
                  <div className="flex flex-row items-center ml-4 bg-orange-100 text-orange-500 cursor-pointer rounded-full p-3 gap-3 justify-center">
                    <svg class="w-4 h-4 text-orange-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 9V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7h20ZM0 11v2a2 2 0 0 0 2 2h7v3H6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-3h7a2 2 0 0 0 2-2v-2H0Z" />
                    </svg>
                    Products
                  </div>
                </Link>
                <div className="flex mx-auto">
                  <Link className="cursor-pointer" href="/cart">
                    <svg class="w-6 h-6 text-orange-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                  </Link>
                </div>
              </ul>
              :

              <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
                <Link

                  href="/#about"

                  className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative"

                >
                  <p className=" cursor-pointer mx-4">About</p>
                </Link>
                <Link

                  href="/#feature"

                  className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative"

                >
                  <p className=" cursor-pointer mx-4">Feature</p>
                </Link>
                <Link

                  href="/#pricing"

                  className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative"

                >
                  <p className=" cursor-pointer mx-4">Best Selling</p>
                </Link>
                <Link

                  href="/#testimoni"

                  className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative"

                >
                  <p className=" cursor-pointer mx-4">Testimonial</p>
                </Link>
                <Link className="cursor-pointer" href="/product">
                  <div className="flex flex-row items-center ml-4 bg-orange-100 text-orange-500 cursor-pointer rounded-full p-3 gap-3 justify-center">
                    <svg class="w-4 h-4 text-orange-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 9V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7h20ZM0 11v2a2 2 0 0 0 2 2h7v3H6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-3h7a2 2 0 0 0 2-2v-2H0Z" />
                    </svg>
                    Products
                  </div>
                </Link>
                <div className="flex mx-auto">
                  <Link className="cursor-pointer" href="/cart">
                    <svg class="w-6 h-6 text-orange-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                  </Link>
                </div>
              </ul>

          }
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          {
            router.pathname === '/' ?
              <ul className="flex w-full justify-between items-center text-black-500">
                <LinkScroll
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("about");
                  }}
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (activeLink === "about"
                      ? "  border-orange-500 text-orange-500"
                      : " border-transparent")
                  }
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="feature"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("feature");
                  }}
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (activeLink === "feature"
                      ? "  border-orange-500 text-orange-500"
                      : " border-transparent ")
                  }
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("pricing");
                  }}
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (activeLink === "pricing"
                      ? "  border-orange-500 text-orange-500"
                      : " border-transparent ")
                  }
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="testimoni"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("testimoni");
                  }}
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (activeLink === "testimoni"
                      ? "  border-orange-500 text-orange-500"
                      : " border-transparent ")
                  }
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  
                </LinkScroll>
                <Link className="cursor-pointer" href="/product">
                  <div className="flex flex-row items-center ml-4 bg-orange-100 text-orange-500 cursor-pointer rounded-full p-3 gap-3 justify-center">
                    <svg class="w-4 h-4 text-orange-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 9V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7h20ZM0 11v2a2 2 0 0 0 2 2h7v3H6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-3h7a2 2 0 0 0 2-2v-2H0Z" />
                    </svg>
                  </div>
                </Link>
                <Link href="/cart">
                  <svg class="w-6 h-6 text-orange-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                </Link>
              </ul>
              :
              <ul className="flex w-full justify-between items-center text-black-500">
                <Link
                  activeClass="active"
                  href="/#about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("about");
                  }}
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (activeLink === "about"
                      ? "  border-orange-500 text-orange-500"
                      : " border-transparent")
                  }
                >
                  <div>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    
                  </div>
                </Link>
                <Link
                  activeClass="active"
                  href="/#feature"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("feature");
                  }}
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (activeLink === "feature"
                      ? "  border-orange-500 text-orange-500"
                      : " border-transparent ")
                  }
                >
                  <div>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    
                  </div>
                </Link>
                <Link
                  activeClass="active"
                  href="/#pricing"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("pricing");
                  }}
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (activeLink === "pricing"
                      ? "  border-orange-500 text-orange-500"
                      : " border-transparent ")
                  }
                >
                  <div>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    
                  </div>
                </Link>
                <Link
                  activeClass="active"
                  href="/#testimoni"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("testimoni");
                  }}
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (activeLink === "testimoni"
                      ? "  border-orange-500 text-orange-500"
                      : " border-transparent ")
                  }
                >
                  <div>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    
                  </div>
                </Link>
                <Link className="cursor-pointer" href="/product">
                  <div className="flex flex-row items-center ml-4 bg-orange-100 text-orange-500 cursor-pointer rounded-full p-3 gap-3 justify-center">
                    <svg class="w-4 h-4 text-orange-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 9V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7h20ZM0 11v2a2 2 0 0 0 2 2h7v3H6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-3h7a2 2 0 0 0 2-2v-2H0Z" />
                    </svg>
                    
                  </div>
                </Link>
                <Link href="/cart">
                  <svg class="w-6 h-6 text-orange-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                </Link>
              </ul>


          }
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
