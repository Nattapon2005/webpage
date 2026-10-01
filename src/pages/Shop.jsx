import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Shop = () => {
    return (
        <div>
            <div className="shop-product">
                <div className="container">
                    <div className="shop-product-con">
                        <h1>Shop Our Products</h1>
                    </div>
                </div>
            </div>

            <div className="featured-item">
                <div className="container">
                    <div className="featured-item-con">
                        <motion.div 
                            className="featured-item-con-item"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="white-tent">
                                <h2>White Tent</h2>
                                <p>$ 200.00 USD</p>
                            </div>
                            <div className="featured-item-right">
                                <Link to="/product/white-tent">Featured Item</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="shop-by-category">
                <div className="container">
                    <div className="shop-by-category-con">
                        <div className="shop-by-category-left">
                            <h2>Shop by Category</h2>
                            <div className="shop-by-category-menu-item">
                                <a href="#">Gift Cards</a>
                                <a href="#">Tents</a>
                                <a href="#">Accessories</a>
                                <a href="#">Packs</a>
                            </div>
                        </div>

                        <div className="shop-by-category-right">
                            <motion.div 
                                className="shop-by-category-info"
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
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
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
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
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
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
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
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
