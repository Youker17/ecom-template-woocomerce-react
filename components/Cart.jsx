import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../utils/helpers";


export default function Cart() {
    let [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const refreshCart = () => {
        let items = JSON.parse(localStorage.getItem("cart"))
        setItems(items)

        setTotal(items.reduce((acc, item) => acc + (item.price * item.quantity), 0))
    }



    useEffect(() => {
        // localStorage.setItem("cartItems",JSON.stringify(["dsf"]))
        localStorage.getItem("cart") ? setItems(JSON.parse(localStorage.getItem("cart"))) : setItems([])
        let items = JSON.parse(localStorage.getItem("cart")) || []
        setTotal(items.reduce((acc, item) => acc + (item.price * item.quantity), 0))
        setLoading(false);
    }, [])


    return (
        <Layout>
            <div className="h-fit mt-10 bg-gray-50 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

                    {
                        loading ? <div className="flex justify-center items-center">Loading...</div>
                            :
                            items.length === 0 ? <div className="flex justify-center items-center gap-5 text-gray-600">No items in cart<svg class="w-10 h-10 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z" />
                            </svg></div>
                                :
                                <>
                                    <div className="rounded-lg md:w-2/3">
                                        {items.map((item, index) => <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                            <img
                                                src={"/assets/products/" + item.photos[0]}
                                                alt="product-image"
                                                className="w-full rounded-lg sm:w-40"
                                            />
                                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                                <div className="mt-5 sm:mt-0">
                                                    <h2 className="text-lg font-bold text-gray-900">
                                                        {item.model}
                                                    </h2>
                                                </div>
                                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                    <div className="flex items-center border-gray-100">
                                                        <span onClick={() => { decreaseQuantity(item.id); refreshCart() }} className="cursor-pointer rounded-l bg-orange-100 text-orange-500 py-1 px-3.5 duration-100 hover:bg-orange-500 hover:text-orange-100">
                                                            {" "}
                                                            -{" "}
                                                        </span>
                                                        <input
                                                            className="h-8 w-10 pl-2 border bg-white text-center text-xs outline-none"
                                                            type="number"
                                                            value={item.quantity}
                                                            disabled
                                                        />
                                                        <span onClick={() => { increaseQuantity(item.id); refreshCart() }} className="cursor-pointer rounded-r bg-orange-100 text-orange-500 py-1 px-3.5 duration-100 hover:bg-orange-500 hover:text-orange-100">
                                                            {" "}
                                                            +{" "}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-4">
                                                        <p className="text-sm">${item.price}</p>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            onClick={() => { removeFromCart(item.id); refreshCart() }}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)}
                                    </div>
                                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                                        <div className="mb-2 flex justify-between">
                                            <p className="text-gray-700">Subtotal</p>
                                            <p className="text-gray-700">${total.toFixed(2)}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-gray-700">Shipping</p>
                                            <p className="text-gray-700">FREE</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="flex justify-between">
                                            <p className="text-lg font-bold">Total</p>
                                            <div className="">
                                                <p className="mb-1 text-lg font-bold">${total.toFixed(2)} USD</p>
                                            </div>
                                        </div>
                                        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                                            Check out
                                        </button>
                                    </div>
                                </>
                    }



                </div>
            </div>

        </Layout>
    );
}