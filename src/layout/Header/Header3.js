import Link from "next/link";
import React from "react";

const Header3 = () => {
    return (
        <header className="header-three sticky-header">
            <div className="header-navbar">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="navbar-left d-flex align-items-center">
                            <div className="site-logo">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="img/logo-3.png"
                                            alt="Pixila"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <nav className="site-nav-menu">
                                <ul className="primary-menu onepage-nav">
                                    <li className="current">
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a href="#features">Features</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/process">
                                            <a href="#process">Process</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a href="#feedback">Feedback</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a href="#news">News</a>
                                        </Link>
                                    </li>
                                </ul>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="nav-close"
                                    >
                                        <i className="fal fa-times" />
                                    </a>
                                </Link>
                            </nav>
                        </div>
                        <div className="navbar-right d-flex align-items-center">
                            <div className="header-contact-btn">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Support: 987.098.564.98
                                    </a>
                                </Link>
                            </div>
                            <div className="search-widget">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="search-icon"
                                    >
                                        <i className="far fa-search" />
                                    </a>
                                </Link>
                                <div className="search-form">
                                    <form
                                        action="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
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
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="nav-toggler"
                                >
                                    <i className="far fa-bars" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header3;
