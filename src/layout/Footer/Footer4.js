import React from "react";

const Footer4 = () => {
    return (
        <footer className="footer-three">
            <div className="container">
                <div className="footer-top">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <ul className="footer-top-menu">
                            <li>
                                <a href="#">Roadmap</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Connect</a>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li>
                                <a href="#">facebook</a>
                            </li>
                            <li>
                                <a href="#">twtter</a>
                            </li>
                            <li>
                                <a href="#">linkedin </a>
                            </li>
                            <li>
                                <a href="#">pinterest</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="widget about-widget">
                                <h5 className="widget-title">About us.</h5>
                                <p>
                                    Finding the mental wherewithal to get into
                                    workout mode can take some serious effort,
                                    especially when all your activities happen
                                    at home. It can be done, but you have
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-4 col-sm-6">
                            <div className="widget nav-widget">
                                <h5 className="widget-title">Main Links.</h5>
                                <ul>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Reviews</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Best Products</a>
                                    </li>
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#">Categories</a>
                                    </li>
                                    <li>
                                        <a href="#">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="#">Brands</a>
                                    </li>
                                    <li>
                                        <a href="#">Insights</a>
                                    </li>
                                    <li>
                                        <a href="#">Hiring</a>
                                    </li>
                                    <li>
                                        <a href="#">Business Strategy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-3 col-sm-6">
                            <div className="widget contact-info-two">
                                <h5 className="widget-title">Get in touch.</h5>
                                <ul>
                                    <li>
                                        <span>New Address</span>
                                        14/A, New Home Town, Nyc
                                    </li>
                                    <li>
                                        <span>Head Quatar</span>
                                        71, Qlex Tower, Onthon, UK
                                    </li>
                                </ul>
                                <a href="#" className="info-btn">
                                    Contact Us
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer4;
