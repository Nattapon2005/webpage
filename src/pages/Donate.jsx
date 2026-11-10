import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const donateAmounts = [
    { amount: 100, note: 'Keeps the team afloat' },
    { amount: 50, note: 'Supports our staff' },
    { amount: 25, note: 'Helps with operations' },
    { amount: 15, note: 'A little goes a long way' },
    { amount: 5, note: 'Every dollar counts' },
];

const Donate = () => {
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
                                    href="#"
                                    title={item.note}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.08 * index }}
                                    whileHover={{ scale: 1.015 }}
                                    whileTap={{ scale: 0.985 }}
                                >
                                    Donate ${item.amount}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
