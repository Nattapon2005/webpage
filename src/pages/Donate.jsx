import React from 'react';

const Donate = () => {
    return (
        <div>
            <div className="donate">
                <div className="container">
                    <div className="donate-con">
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
                    </div>
                </div>
            </div>

            <div className="donate-menu">
                <div className="container">
                    <div className="donate-menu-con">
                        <div className="donate-menu-choice">
                            <a href="#">Donate $100</a>
                            <a href="#">Donate $50</a>
                            <a href="#">Donate $25</a>
                            <a href="#">Donate $15</a>
                            <a href="#">Donate $5</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
