import React from "react";

const Footer5 = () => {
    return (
        <footer className="footer-four">
            <div className="container">
                <div className="footer-top">
                    <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-5 col-lg-3">
                            <div className="footer-logo mb-md-gap-30">
                                <img src="img/logo-white-2.png" alt="Image" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-7 col-lg-9">
                            <div className="footer-newsletter-form">
                                <form action="#">
                                    <label htmlFor="email">Newsletter</label>
                                    <div className="input-wrap">
                                        <div className="position-relative">
                                            <span>
                                                <i className="fal fa-envelope" />
                                            </span>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="Enter email address"
                                            />
                                        </div>
                                        <button type="submit">
                                            Subscribe Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 widget-border">
                            <div className="widget contact-info-two">
                                <h5 className="widget-title">Our Contact</h5>
                                <p>
                                    info@webexamplemail.com
                                    <br />
                                    786.987.980.56 14/A,
                                    <br />
                                    Miran Tower, NYC
                                </p>
                                <ul>
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
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 widget-border">
                            <div className="widget nav-widget">
                                <h5 className="widget-title">About Us</h5>
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 widget-border">
                            <div className="widget recent-post-widget">
                                <h5 className="widget-title">News feeds.</h5>
                                <ul>
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
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 widget-border">
                            <div className="widget schedule-widget">
                                <h5 className="widget-title">Opening Hours</h5>
                                <div className="widget-inner">
                                    <ul>
                                        <li>
                                            <span className="icon">
                                                <i className="fal fa-calendar-times" />
                                            </span>
                                            <h6>Regular Time</h6>
                                            <p>
                                                Mon - Sat 8:00 - 17:30,
                                                <br /> Sunday - CLOSED
                                            </p>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <i className="fal fa-calendar-times" />
                                            </span>
                                            <h6>Off Day Shedule</h6>
                                            <p>
                                                Mon - Sat 8:00 - 17:30,
                                                <br /> Sunday - CLOSED
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright-text">
                        Copyright By@<a href="#">WebTend</a> - 2021
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer5;