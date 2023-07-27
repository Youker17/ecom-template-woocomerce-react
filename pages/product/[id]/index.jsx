import { useRouter } from "next/router";
import Layout from "../../../components/Layout/Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { motion } from "framer-motion"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
import { products } from "../../../utils/products";
import { addToCart } from "../../../utils/helpers";




export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})




    useEffect(() => {
        console.log("id", id)
        if (id) {
            setProduct(products.find(product => product.id === id))
            setLoading(false)
        }
    }, [id])


    return (
        <Layout>
            {
                loading ? <div className="w-screen h-screen flex justify-center items-center">
                    <div role="status">
                        <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div> :
                    <div className="container border-2 border-gray-100 shadow-2xl shadow-gray-400 rounded-2xl overflow-hidden my-40 mx-auto flex lg:flex-row flex-col justify-between ">

                        <Swiper

                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={true}
                            pagination={{ clickable: true }}
                            className="lg:w-[45%] lg:h-full lg:object-cover my-auto flex justify-center items-center aspect-square w-full"
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                        >
                            {product.photos.map((photo, index) => (
                                <SwiperSlide className="" key={index}>
                                    <img src={"/assets/products/" + photo} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="lg:w-[55%] w-full flex flex-col justify-between p-4">
                            <h1 className="text-4xl font-bold">{product.model}</h1>
                            <h2 className="text-2xl font-semibold flex flex-row justify-between">${product.price} <span className="flex flex-row text-orange-500 bg-orange-100 rounded-full justify-between items-center p-2 text-sm gap-2">FREE Shipping<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="M19.9 6.58c0-.009 0-.019-.006-.027l-2-4A1 1 0 0 0 17 2h-4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.3c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0A3.173 3.173 0 0 0 7.7 12h4.6c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0 3.177 3.177 0 0 0-.049-.5h.3a1 1 0 0 0 1-1V7a.99.99 0 0 0-.1-.42ZM16.382 4l1 2H13V4h3.382ZM4.5 13.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm11 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                            </svg></span></h2>
                            <p className="text-lg font-light">{product.description}</p>
                            <ul className="w-full pl-8 py-2">
                                {
                                    product.features.map((feature, index) => (
                                        <li
                                            className="relative mb-2 circle-check custom-list text-gray-600 text-start text-sm"

                                            key={index}
                                        >{feature}
                                        </li>
                                    ))

                                }
                            </ul>
                            <div className="flex flex-col lg:flex-row gap-2 justify-between">
                                <button onClick={()=>addToCart(product.id)} className="bg-orange-500 text-orange-100 px-4 py-2 flex flex-row gap-3 justify-center items-center rounded-full hover:scale-105 transition-all group duration-200 ease-in-out hover:shadow-2xl hover:shadow-orange-500">Add to cart
                                    <div className="group-hover:transition-all group-hover:rotate-180">
                                        <svg class="w-4 h-4 group-hover:transition-all group-hover:rotate-180 duration-200 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 21">
                                            <path d="M15 14H7.78l-.5-2H16a1 1 0 0 0 .962-.726l.473-1.655A2.968 2.968 0 0 1 16 10a3 3 0 0 1-3-3 3 3 0 0 1-3-3 2.97 2.97 0 0 1 .184-1H4.77L4.175.745A1 1 0 0 0 3.208 0H1a1 1 0 0 0 0 2h1.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 10 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3Zm-8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                            <path d="M19 3h-2V1a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V5h2a1 1 0 1 0 0-2Z" />
                                        </svg>
                                    </div>
                                </button>
                                <h2 className="flex flex-row gap-2 items-center text-green-400 text-xs"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/>
  </svg>All Our Products Are Well Tested Come With 4 Years Warranty !</h2>
                            </div>
                        </div>
                    </div>
            }
        </Layout>
    );
}