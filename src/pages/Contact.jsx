import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const Contact = () => {
    return (
        <div>
            <Seo
                title="Contact Us"
                description="Contact Acme Outdoors in Oklahoma City. Send a message, get order support, or call our general inquiries line at (405) 555-5555."
                path="/contact"
            />
            <div className="Contact">
                <div className="container">
                    <div className="Contact-con">
                        {/* background / contact */}
                        <div className="Contact-img-left">
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Contact Acme Outdoors
                        </motion.h1>

                        <div className="Contact-items">
                            <motion.div
                                className="Contact-items-top"
                                initial={{ opacity: 0, y: 36 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="Contact-items-top-con">
                                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg" alt="" />
                                    <h2>Contact Us</h2>
                                    <p>
                                        Just want to say hi? We'd love to <br />
                                        hear from you. We love our <br />
                                        customers and community! 
                                    </p>
                                    <a href="#">Send Us A Message</a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="Contact-items-top"
                                initial={{ opacity: 0, y: 36 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6, delay: 0.12 }}
                            >
                                <div className="Contact-items-top-con">
                                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e850414db1f6ebfba8bc42d_chat-warning.svg" alt="" />
                                    <h2>Get Support</h2>
                                    <p>
                                        Have an issue with an order or with <br />
                                        a product you purchased from <br />
                                        us? Fill out our support form. 
                                    </p>
                                    <a href="#">Contact Support</a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-from">
                <div className="container">
                    <div className="contact-from-con">
                        <motion.div
                            className="Contact-up"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7 }}
                        >
                            <h1>Contact Us</h1>
                            <p className="contact-up-btn-top">
                                Acme Outdoors <br />
                                123 Rainy Street <br />
                                Oklahoma City, OK 73129
                            </p>
                            <div className="contact-up-btn-title">
                                <div className="contact-up-btn">
                                    <p style={{ fontWeight: 700, marginRight: '5px' }}>
                                        General Inquiries:
                                    </p>
                                    <p>
                                        (405) 555-5555
                                    </p>
                                </div>
                                <div className="contact-up-btn">
                                    <p style={{ fontWeight: 700, marginRight: '5px' }}>
                                        Customer Support:
                                    </p>
                                    <p>
                                        (405) 555-5556
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="Contact-form"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <form action="" method="post">
                                <h1>Contact Form</h1>
                                <p>Send us a message and we'll get back to you as soon as we can!</p>
                                <div className="Contact-form-input">
                                    <label>Name</label>
                                    <input type="text" required placeholder="Enter your name" />
                                </div>
                                <div className="Contact-form-input">
                                    <label>Email Address</label>
                                    <input type="email" required placeholder="Enter your Email address" />
                                </div>
                                <div className="Contact-form-input">
                                    <label>Your Message</label>
                                    <textarea className="Contact-form-input-message" rows="4" placeholder="Enter your message"></textarea>
                                </div>

                                <button type="submit">
                                    Submit
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
