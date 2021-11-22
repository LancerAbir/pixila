import Link from "next/link";
import React from "react";

const Footer4 = () => {
    return (
        <footer className="footer-three">
            <div className="container">
                <div className="footer-top">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <ul className="footer-top-menu">
                            <li>
                                <Link href="#">
                                    <a>Roadmap</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Careers</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Connect</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li>
                                <Link href="#">
                                    <a>facebook</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>twtter</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>linkedin </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>pinterest</a>
                                </Link>
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
                                        <Link href="#">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Reviews</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Best Products</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Categories</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Portfolio</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Brands</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Insights</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Hiring</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Business Strategy</a>
                                        </Link>
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
                                <Link href="#">
                                    <a className="info-btn">
                                        Contact Us
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer4;
