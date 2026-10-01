import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // Load initial cart state from local storage or set empty array
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('acme_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart state to local storage on change
    useEffect(() => {
        localStorage.setItem('acme_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + parseInt(quantity) }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: parseInt(quantity) }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
            )
        );
    };

    const cartTotal = cartItems.reduce((total, item) => total + (item.priceValue * item.quantity), 0);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
