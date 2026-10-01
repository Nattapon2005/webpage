import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="Serving-con">
                        <div className="Serving-header-con">
                            <h4>
                                Serving you <br />
                                since 1989.
                            </h4>
                            <div className="Serving-btn">
                                <p>
                                    Acme Outdoors is an outdoor and adventure
                                    shop located in the Boathouse District in
                                    Oklahoma City.
                                </p>
                            </div>
                            <div className="Serving-shop">
                                <Link className="Shop-Merch" to="/shop">Shop Merch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="Support-Acme-Outdoors">
                <div className="container">
                    <div className="Support-con">
                        <div className="Support">
                            <p>WAYS TO SUPPORT</p>
                            <h4>Support Acme Outdoors.</h4>
                        </div>
                        <div className="covid-19">
                            <p>
                                COVID-19 has forced us to close our retail space, but we need support from patrons like yourself
                                now more than ever. Below, we’ve listed the best ways to help us through this season.
                            </p>
                        </div>
                    </div>

                    <div className="Support-info">
                        <div className="Outdoors">
                            <div className="Outdoors-con">
                                <div className="Outdoors-number">
                                    <h1>01</h1>
                                </div>
                                <div className="Outdoors-con-logo">
                                    <h1>
                                        SHOP <br />
                                        PRODUCTS
                                    </h1>
                                </div>
                            </div>
                            <div className="Outdoors-title">
                                <p>
                                    Our full product line is still available online here on our site! Getting outside and hiking
                                    is still something you can do. Get your gear now!
                                </p>
                            </div>
                        </div>

                        <div className="Outdoors">
                            <div className="Outdoors-con">
                                <div className="Outdoors-number">
                                    <h1>02</h1>
                                </div>
                                <div className="Outdoors-con-logo">
                                    <h1>
                                        DONATE
                                    </h1>
                                </div>
                            </div>
                            <div className="Outdoors-title">
                                <p>
                                    Since we've changed the way we operate to online only, and to ensure your safety, not all
                                    our staff is working. Donate to keep them afloat.
                                </p>
                            </div>
                        </div>

                        <div className="Outdoors">
                            <div className="Outdoors-con">
                                <div className="Outdoors-number">
                                    <h1>03</h1>
                                </div>
                                <div className="Outdoors-con-logo">
                                    <h1>
                                        BUY <br />
                                        GIFT CARDS
                                    </h1>
                                </div>
                            </div>
                            <div className="Outdoors-title">
                                <p>
                                    Have all the outdoor gear you need for now? Buy a gift card and use it later or share it
                                    with friends and family.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="keeping">
                <div className="container">
                    <div className="keeping-con-info">
                        <div className="keeping-con">
                            <h1>
                                How we're keeping you <br />
                                safe during COVID-19
                            </h1>
                            <div className="keeping-title">
                                <p>
                                    As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our
                                    customers and team members.
                                </p>
                                <div className="keeping-btn">
                                    <Link to="/responding">
                                        Read Out statement
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Open">
                <div className="container">
                    <div className="Open-con">
                        <p>SHOP PRODUCTS</p>
                        <h2>Open 24/7/365.</h2>
                        <div className="Open-info-con-sells">
                            <div className="Open-info">
                                <div className="Open-info-top">
                                    <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg" alt="" />
                                </div>
                                <div className="open-title">
                                    <div className="open-title-sells">
                                        <p>White Tent</p>
                                        <p>$ 200.00 USD</p>
                                        <div className="open-btn">
                                            <Link to="/product/white-tent">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Open-info">
                                <div className="Open-info-top">
                                    <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg" alt="" />
                                </div>
                                <div className="open-title">
                                    <div className="open-title-sells">
                                        <p>Tin Coffee Tumbler</p>
                                        <p>$ 35.00 USD</p>
                                        <div className="open-btn">
                                            <Link to="/product/tin-coffee-tumbler">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Open-info">
                                <div className="Open-info-top">
                                    <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg" alt="" />
                                </div>
                                <div className="sale">
                                    <p>SALE</p>
                                </div>
                                <div className="open-title">
                                    <div className="open-title-sells">
                                        <p>Blue Canvas Pack</p>
                                        <p>$ 145.00 USD</p>
                                        <div className="open-btn">
                                            <Link to="/product/blue-canvas-pack">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="open-end">
                            <Link to="/shop">View All product</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Local">
                <div className="container">
                    <div className="Local-con">
                        <div className="Local-imgs">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e83fe3910db4fde2e69f396_christiann-koepke-dQyS2pMYtok-unsplash%20(1).jpg" alt="" />
                        </div>
                        <div className="Local-title">
                            <div className="Local-title-p">
                                <h2>Shop Local.</h2>
                                <div className="local-p-margin">
                                    <p>
                                        We know that during COVID-19, a lot of folks around the city and state are feeling
                                        uneasy about the future - we’re not sure what the future holds either.
                                    </p>
                                    <br />
                                    <p>
                                        That said: we know that we love making sure you have the gear you need for your
                                        adventures, and we’re going to keep doing that - with our team - until the city tells us
                                        we can’t.
                                    </p>
                                    <br />
                                    <p>
                                        But as long as folks like yourself support small businesses around the city, then we’ll
                                        be here — every day, making sure your orders arrive on time.
                                    </p>
                                    <p>-------</p>
                                    <br />
                                    <p>Jane & John Doe</p>
                                    <p>Acme Outdoors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
