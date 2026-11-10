import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const Shop = () => {
    return (
        <div>
            <Seo
                title="Shop Outdoor Gear"
                description="Shop tents, packs, tumblers and gift cards from Acme Outdoors. Open 24/7/365 with lifetime warranty and on-time delivery."
                path="/shop"
            />
            <div className="shop-product">
                <div className="container">
                    <motion.div
                        className="shop-product-con"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1>Shop Our Products</h1>
                    </motion.div>
                </div>
            </div>

            <div className="featured-item">
                <div className="container">
                    <motion.div
                        className="featured-item-con"
                        initial={{ opacity: 0, y: 34 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <motion.div 
                            className="featured-item-con-item"
                            whileHover={{ scale: 1.015, y: -3 }}
                            transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        >
                            <div className="white-tent">
                                <h2>White Tent</h2>
                                <p>$ 200.00 USD</p>
                            </div>
                            <div className="featured-item-right">
                                <Link to="/product/white-tent">Featured Item</Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="shop-by-category">
                <div className="container">
                    <div className="shop-by-category-con">
                        <motion.div
                            className="shop-by-category-left"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Shop by Category</h2>
                            <div className="shop-by-category-menu-item">
                                <a href="#">Gift Cards</a>
                                <a href="#">Tents</a>
                                <a href="#">Accessories</a>
                                <a href="#">Packs</a>
                            </div>
                        </motion.div>

                        <div className="shop-by-category-right">
                            <motion.div 
                                className="shop-by-category-info"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                whileHover={{ y: -6, boxShadow: "0 22px 48px rgba(10,10,18,0.12)" }}
                                transition={{ type: "tween", duration: 0.2 }}
                            >
                                <div className="shop-by-category-info-top">
                                    <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e861d123df4d175e80e8beb_acme-gift-card.jpg" alt="" />
                                </div>
                                <div className="shop-by-category-title">
                                    <div className="shop-by-category-title-info">
                                        <p>Gift Card</p>
                                        <p>$ 25.00 USD</p>
                                        <div className="shop-by-category-btn">
                                            <Link to="/product/gift-card">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
            
                            <motion.div 
                                className="shop-by-category-info"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                whileHover={{ y: -6, boxShadow: "0 22px 48px rgba(10,10,18,0.12)" }}
                                transition={{ type: "tween", duration: 0.2 }}
                            >
                                <div className="shop-by-category-info-top">
                                    <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg" alt="" />
                                </div>
                                <div className="shop-by-category-title">
                                    <div className="shop-by-category-title-info">
                                        <p>Tin Coffee Tumbler</p>
                                        <p>$ 35.00 USD</p>
                                        <div className="shop-by-category-btn">
                                            <Link to="/product/tin-coffee-tumbler">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
            
                            <motion.div 
                                className="shop-by-category-info"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                whileHover={{ y: -6, boxShadow: "0 22px 48px rgba(10,10,18,0.12)" }}
                                transition={{ type: "tween", duration: 0.2 }}
                            >
                                <div className="shop-by-category-info-top">
                                    <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg" alt="" />
                                </div>
                                <div className="shop-by-sale">
                                    <p>SALE</p>
                                </div>
                                <div className="shop-by-category-title">
                                    <div className="shop-by-category-title-info">
                                        <p>Blue Canvas Pack</p>
                                        <p>$ 95.00 USD</p>
                                        <div className="shop-by-category-btn">
                                            <Link to="/product/blue-canvas-pack">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="shop-by-category-info"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                whileHover={{ y: -6, boxShadow: "0 22px 48px rgba(10,10,18,0.12)" }}
                                transition={{ type: "tween", duration: 0.2 }}
                            >
                                <div className="shop-by-category-info-top">
                                    <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542198347409e463f436b_jakob-owens-O_bhy3TnSYU-unsplash.jpg" alt="" />
                                </div>
                                <div className="shop-by-category-title">
                                    <div className="shop-by-category-title-info">
                                        <p>Green Canvas Pack</p>
                                        <p>$ 125.00 USD</p>
                                        <div className="shop-by-category-btn">
                                            <Link to="/product/green-canvas-pack">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
