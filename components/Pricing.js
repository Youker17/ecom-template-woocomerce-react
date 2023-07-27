import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ProductCard from "./ProductCard";
import macbook from "../public/assets/products/mcpro-16.jpeg"
import { products } from "../utils/products";
import { toast } from "react-toastify";


const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  useEffect(() => {
    toast.success("Welcome to Remacify",{
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
      icon: '👏',
      progressStyle: {
        background: '#a83242',
      }

    })
  }, [])


  return (
    <div
      className="bg-gradient-to-b from-white-300  to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl   px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              This Mounth's <strong>Best Selling</strong>
            </motion.h3>
            
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="flex flex-col lg:flex-row  gap-4 justify-center">

          {
            products.map((product, index) => index < 3 ?(
              <ProductCard
              
                title={product.model}
                price={product.price}
                rating={5}
                id={product.id}
                image={product.photos[0]}
                features={product.features}
                key={index}
              />
            ):null)
          }


          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              We Also Ship All Around The Globe{" "}
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}> 
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are some of the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
