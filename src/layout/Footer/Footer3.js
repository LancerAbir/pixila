import React from "react";

const Footer3 = () => {
    return (
        <footer className="footer-two">
            <div className="footer-top">
                <div className="container">
                    <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="footer-logo mb-xs-gap-30">
                            <img src="img/logo-2.png" alt="Image" />
                        </div>
                        <ul className="social-icon">
                            <li>
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-behance" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-youtube" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-vimeo" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="widget about-widget">
                                <h5 className="widget-title">About us.</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet ur
                                    adipisicing elit, sed do eiusmod tem por
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="widget nav-widget">
                                <h5 className="widget-title">Services.</h5>
                                <ul>
                                    <li>
                                        <a href="#">SEO Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#">Game Development</a>
                                    </li>
                                    <li>
                                        <a href="#">Link Building</a>
                                    </li>
                                    <li>
                                        <a href="#">Bitcoin Mining</a>
                                    </li>
                                    <li>
                                        <a href="#">Keyword Targeting</a>
                                    </li>
                                    <li>
                                        <a href="#">Live Streaming</a>
                                    </li>
                                    <li>
                                        <a href="#">Web Analytics</a>
                                    </li>
                                    <li>
                                        <a href="#">Marketplace</a>
                                    </li>
                                    <li>
                                        <a href="#">Email Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#">Business Strategy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="widget recent-post-widget">
                                <h5 className="widget-title">News feeds.</h5>
                                <ul>
                                    <li>
                                        <div className="post-img">
                                            <img
                                                src="img/post-widget/01.jpg"
                                                alt
                                            />
                                        </div>
                                        <div className="post-desc">
                                            <span className="post-date">
                                                <i className="fal fa-calendar-alt" />
                                                10th May 2020
                                            </span>
                                            <h6>
                                                <a href="blog-single.html">
                                                    Chemical Engineering
                                                    Projects For All.
                                                </a>
                                            </h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post-img">
                                            <img
                                                src="img/post-widget/02.jpg"
                                                alt
                                            />
                                        </div>
                                        <div className="post-desc">
                                            <span className="post-date">
                                                <i className="fal fa-calendar-alt" />
                                                10th May 2020
                                            </span>
                                            <h6>
                                                <a href="blog-single.html">
                                                    Chemical Engineering
                                                    Projects For All.
                                                </a>
                                            </h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post-img">
                                            <img
                                                src="img/post-widget/03.jpg"
                                                alt
                                            />
                                        </div>
                                        <div className="post-desc">
                                            <span className="post-date">
                                                <i className="fal fa-calendar-alt" />
                                                10th May 2020
                                            </span>
                                            <h6>
                                                <a href="blog-single.html">
                                                    Chemical Engineering
                                                    Projects For All.
                                                </a>
                                            </h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="widget contact-info">
                                <h5 className="widget-title">Get in touch.</h5>
                                <ul>
                                    <li>
                                        <i className="fal fa-map-marker-alt" />
                                        <span>Office:</span> 121 King St,
                                        Melbourne VIC 3000, Australia
                                    </li>
                                    <li>
                                        <i className="fal fa-phone" />
                                        <span>Phone:</span> +0 123-456-7890
                                        <br />
                                        +0 123-456-7890
                                    </li>
                                    <li>
                                        <i className="fal fa-envelope" />
                                        <span>
                                            Email:
                                        </span> info@example.com <br />
                                        info@example.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="d-md-flex align-items-center justify-content-between">
                        <ul className="footer-menu order-md-2">
                            <li>
                                <a href="#">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="#">Refund Policy</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                        <p className="copyright-text order-md-1">
                            Copyright By@<a href="#">WebTend</a> - 2021
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer3;
