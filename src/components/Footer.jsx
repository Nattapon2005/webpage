import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-con">
                    <div className="footer-logo btn-footer">
                        <Link to="/">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="footer-icon btn-footer">
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407a25b6234aeec960fb9_Twitter_Social_Icon_Rounded_Square_White.svg" alt="Twitter" />
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407aa3fb6cf5576f1658b_Facebook%20Logo.svg" alt="Facebook" />
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e840774014326b74bbeeeb6_Insta.svg" alt="Instagram" />
                    </div>
                </div>

                <div className="footer-end">
                    <p>Made In</p>
                    <a href="#">Webflow.</a>
                    <p>© 2020.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
