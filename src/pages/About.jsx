import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <header className="Awaits">
                <div className="container">
                    <div className="Awaits-con">
                        <h4>
                            Your Adventure <br />
                            Awaits
                        </h4>
                        <div className="Awaits-title">
                            <p>
                                Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete.
                            </p>
                        </div>
                        <div className="Serving-shop">
                            <Link className="Shop-Merch" to="/shop">Shop Merch</Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="OUTDOORS">
                <div className="container">
                    <div className="OUTDOORS-con">
                        <div className="OUTDOORS-con-top">
                            <p>WHY ACME OUTDOORS?</p>
                            <h1>We’re the best in the business.</h1>
                            <div className="OUTDOORS-title">
                                <p>
                                    From more than 30 years, we’ve been leading the way across Oklahoma — creating the best possible customer experience since 1989.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="outdoors-con-info">
                        <div className="outdoors-items">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84b9ccd071025d67c7e431_verified.svg" alt="" />
                            <h1>Lifetime Warranty</h1>
                            <div className="outdoors-title-button">
                                <p>
                                    All our products — whether we make them or not — are backed by our lifetime warranty.
                                </p>
                            </div>
                        </div>

                        <div className="outdoors-items">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba18359d4c7fc8ba04d2_cart.svg" alt="" />
                            <h1>Shopping Experience</h1>
                            <div className="outdoors-title-button">
                                <p>
                                    All our products — whether we make them or not — are backed by our lifetime warranty.
                                </p>
                            </div>
                        </div>

                        <div className="outdoors-items">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba26d07102b2bcc7e4fb_transport.svg" alt="" />
                            <h1>On-time Delivery</h1>
                            <div className="outdoors-title-button">
                                <p>
                                    All our products — whether we make them or not — are backed by our lifetime warranty.
                                </p>
                            </div>
                        </div>

                        <div className="outdoors-items">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg" alt="" />
                            <h1>Best in Class Service</h1>
                            <div className="outdoors-title-button">
                                <p>
                                    All our products — whether we make them or not — are backed by our lifetime warranty.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Meet-about">
                <div className="container">
                    <div className="Meet-about-total-con">
                        <div className="Meet-about-right">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84cdfbaf8c176df76d51a3_sept-commercial-Cqu3DdNwtKQ-unsplash%20(1)%20(1).jpg" alt="" />
                        </div>
                        <div className="Meet-about-con">
                            <div className="Meet-about-con-left">
                                <h4>Meet the Owners</h4>
                                <div className="Meet-about-con-title">
                                    <p>
                                     John and Jane met on a backpacking adventure in
                                      Nepal. John, a former sheep shearer, went on the
                                      trip to get some clarity about his next 
                                      adventures in life. Jane — a Peloton instructor
                                       — went on the trip to explore the landscape 
                                       in Nepal.
                                    </p><br />
                                    <p>
                                        While on the trip, John and Jane realized that they had one common love — 
                                        the love for hiking and the love for being outdoors.
                                    </p><br />
                                    <p>
                                        Returning back to their home state of Oklahoma, John and
                                         Jane hatched a plan to launch a retail store centered
                                          around their passions.
                                    </p><br />
                                    <p>
                                        While John handled the sourcing of goods and customer service, Jane focused on the web + 
                                        e-commerce side of the business, building this website 
                                        in the best design platform on the web — Webflow!
                                    </p><br />
                                    <p>
                                        In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor
                                         enthusiasts around the state.
                                    </p><br />
                                    <p>
                                        To this day, John and Jane return to Nepal yearly to ensure that they never forget their 
                                        roots and where they came from.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profrile">
                <div className="container">
                    <div className="profrile-con">
                        <div className="profrile-user">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84d114eef39554b0e943d8_John%20Doe.png" alt="" />
                            <h1>John Doe</h1>
                            <div className="profrile-title">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse varius enim in eros elementum 
                                    tristique. Duis cursus, mi quis viverra ornare, 
                                    eros dolor interdum nulla, ut commodo diam libero
                                    vitae erat. Aenean faucibus nibh et justo cursus
                                    id rutrum lorem imperdiet. Nunc ut sem vitae 
                                    risus tristique posuere.
                                </p>
                            </div>
                        </div>
                        <div className="profrile-user">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84d11d180ebb04f6b16bd9_Jane%20Doe.png" alt="" />
                            <h1>Jane Doe</h1>
                            <div className="profrile-title">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Suspendisse varius enim in eros 
                                    elementum tristique. Duis cursus, mi quis viverra 
                                    ornare, eros dolor interdum nulla, ut commodo diam 
                                    libero vitae erat. Aenean faucibus nibh et justo 
                                    cursus id rutrum lorem imperdiet. Nunc ut sem 
                                    vitae risus tristique posuere.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Need-held">
                <div className="container">
                    <div className="Need-held-con">
                        <div className="Need-held-con-footer">
                            <h4>Need Help?</h4>
                            <div className="Need-held-con-title">
                                <p>Need help or assistance? Our team is standing</p>
                                <p>by to make sure you get the help you need.</p>
                                <p>Whether you need to adjust an order or</p>
                                <p>delivery details, we're ready to help!</p>
                            </div>
                            <div className="Need-held-bottom">
                                <button>
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
