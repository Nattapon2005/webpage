import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="Contact">
                <div className="container">
                    <div className="Contact-con">
                        {/* background / contact */}
                        <div className="Contact-img-left">
                        </div>

                        <h1>Contact Acme Outdoors</h1>

                        <div className="Contact-items">
                            <div className="Contact-items-top">
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
                            </div>

                            <div className="Contact-items-top">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-from">
                <div className="container">
                    <div className="contact-from-con">
                        <div className="Contact-up">
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
                        </div>

                        <div className="Contact-form">
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
                                    <input className="Contact-form-input-message" type="text" placeholder="Enter your message" />
                                </div>

                                <button type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
