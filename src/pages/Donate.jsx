import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import Seo from '../components/Seo';

const donateAmounts = [
    { amount: 100, note: 'Keeps the team afloat' },
    { amount: 50, note: 'Supports our staff' },
    { amount: 25, note: 'Helps with operations' },
    { amount: 15, note: 'A little goes a long way' },
    { amount: 5, note: 'Every dollar counts' },
];

const Donate = () => {
    const { addToCart } = useCart();
    const [customAmount, setCustomAmount] = useState('');

    const handleDonate = (amount) => {
        const num = parseFloat(amount);
        if (isNaN(num) || num <= 0) {
            toast.error('Please enter a valid donation amount');
            return;
        }

        addToCart({
            id: `donation-${num}`,
            title: `Donation ($${num.toFixed(2)})`,
            price: `$ ${num.toFixed(2)} USD`,
            priceValue: num,
            image: 'https://assets.website-files.com/5e853c3383474026e43f2c78/5e861d123df4d175e80e8beb_acme-gift-card.jpg'
        }, 1);

        toast.success(`Thank you! Added $${num.toFixed(2)} donation to your cart ❤️`, {
            icon: '🤝',
            duration: 4000
        });
    };

    return (
        <div>
            <Seo
                title="Donate"
                description="Every dollar counts. Support the Acme Outdoors team and community in Oklahoma City during these uncertain times."
                path="/donate"
            />
            <div className="donate">
                <div className="container">
                    <motion.div
                        className="donate-con"
                        initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="donate-con-info">
                            <h1>Here at Acme Outdoors</h1>
                            <h2>every dollar counts</h2>
                            <p>
                                Acme Outdoors is more than just a company, we're a community of people who care for one
                                another and for our city. During this time, due to shelter in place orders, only a select few of our
                                staff are able to work. Any donations you make to Acme will help make sure our employees are
                                cared for and can stay safe in these uncertain times.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="donate-menu">
                <div className="container">
                    <div className="donate-menu-con">
                        <motion.div
                            className="donate-menu-choice"
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7 }}
                        >
                            {donateAmounts.map((item, index) => (
                                <motion.a
                                    key={item.amount}
                                    href={`#donate-${item.amount}`}
                                    title={item.note}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.08 * index }}
                                    whileHover={{ scale: 1.02, backgroundColor: '#d64747' }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleDonate(item.amount);
                                    }}
                                >
                                    Donate ${item.amount}
                                </motion.a>
                            ))}

                            {/* Custom Donation Option placed cleanly inside the card */}
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                gap: '10px',
                                marginBottom: '20px'
                            }}>
                                <div style={{ position: 'relative', flex: 1 }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#777',
                                        fontWeight: 700,
                                        fontSize: '18px'
                                    }}>
                                        $
                                    </span>
                                    <input 
                                        type="number" 
                                        min="1"
                                        placeholder="Custom amount"
                                        value={customAmount}
                                        onChange={(e) => setCustomAmount(e.target.value)}
                                        style={{
                                            width: '100%',
                                            height: '70px',
                                            paddingLeft: '34px',
                                            paddingRight: '14px',
                                            border: '2px solid #ddd',
                                            borderRadius: '5px',
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            color: '#111',
                                            background: '#f9f9f9',
                                            boxSizing: 'border-box',
                                            outline: 'none'
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                if (customAmount) {
                                                    handleDonate(customAmount);
                                                    setCustomAmount('');
                                                }
                                            }
                                        }}
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (!customAmount) return;
                                        handleDonate(customAmount);
                                        setCustomAmount('');
                                    }}
                                    style={{
                                        height: '70px',
                                        padding: '0 28px',
                                        background: '#222',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontWeight: 700,
                                        fontSize: '18px',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = '#eb5757'}
                                    onMouseOut={(e) => e.currentTarget.style.background = '#222'}
                                >
                                    Donate
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
