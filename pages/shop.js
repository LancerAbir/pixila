import React from "react";

const shop = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <header className="header-four sticky-header">
                <div className="header-navbar">
                    <div className="container position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="navbar-left d-flex align-items-center">
                                <div className="site-logo">
                                    <a href="index.html">
                                        <img
                                            src="img/logo-4.png"
                                            alt="Pixila"
                                        />
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
                                                                Portfolio
                                                                Details
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
                                            <a href="contact.html">
                                                Contact us
                                            </a>
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
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <section
                className="breadcrumb-section bgc"
                style={{ backgroundImage: "url(img/breadcrumb-bg.jpg)" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="breadcrumb-text">
                                <span className="title-tag">
                                    Welcome to our company
                                </span>
                                <h2 className="page-title">Product Shop.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>Shop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== Shop Area Start ======*/}
            <section className="shop-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="shop-top-filter">
                                <p className="shoping-result-count">
                                    Showing 1–9 of 12 results
                                </p>
                                <ul className="product-view-style">
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-list" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="active-view">
                                            <i className="fal fa-th" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="shop-loop row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/01.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/02.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/03.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/04.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/05.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/06.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/07.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/08.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/09.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/09.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/11.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/12.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrap">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-arrow-left" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="current-page">
                                            01
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">02</a>
                                    </li>
                                    <li>
                                        <a href="#">----</a>
                                    </li>
                                    <li>
                                        <a href="#">08</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-arrow-right" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="primary-sidebar shop-sidebar">
                                <div className="widget search-widget">
                                    <h5 className="widget-title">
                                        Search Here
                                    </h5>
                                    <form action="#">
                                        <input
                                            type="search"
                                            placeholder="Search product name"
                                        />
                                        <button type="button">
                                            <i className="fal fa-search" />
                                            Search
                                        </button>
                                    </form>
                                </div>
                                <div className="widget product-categories">
                                    <h5 className="widget-title">Categories</h5>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Tshirt <span>08</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Accessories <span>12</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Books <span>12</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Laptop &amp; PC <span>15</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Polo <span>09</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget price-range-widget">
                                    <h5 className="widget-title">
                                        Price Range
                                    </h5>
                                    <label
                                        htmlFor="customRange1"
                                        className="form-label"
                                    >
                                        Example range
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="customRange1"
                                    />
                                </div>
                                <div className="widget product-popular-tags">
                                    <h5 className="widget-title">Tags</h5>
                                    <ul>
                                        <li>
                                            <a href="#">Tshirt</a>
                                        </li>
                                        <li>
                                            <a href="#">Sunglass</a>
                                        </li>
                                        <li>
                                            <a href="#">Kits</a>
                                        </li>
                                        <li>
                                            <a href="#">Tshirt</a>
                                        </li>
                                        <li>
                                            <a href="#">Sunglass</a>
                                        </li>
                                        <li>
                                            <a href="#">Kits</a>
                                        </li>
                                        <li>
                                            <a href="#">Tshirt</a>
                                        </li>
                                        <li>
                                            <a href="#">Sunglass</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget product-popular">
                                    <h5 className="widget-title">
                                        Hot Products
                                    </h5>
                                    <ul>
                                        <li>
                                            <div className="thumb">
                                                <img
                                                    src="img/shop/hot-product/01.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="desc">
                                                <h6>
                                                    <a href="shop-details.html">
                                                        Polo Miranda Tshirt
                                                    </a>
                                                </h6>
                                                <span className="price">
                                                    $79.00
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img
                                                    src="img/shop/hot-product/02.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="desc">
                                                <h6>
                                                    <a href="shop-details.html">
                                                        Polo Miranda Tshirt
                                                    </a>
                                                </h6>
                                                <span className="price">
                                                    $79.00
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img
                                                    src="img/shop/hot-product/03.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="desc">
                                                <h6>
                                                    <a href="shop-details.html">
                                                        Polo Miranda Tshirt
                                                    </a>
                                                </h6>
                                                <span className="price">
                                                    $79.00
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img
                                                    src="img/shop/hot-product/04.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="desc">
                                                <h6>
                                                    <a href="shop-details.html">
                                                        Polo Miranda Tshirt
                                                    </a>
                                                </h6>
                                                <span className="price">
                                                    $79.00
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Shop Area End ======*/}
            {/*====== Footer Start ======*/}
            <footer className="footer-one">
                <div className="footer-top">
                    <div className="container">
                        <div className="d-sm-flex justify-content-between align-items-center">
                            <div className="footer-logo mb-xs-gap-30">
                                <img src="img/logo-white.png" alt="Image" />
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
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris.
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
                                    <h5 className="widget-title">
                                        News feeds.
                                    </h5>
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
                                                    <a href="#">
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
                                                    <a href="#">
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
                                                    <a href="#">
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
                                    <h5 className="widget-title">
                                        Get in touch.
                                    </h5>
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
            {/*====== Footer End ======*/}
        </>
    );
};

export default shop;
