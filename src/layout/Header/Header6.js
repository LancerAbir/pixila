import React from "react";

const Header6 = () => {
    return (
        <header className="header-one sticky-header">
            <div className="header-topbar with-language-right d-none d-md-block">
                <div className="container-fluid">
                    <div className="d-lg-flex align-items-center justify-content-between">
                        <div className="topbar-left d-flex align-items-center">
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
                            <ul className="contact-info">
                                <li>
                                    <a href="#">
                                        <span>Phone:</span> 987-098-756-09
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Email:</span> info@webmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="topbar-right d-flex align-items-center justify-content-lg-end">
                            <ul className="topbar-menu">
                                <li>
                                    <a href="#">Sign In</a>
                                </li>
                                <li>
                                    <a href="#">Company</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="language-dropdown">
                    <span>
                        English <i className="fal fa-angle-down" />
                    </span>
                </div>
            </div>
            <div className="header-navbar">
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="navbar-left d-flex align-items-center">
                            <div className="site-logo">
                                <a href="index.html">
                                    <img src="img/logo.png" alt="Pixila" />
                                </a>
                            </div>
                            <nav className="site-nav-menu">
                                <ul className="primary-menu onepage-nav">
                                    <li className="current">
                                        <a href="#home">Home</a>
                                    </li>
                                    <li>
                                        <a href="#services">Services</a>
                                    </li>
                                    <li>
                                        <a href="#about">About us</a>
                                    </li>
                                    <li>
                                        <a href="#team">Team</a>
                                    </li>
                                    <li>
                                        <a href="#feedbacks">Feedbacks</a>
                                    </li>
                                </ul>
                                <a href="#" className="nav-close">
                                    <i className="fal fa-times" />
                                </a>
                            </nav>
                        </div>
                        <div className="navbar-right d-flex align-items-center">
                            <div className="cart-widget">
                                <a href="#" className="cart-icon">
                                    <i className="fal fa-shopping-cart" />
                                </a>
                            </div>
                            <div className="offcanvas-menu">
                                <a href="#" className="panel-icon">
                                    <i className="fal fa-bars" />
                                </a>
                                <div className="offcanvas-panel">
                                    <div className="offcanvas-panel-inner">
                                        <div className="panel-logo">
                                            <img
                                                src="img/logo.png"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="about-us">
                                            <h5 className="panel-widget-title">
                                                About Us
                                            </h5>
                                            <p>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Tempore ipsam alias quae
                                                cupiditate quas, neque eum magni
                                                impedit asperiores ad id sint
                                                repudiandae quaerat, omnis
                                                commodi consequatur dolore rerum
                                                deleniti!
                                            </p>
                                        </div>
                                        <div className="contact-us">
                                            <h5 className="panel-widget-title">
                                                Contact Us
                                            </h5>
                                            <ul>
                                                <li>
                                                    <i className="fal fa-map-marker-alt" />
                                                    121 King St, Melbourne VIC
                                                    3000, Australia.
                                                </li>
                                                <li>
                                                    <i className="fal fa-envelope-open" />
                                                    <a href="mailto:info@example.com">
                                                        info@example.com
                                                    </a>
                                                    <a href="mailto:info@example.com">
                                                        info@example.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className="fal fa-phone" />
                                                    <a href="tel:(312)-895-9800">
                                                        +0 123-456-7890
                                                    </a>
                                                    <a href="tel:(312)-895-9888">
                                                        +0 123-456-7890
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="#" className="panel-close">
                                            <i className="fal fa-times" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="search-widget">
                                <a href="#" className="search-icon">
                                    <i className="fal fa-search" />
                                </a>
                                <div className="search-form">
                                    <form action="#">
                                        <input
                                            type="search"
                                            placeholder="Search here...."
                                        />
                                        <button type="submit">
                                            <i className="fal fa-search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <a href="#" className="nav-toggler">
                                <i className="fal fa-bars" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header6;
