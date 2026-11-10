import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../components/Seo';

const products = [
    {
        id: 'gift-card',
        title: 'Gift Card',
        price: '$ 25.00 USD',
        priceValue: 25.00,
        category: 'Gift Cards',
        image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e861d123df4d175e80e8beb_acme-gift-card.jpg'
    },
    {
        id: 'tin-coffee-tumbler',
        title: 'Tin Coffee Tumbler',
        price: '$ 35.00 USD',
        priceValue: 35.00,
        category: 'Accessories',
        image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg'
    },
    {
        id: 'blue-canvas-pack',
        title: 'Blue Canvas Pack',
        price: '$ 95.00 USD',
        priceValue: 95.00,
        category: 'Packs',
        sale: true,
        image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg'
    },
    {
        id: 'green-canvas-pack',
        title: 'Green Canvas Pack',
        price: '$ 125.00 USD',
        priceValue: 125.00,
        category: 'Packs',
        image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542198347409e463f436b_jakob-owens-O_bhy3TnSYU-unsplash.jpg'
    },
    {
        id: 'white-tent',
        title: 'White Tent',
        price: '$ 200.00 USD',
        priceValue: 200.00,
        category: 'Tents',
        featured: true,
        image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg'
    }
];

const categories = ['All', 'Gift Cards', 'Tents', 'Accessories', 'Packs'];

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') return products;
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div>
            <Seo
                title="Shop Outdoor Gear — Acme Outdoors"
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

            {/* Featured Item */}
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

            {/* Shop by Category */}
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
                                {categories.map(cat => (
                                    <a
                                        key={cat}
                                        href={`#${cat}`}
                                        className={selectedCategory === cat ? 'active' : ''}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedCategory(cat);
                                        }}
                                        style={selectedCategory === cat ? {
                                            backgroundColor: '#eb5757',
                                            color: '#fff',
                                            boxShadow: '0 4px 14px rgba(235, 87, 87, 0.4)',
                                            fontWeight: 600,
                                            transform: 'translateX(6px)'
                                        } : {}}
                                    >
                                        {cat}
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        <div className="shop-by-category-right">
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((item) => (
                                    <motion.div 
                                        key={item.id}
                                        layout
                                        className="shop-by-category-info"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        whileHover={{ y: -6, boxShadow: "0 22px 48px rgba(10,10,18,0.12)" }}
                                        transition={{ type: "tween", duration: 0.25 }}
                                    >
                                        <div className="shop-by-category-info-top">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        {item.sale && (
                                            <div className="shop-by-sale">
                                                <p>SALE</p>
                                            </div>
                                        )}
                                        <div className="shop-by-category-title">
                                            <div className="shop-by-category-title-info">
                                                <p>{item.title}</p>
                                                <p>{item.price}</p>
                                                <div className="shop-by-category-btn">
                                                    <Link to={`/product/${item.id}`}>Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
