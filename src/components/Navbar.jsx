import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();
    const { 
        cartItems, 
        removeFromCart, 
        updateQuantity, 
        increaseQuantity, 
        decreaseQuantity, 
        cartTotal, 
        cartCount 
    } = useCart();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const prevPathRef = useRef(location.pathname);

    useEffect(() => {
        if (prevPathRef.current !== location.pathname) {
            prevPathRef.current = location.pathname;
            setIsMenuOpen(false);
            setIsCartOpen(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return undefined;

        const handlePointerMove = (event) => {
            const rect = nav.getBoundingClientRect();
            nav.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
            nav.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
        };

        nav.addEventListener('pointermove', handlePointerMove, { passive: true });

        return () => nav.removeEventListener('pointermove', handlePointerMove);
    }, []);

    useEffect(() => {
        const shouldLock = isMenuOpen || isCartOpen;
        document.body.style.overflow = shouldLock ? 'hidden' : '';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                setIsCartOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen, isCartOpen]);

    return (
        <>
            <nav ref={navRef} className={isScrolled ? 'is-scrolled' : undefined}>
                {/* Main Nav */}
                <div className="container">
                    <div className="con-logo">
                        <div className="con-left">
                            <Link to="/">
                                <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="Logo" />
                            </Link>
                        </div>

                        <div className="menu">
                            {/* Desktop Menu */}
                            <div className="menu-top desktop-menu-only">
                                <div className="menu-con">
                                    <NavLink 
                                        className={({ isActive }) => `info-con ${isActive ? 'active' : ''}`} 
                                        to="/" 
                                        end
                                    >
                                        Home
                                    </NavLink>
                                </div>
                                <div className="menu-con">
                                    <NavLink 
                                        className={({ isActive }) => `info-con ${isActive ? 'active' : ''}`} 
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </div>
                                <div className="menu-con">
                                    <NavLink 
                                        className={({ isActive }) => `info-con ${isActive ? 'active' : ''}`} 
                                        to="/shop"
                                    >
                                        Shop
                                    </NavLink>
                                </div>
                                <div className="menu-con">
                                    <NavLink 
                                        className={({ isActive }) => `info-con ${isActive ? 'active' : ''}`} 
                                        to="/donate"
                                    >
                                        Donate
                                    </NavLink>
                                </div>
                                <div className="menu-con">
                                    <NavLink 
                                        className={({ isActive }) => `info-con ${isActive ? 'active' : ''}`} 
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </div>
                            </div>

                            <div onClick={toggleCart} id="OpenCartPrice" className="imgs" style={{ cursor: 'pointer' }} role="button" tabIndex={0} aria-label={`Open cart, ${cartCount} items`} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleCart(); }}>
                                <motion.p 
                                    id="price"
                                    key={cartCount}
                                    initial={{ scale: 1.35 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    {cartCount}
                                </motion.p>
                                <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg" alt="Cart" />
                            </div>

                            <div className="menu-icon-nav-open" onClick={toggleMenu} role="button" tabIndex={0} aria-label="Open navigation menu" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(); }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 12h18M3 6h18M3 18h18"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Cart Backdrop - sits behind navbar (z-index 9990 < 9999) so navbar stays visible */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {isCartOpen && (
                        <motion.div 
                            key="cart-backdrop"
                            id="CloseCart_01" 
                            className="nav-cart-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={toggleCart}
                        />
                    )}
                </AnimatePresence>,
                document.body
            )}

            {/* Cart Drawer - sits above navbar (z-index 100000 > 9999) on the right side */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {isCartOpen && (
                        <motion.div 
                            key="cart-drawer"
                            className="nav-cart-con nav-w"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="nav-cart-top">
                                <div className="nav-cart-your">
                                    <p>Your Cart ({cartCount})</p>
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
                                    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🎒</div>
                                        <p style={{ color: '#555', fontSize: '1.05rem', margin: '0 0 16px', fontWeight: 500 }}>Your cart is empty.</p>
                                        <Link 
                                            to="/shop" 
                                            onClick={toggleCart}
                                            style={{
                                                display: 'inline-block',
                                                padding: '10px 22px',
                                                background: '#eb5757',
                                                color: '#fff',
                                                borderRadius: '6px',
                                                fontWeight: 600,
                                                textDecoration: 'none',
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            Start Shopping
                                        </Link>
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
                                                            toast.success(`Removed ${item.title}`);
                                                        }}>Remove</a>
                                                    </div>
                                                </div>
                                                <div className="nav-cart-class-product-price">
                                                    <div className="cart-qty-wrapper">
                                                        <button 
                                                            type="button" 
                                                            className="cart-qty-step"
                                                            onClick={() => decreaseQuantity(item.id)}
                                                            aria-label="Decrease quantity"
                                                        >
                                                            −
                                                        </button>
                                                        <input 
                                                            type="number" 
                                                            value={item.quantity} 
                                                            min="1"
                                                            onChange={(e) => updateQuantity(item.id, e.target.value)}
                                                        />
                                                        <button 
                                                            type="button" 
                                                            className="cart-qty-step"
                                                            onClick={() => increaseQuantity(item.id)}
                                                            aria-label="Increase quantity"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
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
                                        {cartItems.length > 0 ? (
                                            <Link to="/checkout" onClick={toggleCart}>Continue to Checkout</Link>
                                        ) : (
                                            <span style={{ opacity: 0.6, cursor: 'not-allowed', display: 'block', padding: '10px 0', color: '#fff', fontWeight: 600 }}>Cart is empty</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}

            {/* High-tech Mobile Menu Overlay rendered into document.body */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="mobile-menu-overlay"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mobile-menu-close" onClick={toggleMenu} role="button" tabIndex={0} aria-label="Close navigation menu" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(); }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </div>
                            <div className="mobile-menu-links">
                                <NavLink onClick={toggleMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} to="/" end>Home</NavLink>
                                <NavLink onClick={toggleMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} to="/about">About</NavLink>
                                <NavLink onClick={toggleMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} to="/shop">Shop</NavLink>
                                <NavLink onClick={toggleMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} to="/donate">Donate</NavLink>
                                <NavLink onClick={toggleMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} to="/contact">Contact</NavLink>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default Navbar;
