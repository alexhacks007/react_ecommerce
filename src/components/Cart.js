// src/components/Cart.js
import './Cart.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../auth/Authenticate';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState([]);
    const [cartprice, setCartprice] = useState("--");

    useEffect(() => {
        if (user) {
            const fetchCart = async () => {
                try {
                    const response = await axios.get(`https://dummyjson.com/carts/${user.id}`);
                    setCartItems(response.data.products || []);
                    setCartprice(response.data)
                    console.log(response.data)
                } catch (error) {
                    toast.error('Failed to fetch cart items');
                    console.log("failed t0 fetch")
                }
            };
            fetchCart();
        }
    }, [user]);
    console.log(cartItems)
    console.log(user)

    return (
        <>
            <ToastContainer />
            <div className="cart-container">
            <div><h2>Your shopping cart</h2></div>
            <div className='cart-cover'>
            <div className='cart-items'>
                {cartItems.length === 0 ? (
                    <div className='emptycart'>
                        <div className='emptyicon'> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
  <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>         </div>               <p>Your cart is empty</p>
                    </div>
                   
                ) : (
                    <ul>
                        <div className='cart-item-title'>
                            <p>Product</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Total price</p>
                        </div>
                        {cartItems.map(item => (
                            <li key={item.id} className='cart-item'>
                                <div className='cart-image'>
                                    <img src={item.thumbnail} alt='loading'></img>
                                    <div>
                                    <p>{item.title}</p>
                                    </div>
                                    
                                </div>
                                <div className='cart-price'> <p>${item.price}</p></div>
                                <div className='cart-quantity'> <p>{item.quantity}</p></div>
                                <div className='cart-total'><p>${item.total}</p></div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className='cart-pay'>
                <div className='cart-pay-items'>
                <div className='couponbox'>
                    <p>Coupon Code</p>
                    <p>If you have any coupon code please enter below and get extra offer !</p>
                    <input typeof='text' name='text' placeholder='Coupon code' className='coupon'></input>
                    <button typeof='apply' className='applybutton'>Apply</button>
                </div>
                <div className='cart-bill'>
                    <p><p>Cart Subtotal</p> <p>{cartprice.discountedTotal}</p></p>
                    <p><p>Total products</p> <p>{cartprice.totalProducts}</p></p>
                    <p><p>Total Quantity</p> <p>{cartprice.totalQuantity}</p></p>
                    <p><p>Delivery</p> <p>Free</p></p>
                    <p><p>Total</p> <p>{cartprice.total}</p></p>
                    <button typeof='apply'>Place Order</button>
                </div>
                </div>
                <div>

                </div>
            </div>
            
            </div>  
            </div>
        </>
    );
};

export default Cart;
