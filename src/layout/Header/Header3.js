import React from "react";

const Header3 = () => {
    return (
        <header className="header-three sticky-header">
            <div className="header-navbar">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="navbar-left d-flex align-items-center">
                            <div className="site-logo">
                                <a href="index.html">
                                    <img src="img/logo-3.png" alt="Pixila" />
                                </a>
                            </div>
                            <nav className="site-nav-menu">
                                <ul className="primary-menu onepage-nav">
                                    <li className="current">
                                        <a href="#home">Home</a>
                                    </li>
                                    <li>
                                        <a href="#features">Features</a>
                                    </li>
                                    <li>
                                        <a href="#process">Process</a>
                                    </li>
                                    <li>
                                        <a href="#feedback">Feedback</a>
                                    </li>
                                    <li>
                                        <a href="#news">News</a>
                                    </li>
                                </ul>
                                <a href="#" className="nav-close">
                                    <i className="fal fa-times" />
                                </a>
                            </nav>
                        </div>
                        <div className="navbar-right d-flex align-items-center">
                            <div className="header-contact-btn">
                                <a href="#">Support: 987.098.564.98</a>
                            </div>
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

export default Header3;
