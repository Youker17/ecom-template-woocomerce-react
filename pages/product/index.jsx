import Feature from "../../components/Feature";
import Pricing from "../../components/Pricing";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import hero from '../../public/assets/hero-product.jpg'
import Image from "next/image";
import { motion } from "framer-motion"
import { Link } from "react-scroll";
import ProductCard from "../../components/ProductCard";
import macbook from "../../public/assets/products/mcpro-16.jpeg";
import { products } from "../../utils/products";

export default function Home() {
    return (
        <>
            <SeoHead title='Remacify' />
            <Layout>

                <section class="w-full hidden lg:flex mx-auto bg-nordic-gray-light pt-12 md:pt-0 md:items-center bg-cover bg-right " >
                    <div className="relative">
                        <Image src={hero} className=" object-cover h-40 " height={3000} />
                        <div class="absolute top-0  h-[99%] w-full bg-gradient-to-r from-black-600/80 to-white-300/10 flex flex-col justify-center ">

                            <div class="flex flex-col w-full lg:w-1/2 z-20 gap-6 justify-center items-start  px-6 tracking-wide">
                                <h1 class="font-extrabold flex flex-row items-center text-orange-100  text-4xl my-4">Refurbished MacBook
                                    <sup>
                                        <svg class="w-2 h-2 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                                        </svg>
                                    </sup>
                                    Pro
                                </h1>
                                <p className="text-lg text-gray-100 mb-6">
                                    Discover the power and performance of our refurbished MacBook Pro.
                                    With top-notch specifications and a sleek design, this MacBook is
                                    perfect for both work and play.
                                </p>
                                <Link
                                    to="store"
                                    smooth
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}

                                >
                                    <motion.a whileHover={{ scale: 1.05 }} class="text-xl group gap-3 flex justify-around items-center no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black bg-orange-500 rounded-full py-3 px-5 text-orange-100 " href="#">Browse
                                        <svg class="w-4 h-4 group-hover:translate-y-1 transition-all duration-100 ease-in-out text-orange-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9" />
                                        </svg>
                                    </motion.a>
                                </Link>

                            </div>

                        </div>
                    </div>


                </section>


                <section id="store" className="bg-white mt-10 lg:mt-0 py-8">
                    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                        <nav id="store" className="w-full top-0 px-6 py-1">
                            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                                <a
                                    className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                                    href="/product"
                                >
                                    Store
                                </a>


                            </div>
                        </nav>
                        {
                            products.map((item, index) => (
                                <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col ">
                                    <a href={`/product/${item.id}`}>
                                        <img
                                            className="hover:grow transition ease-in-out duration-200 hover:shadow-2xl hover:shadow-orange-500/50 w-full h-60 object-cover rounded-2xl"
                                            src={"/assets/products/" + item.photos[0]}
                                        />
                                        <div className="pt-3 flex items-center justify-between">
                                            <p className="">{item.model}</p>
                                        </div>
                                        <p className="pt-1 text-gray-900">${item.price}</p>
                                    </a>
                                </div>
                            ))

                        }
                    </div>
                </section>
                <section className="bg-white py-8">
                    <div className="container py-8 px-6 mx-auto">
                        <a
                            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
                            href="#"
                        >
                            About
                        </a>

                        <p className="mb-5 indent-10">
                            At Remacify, we take pride in offering a remarkable selection of Refurbished MacBook Pro laptops, meticulously crafted to deliver exceptional performance and value. Our commitment to sustainability and excellence drives us to breathe new life into pre-owned laptops, transforming them into powerful machines that meet the highest standards.

                            Our Refurbishing Process:

                            Each Refurbished MacBook Pro undergoes a rigorous refurbishing process carried out by our team of skilled technicians. First, we meticulously inspect and assess the laptop's condition, ensuring that it meets our stringent quality criteria. Laptops that pass this initial evaluation proceed to the refurbishing stage.

                            During refurbishment, our technicians expertly upgrade key components to enhance performance, responsiveness, and reliability. We replace any faulty parts with high-quality components, allowing the MacBook to function like new. These upgrades are carefully tested to ensure optimal performance.

                            Quality Assurance:

                            At Remacify, we are committed to delivering premium products. Our Quality Assurance team performs thorough checks to verify that each Refurbished MacBook Pro meets our strict quality benchmarks. Only after passing these comprehensive tests does a laptop earn the Remacify seal of approval.

                            Eco-Friendly Approach:

                            Our dedication to environmental responsibility drives our decision to refurbish and repurpose existing laptops. By recycling and extending the life of these devices, we contribute to reducing electronic waste and conserving valuable resources. It's our small yet meaningful step towards a greener future.

                            Affordable Prices, Mass Availability:

                            One of the key advantages of our Refurbished MacBook Pro collection is its accessibility. By refurbishing laptops in mass quantities, we can offer premium-quality devices at a fraction of the cost of new ones. This enables us to make top-tier technology affordable for everyone, allowing you to experience the power of a MacBook without breaking the bank.
                        </p>
                    </div>
                </section>
            </Layout>
        </>
    );
}
