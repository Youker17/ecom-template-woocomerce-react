
import { toast } from "react-toastify";
import { products } from "./products"

export const addToCart = (id) => {
    try {
        const product = products.find((product) => product.id === id);

        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

        const exist = cart.find((product) => product.id === id);

        if (exist) {
            return;
        }

        product.quantity = 1;

        localStorage.setItem("cart", JSON.stringify([...cart, product]))

        toast.error("added to cart",
            {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                icon: <svg class="w-6 h-6 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>,
                progressStyle: {
                    background: '#a83242',
                }
            })
    } catch (error) {
        toast.error("added to cart",
        {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
            icon: <svg class="w-6 h-6 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
            </svg>,
            progressStyle: {
                background: '#a83242',
            }
        })

    }
}



export const removeFromCart = (id) => {
    const cart = localStorage.getItem("cart");
    const newCart = JSON.parse(cart).filter((product) => product.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
}


export const increaseQuantity = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.map((product) => {
        if (product.id === id) {
            product.quantity += 1;
        }
        console.log(product.quantity, typeof product.quantity)
        return product;
    })
    localStorage.setItem("cart", JSON.stringify(newCart));
}


export const decreaseQuantity = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.map((product) => {
        if (product.id === id) {
            product.quantity > 0 ?
                product.quantity -= 1
                :
                product.quantity = 0;
            console.log(product.quantity, typeof product.quantity)
        }
        return product;
    })
    localStorage.setItem("cart", JSON.stringify(newCart));
}
