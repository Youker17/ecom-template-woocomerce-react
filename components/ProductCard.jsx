
import { motion } from "framer-motion"
import Image from "next/image"
import ButtonOutline from "./misc/ButtonOutline."
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper"
import getScrollAnimation from "../utils/getScrollAnimation";
import macbook from "../public/assets/products/mcpro-16.jpeg"
import { useMemo } from "react";
import { addToCart } from "../utils/helpers";



export default function ProductCard({ title, rating = 4, price, features, image, id }) {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    console.log("rating", rating, rating >= 1, rating >= 2, rating >= 3, rating >= 4, rating >= 5)

    return (
        <ScrollAnimationWrapper className="flex justify-center">
            <motion.div
                variants={scrollAnimation}

                whileHover={{
                    scale: 1.01,
                    transition: {
                        duration: .2
                    }
                }}
            >
                <div className="w-full bg-white border-2 border-black border-gray-200 z-30 rounded-lg shadow ">
                    <a href="#" className="">
                        <Image
                            className="p-8 w-full rounded-t-lg"
                            src={"/assets/products"+image}
                            alt="product image"
                            width={300}
                            height={300}
                        />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl w-full text-start font-semibold tracking-tight text-gray-900 dark:text-white">
                                {title}
                            </h5>
                            <ul className="w-full pl-8 ">
                                {
                                    features.map((feature, index) => (
                                        <motion.li
                                            className="relative mb-2 circle-check custom-list text-gray-600 text-start text-sm"
                                            custom={{ duration: 2 + index }}
                                            variants={scrollAnimation}
                                            key={feature}
                                            >{feature}
                                        </motion.li>
                                    ))

                                }
                            </ul>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg
                                className={`w-4 h-4  mr-1  ${(rating) >= 1 ? "text-orange-500" : "text-gray-500"}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                className={`w-4 h-4  mr-1  ${(rating) >= 2 ? "text-orange-500" : "text-gray-500"}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                className={`w-4 h-4  mr-1  ${(rating) >= 3 ? "text-orange-500" : "text-gray-500"}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                className={`w-4 h-4  mr-1  ${(rating) >= 4 ? "text-orange-500" : "text-gray-500"}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                className={`w-4 h-4  mr-1  ${(rating) >= 5 ? "text-orange-500" : "text-gray-500"}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span className="bg-orange-100 text-orange-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">
                                {rating.toFixed(1)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                {price}$
                            </span>
                            <a

                                href=""
                                onClick={(e)=>{
                                    e.preventDefault();
                                    addToCart(id);
                                }}
                                className="text-orange-100 bg-orange-500 hover:bg-orange-100 hover:text-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>

            </motion.div>
        </ScrollAnimationWrapper>
    )

}