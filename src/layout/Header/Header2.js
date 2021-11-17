import React from "react";

const Header2 = () => {
    return (
        <header className="header-two">
            <div className="container">
                <div className="header-topbar d-none d-md-block">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="topbar-left d-flex align-items-center">
                            <a href="#" className="hiring-btn">
                                <i className="fal fa-briefcase" />
                                <span>
                                    We are <span>hiring</span>
                                </span>
                            </a>
                            <ul className="contact-info">
                                <li>
                                    <i className="fal fa-phone" />
                                    <a href="#">987-098-756-09</a>
                                </li>
                            </ul>
                        </div>
                        <div className="topbar-right d-flex justify-content-end">
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
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-navbar">
                    <div className="d-flex align-items-center">
                        <div className="site-logo">
                            <a href="index.html">
                                <img src="img/logo-2.png" alt="Pixila" />
                            </a>
                        </div>
                        <nav className="site-nav-menu">
                            <ul className="primary-menu onepage-nav">
                                <li className="current">
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#about">About us</a>
                                </li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#feedbacks">Feedbacks</a>
                                </li>
                                <li>
                                    <a href="#news">News</a>
                                </li>
                            </ul>
                            <a href="#" className="nav-close">
                                <i className="fal fa-times" />
                            </a>
                        </nav>
                        <a href="#" className="nav-toggler">
                            <i className="fal fa-bars" />
                        </a>
                    </div>
                </div>
                <div className="header-contact-btn">
                    <a href="#">
                        Get A Free Quote
                        <span>info@webmail.com</span>
                        <span className="icon">
                            <i className="flaticon-email" />
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header2;
