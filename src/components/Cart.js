// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../auth/Authenticate';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (user) {
            const fetchCart = async () => {
                try {
                    const response = await axios.get(`https://dummyjson.com/carts/user/${user.id}`);
                    setCartItems(response.data.products || []);
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
                <h1>Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <h3>{item.title}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Cart;
