import React from "react";

const Header1 = () => {
    return (
        <header className="header-four sticky-header">
            <div className="header-navbar">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="navbar-left d-flex align-items-center">
                            <div className="site-logo">
                                <a href="index.html">
                                    <img src="img/logo-4.png" alt="Pixila" />
                                </a>
                            </div>
                            <nav className="site-nav-menu">
                                <ul className="primary-menu">
                                    <li className="current">
                                        <a href="index.html">Home</a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="index.html">
                                                    Home One
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">
                                                    Home Two
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index-3.html">
                                                    Home Three
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index-4.html">
                                                    Home Four
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">OnePage</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="index-onepage.html">
                                                            Home One
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="index-2-onepage.html">
                                                            Home Two
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="index-3-onepage.html">
                                                            Home Three
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="index-4-onepage.html">
                                                            Home Four
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="portfolio.html">
                                                    Portfolio
                                                </a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="portfolio.html">
                                                            Portfolio One
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-2.html">
                                                            Portfolio Two
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-3.html">
                                                            Portfolio Three
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-details.html">
                                                            Portfolio Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="service.html">
                                                    Service
                                                </a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="service.html">
                                                            Service One
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service-2.html">
                                                            Service Two
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="faq.html">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="pricing.html">
                                                    Pricing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="process.html">
                                                    Process
                                                </a>
                                            </li>
                                            <li>
                                                <a href="team.html">Team</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Shop</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="shop-details.html">
                                                            Shop Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="blog.html">News</a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="blog-single.html">
                                                    News Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact us</a>
                                    </li>
                                </ul>
                                <a href="#" className="nav-close">
                                    <i className="fal fa-times" />
                                </a>
                            </nav>
                            <div className="search-widget">
                                <a href="#" className="search-icon">
                                    <i className="far fa-search" />
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
                        </div>
                        <div className="navbar-right d-flex align-items-center">
                            <div className="header-contact-btn">
                                <a href="#">Get Started Now</a>
                            </div>
                            <a href="#" className="nav-toggler">
                                <i className="far fa-bars" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header1;
