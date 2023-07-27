import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Robertson david",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/76/MacBook-Pro-13inch.jpg",
      city: "new york",
      country: "united states",
      rating: "4.5",
      testimoni:
        "I recently purchased a refurbished MacBook from Remacify, and I couldn't be happier with my purchase! The laptop is in excellent condition, and the price was unbeatable. I saved a lot of money without compromising on quality. Thank you, Remacify, for providing such great deals on refurbished MacBooks!",
    },
    {
      name: "iezh kimon",
      image: "https://techcrunch.com/wp-content/uploads/2020/11/2020-11-16-074520097.jpg",
      city: "ottawa",
      country: "canada",
      rating: "4.5",
      testimoni:
        "I was a bit hesitant about buying a refurbished MacBook, but after reading the positive reviews about Remacify, I decided to give it a try. I'm so glad I did! The MacBook I received looks and works like new. It's fast and reliable, and I got it at a fraction of the original cost. Highly recommend Remacify for anyone looking for affordable and reliable MacBooks",
    },
    {
      name: "Robert jeffery",
      image: "https://www.cnet.com/a/img/resize/24f4c6830f6c599b5f8835a227e640a11d270894/hub/2020/11/16/ad0bf9f3-d39f-44d3-b968-1cfd3e5ffe71/img-1732.jpg?auto=webp&fit=crop&height=675&width=1200",
      city: "california",
      country: "united states",
      rating: "4.5",
      testimoni:
        "I've been using the MacBook I purchased from Remacify for over a year now, and it's still going strong. The quality and performance are exceptional, and I can't believe the incredible value I got for the price. ",
    },
    {
      name: "ali nariman",
      image: "https://cdn.mos.cms.futurecdn.net/iYCQTPgBSdDmkYESfPkunh-320-80.jpg",
      city: "los angeles",
      country: "united states",
      rating: "4.5",
      testimoni:
        "I was skeptical about buying a refurbished MacBook, but after seeing the positive reviews for Remacify, I decided to take the plunge. I'm so glad I did! The MacBook I received was in pristine condition and works like a charm. It's evident that Remacify takes great care in refurbishing their products. I'm one happy customer and will definitely recommend them to my friends and family.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <img
                    src={listTestimonis.image}
                    className="object-cover h-14 w-14 rounded-full"
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
