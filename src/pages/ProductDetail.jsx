import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const products = {
    'gift-card': {
        id: 'gift-card',
        title: 'Gift Card',
        price: '$ 25.00 USD',
        priceValue: 25.00,
        image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e861d123df4d175e80e8beb_acme-gift-card.jpg'
    },
    'tin-coffee-tumbler': {
        id: 'tin-coffee-tumbler',
        title: 'Tin Coffee Tumbler',
        price: '$ 35.00 USD',
        priceValue: 35.00,
        image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg'
    },
    'blue-canvas-pack': {
        id: 'blue-canvas-pack',
        title: 'Blue Canvas Pack',
        price: '$ 95.00 USD',
        priceValue: 95.00,
        image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg'
    },
    'green-canvas-pack': {
        id: 'green-canvas-pack',
        title: 'Green Canvas Pack',
        price: '$ 125.00 USD',
        priceValue: 125.00,
        image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542198347409e463f436b_jakob-owens-O_bhy3TnSYU-unsplash.jpg'
    },
    'white-tent': {
        id: 'white-tent',
        title: 'White Tent',
        price: '$ 200.00 USD',
        priceValue: 200.00,
        image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg'
    }
};

const ProductDetail = () => {
    const { id } = useParams();
    const product = products[id];
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    if (!product) {
        return <Navigate to="/shop" />;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        toast.success(`Added ${quantity} of ${product.title} to cart`, {
            icon: '🛒'
        });
    };

    return (
        <div>
            <div className="responding">
                <div className="container">
                    <div className="responding-con">
                        <motion.h1 
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {product.title}
                        </motion.h1>
                    </div>
                </div>
            </div>

            <div className="product-white-tent">
                <div className="container">
                    <div className="product-white-tent-con">
                        <motion.div 
                            className="product-white-tent-img"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={product.image} alt={product.title} />
                        </motion.div>

                        <div className="product-white-tent-data">
                            <motion.div 
                                className="product-data"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h1>{product.title}</h1>
                                <p>{product.price}</p>
                                <p>Quantity</p>
                                <div className="product-data-button">
                                    <input 
                                        className="product-data-numder" 
                                        type="number" 
                                        min="1" 
                                        value={quantity} 
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                    <motion.button 
                                        className="product-data-submit" 
                                        onClick={handleAddToCart}
                                        whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Add to cart
                                    </motion.button>
                                </div>
                            </motion.div>
                            
                            <div className="product-data-title">
                                <h1>What’s a Rich Text element?</h1>
                                <p>
                                    The rich text element allows you to create and format headings, paragraphs, <br />
                                    blockquotes, images, and video all in one place instead of having to add and format <br />
                                    them individually. Just double-click and easily create content.
                                </p>
                                <h3>Static and dynamic content editing</h3>
                                <p>
                                    A rich text element can be used with static or dynamic content. For static content, <br />
                                    just drop it into any page and begin editing. For dynamic content, add a rich text <br />
                                    field to any collection and then connect a rich text element to that field in the <br />
                                    settings panel. Voila!
                                </p>
                                <h3>How to customize formatting for each rich text</h3>
                                <p>
                                    Headings, paragraphs, blockquotes, figures, images, and figure captions can all be <br />
                                    styled after a class is added to the rich text element using the "When inside of" <br />
                                    nested selector system.
                                </p>
                            </div>
                            
                            <div className="product-data-end">
                                <h4>Tweet about #AcmeOutdoors products</h4>
                                <div className="product-data-end-button">
                                    <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=You'll+love+the+${encodeURIComponent(product.title)}+from+Acme+Outdoors!&url=http://acmeoutdoors.com`}>
                                        <i></i>
                                        <span>Post</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
