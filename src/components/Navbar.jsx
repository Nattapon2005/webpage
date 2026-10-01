import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.scss';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <nav>
            {/* Cart Modal */}
            <AnimatePresence>
                {isCartOpen && (
                    <motion.div 
                        className="nav-cart" 
                        id="nav-cart-price" 
                        style={{ display: 'flex' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div onClick={toggleCart} id="CloseCart_01" className="nav-cart-bg"></div>
                        <motion.div 
                            className="nav-cart-con nav-w"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="nav-cart-top">
                                <div className="nav-cart-your">
                                    <p>Your Cart</p>
                                </div>
                                <div onClick={toggleCart} id="CloseCart_02" className="nav-cart-close" style={{ cursor: 'pointer' }}>
                                    <svg width="16px" height="16px" viewBox="0 0 16 16">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g fillRule="nonzero" fill="#333333">
                                                <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 2.38388348 6.23223305 8"></polygon>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>

                    <div className="scroll">
                        {cartItems.length === 0 ? (
                            <div style={{ padding: '20px', textAlign: 'center' }}>
                                <p>Your cart is empty.</p>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div className="nav-cart-class-product" key={item.id}>
                                    <div className="nav-cart-class-product-con">
                                        <div className="nav-cart-class-product-img">
                                            <div className="nav-cart-class-product-img-con">
                                                <img src={item.image} alt={item.title} />
                                                <div className="nav-cart-class-product-img-litle">
                                                    <h2>{item.title}</h2>
                                                    <p>{item.price}</p>
                                                </div>
                                            </div>
                                            <div className="nav-cart-btn-price">
                                                <a href="#" onClick={(e) => {
                                                    e.preventDefault();
                                                    removeFromCart(item.id);
                                                }}>Remove</a>
                                            </div>
                                        </div>
                                        <div className="nav-cart-class-product-price">
                                            <input 
                                                type="number" 
                                                value={item.quantity} 
                                                min="1"
                                                onChange={(e) => updateQuantity(item.id, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="nav-cart-footer-button">
                        <div className="nav-cart-footer-button-con">
                            <div className="nav-cart-footer-button-con-in">
                                <div className="nav-cart-subtotal">
                                    <p>Subtotal</p>
                                </div>
                                <div className="nav-cart-total">
                                    <p>$ {cartTotal.toFixed(2)} USD</p>
                                </div>
                            </div>
                            <div className="nav-cart-total-price">
                                <a href="#">Continue to Checkout</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            )}
            </AnimatePresence>

            {/* Main Nav */}
            <div className="container">
                <div className="con-logo">
                    <div className="con-left">
                        <Link to="/">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="Logo" />
                        </Link>
                    </div>

                    <div className="menu">
                        {/* High-tech Mobile Menu Overlay */}
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div 
                                    className="mobile-menu-overlay"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mobile-menu-close" onClick={toggleMenu}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 6L6 18M6 6l12 12"></path>
                                        </svg>
                                    </div>
                                    <div className="mobile-menu-links">
                                        <Link onClick={toggleMenu} className="mobile-link" to="/">Home</Link>
                                        <Link onClick={toggleMenu} className="mobile-link" to="/about">About</Link>
                                        <Link onClick={toggleMenu} className="mobile-link" to="/shop">Shop</Link>
                                        <Link onClick={toggleMenu} className="mobile-link" to="/donate">Donate</Link>
                                        <Link onClick={toggleMenu} className="mobile-link" to="/contact">Contact</Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Desktop Menu */}
                        <div className="menu-top desktop-menu-only">
                            <div className="menu-con">
                                <Link className="info-con" to="/">Home</Link>
                            </div>
                            <div className="menu-con">
                                <Link className="info-con" to="/about">About</Link>
                            </div>
                            <div className="menu-con">
                                <Link className="info-con" to="/shop">Shop</Link>
                            </div>
                            <div className="menu-con">
                                <Link className="info-con" to="/donate">Donate</Link>
                            </div>
                            <div className="menu-con">
                                <Link className="info-con" to="/contact">Contact</Link>
                            </div>
                        </div>

                        <div onClick={toggleCart} id="OpenCartPrice" className="imgs" style={{ cursor: 'pointer' }}>
                            <p id="price">{cartCount}</p>
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg" alt="Cart" />
                        </div>

                        <div className="menu-icon-nav-open" onClick={toggleMenu}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 12h18M3 6h18M3 18h18"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
