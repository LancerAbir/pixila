import React from "react";

const pricing = () => {
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
                        <div className="col-lg-6 col-md-7">
                            <div className="breadcrumb-text">
                                <span className="title-tag">
                                    Welcome to our company
                                </span>
                                <h2 className="page-title">Price and plans.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== Pricing Section Start ======*/}
            <section className="pricing-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="row align-items-center justify-content-center g-0">
                                <div className="col-lg-6 col-md-6 col-sm-10">
                                    <div className="pricing-plan-box-two pricing-box-one">
                                        <div className="pricing-header text-center">
                                            <div className="price-title">
                                                <h3>Starter</h3>
                                                <p className="duration">
                                                    Monthly plan is easy
                                                </p>
                                            </div>
                                            <div className="price-wrap mb-30">
                                                <span className="currency">
                                                    $
                                                </span>
                                                <span className="price">
                                                    29
                                                </span>
                                                <span className="price-suffix">
                                                    .00
                                                </span>
                                            </div>
                                        </div>
                                        <div className="pricing-content text-center">
                                            <ul className="clearfix text-start">
                                                <li>
                                                    23+ Free elements blocks{" "}
                                                    <i className="fal fa-check" />
                                                </li>
                                                <li>
                                                    Free web hosting &amp;
                                                    domain{" "}
                                                    <i className="fal fa-check" />
                                                </li>
                                                <li>
                                                    SSL with big certificates{" "}
                                                    <i className="fal fa-check" />
                                                </li>
                                                <li>
                                                    1000+ Free active users{" "}
                                                    <i className="fal fa-check" />
                                                </li>
                                                <li>
                                                    500GB Free Bandwidth{" "}
                                                    <i className="fal fa-check" />
                                                </li>
                                            </ul>
                                            <a
                                                href="#"
                                                className="main-btn main-btn-3"
                                            >
                                                Purchase Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-10">
                                    <div className="pricing-plan-box-two pricing-box-two">
                                        <div className="pricing-header text-center">
                                            <div className="price-title">
                                                <h3>Advanced</h3>
                                                <p className="duration">
                                                    Monthly plan is easy
                                                </p>
                                            </div>
                                            <div className="price-wrap mb-30">
                                                <span className="currency">
                                                    $
                                                </span>
                                                <span className="price">
                                                    50
                                                </span>
                                                <span className="price-suffix">
                                                    .00
                                                </span>
                                            </div>
                                        </div>
                                        <div className="pricing-content text-center">
                                            <ul className="clearfix text-start">
                                                <li>
                                                    23+ Free elements blocks{" "}
                                                    <i className="fal fa-check" />
                                                </li>
                                                <li>
                                                    Free web hosting &amp;
                                                    domain{" "}
                                                    <i className="fal fa-check" />
                                                </li>
                                                <li>
                                                    SSL with big certificates{" "}
                                                    <i className="fal fa-check" />
                                                </li>
                                                <li>
                                                    1000+ Free active users{" "}
                                                    <i className="fal fa-check" />
                                                </li>
                                            </ul>
                                            <a
                                                href="#"
                                                className="main-btn main-btn-3"
                                            >
                                                Purchase Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-8 col-md-10">
                            <div className="pricing-text mt-lg-gap-50">
                                <div className="section-title mb-30">
                                    <span className="title-tag">
                                        Price &amp; Plans
                                    </span>
                                    <h2 className="title">
                                        Get relief &amp; flexible intro from us.
                                    </h2>
                                </div>
                                <p className="mb-20">
                                    Productservices are professional services
                                    that help market or advertise your business
                                    online. Best Way to Manage and Share Work
                                    Resources.
                                </p>
                                <p className="mb-30">
                                    In chemistry, an element is a pure substance
                                    consisting only of atoms that all have the
                                    same numbers of protons in their atomic
                                    nuclei. Unlike chemical compounds, chemical
                                    elements cannot be broken down into simpler
                                    substances by chemical means.
                                </p>
                                <ul className="d-flex">
                                    <li>
                                        <a href="#" className="main-btn">
                                            Monthly
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="main-btn main-btn-2"
                                        >
                                            Monthly
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Pricing Section End ======*/}
            {/*====== Pricing Section Start ======*/}
            <section className="pricing-section section-gap grey-bg">
                <div className="container">
                    <div className="section-title text-center mb-30">
                        <span className="title-tag">Plans</span>
                        <h2 className="title">Price &amp; Plans</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-md-6 col-sm-10">
                            <div className="pricing-plan-box mt-30">
                                <div className="pricing-header">
                                    <div className="pricing-icon">
                                        <img
                                            src="img/pricing-icon.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <div className="text-end">
                                        <span className="price-wrap">
                                            <span className="currency">$</span>
                                            <span className="price">9</span>
                                            <span className="price-suffix">
                                                .00
                                            </span>
                                        </span>
                                        <span className="pricing-limit">
                                            Per Month
                                        </span>
                                    </div>
                                </div>
                                <div className="pricing-content">
                                    <ul className="clearfix">
                                        <li>
                                            23+ Free elements blocks{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            Free web hosting &amp; domain{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            SSL with big certificates{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            1000+ Free active users{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            500GB Free Bandwidth{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                    </ul>
                                    <a href="#" className="main-btn main-btn-3">
                                        Purchase Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-10">
                            <div className="pricing-plan-box featured-box mt-30">
                                <div className="pricing-header">
                                    <div className="pricing-icon">
                                        <img
                                            src="img/pricing-icon.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <div className="text-end">
                                        <span className="price-wrap">
                                            <span className="currency">$</span>
                                            <span className="price">99</span>
                                            <span className="price-suffix">
                                                .00
                                            </span>
                                        </span>
                                        <span className="pricing-limit">
                                            Per Month
                                        </span>
                                    </div>
                                </div>
                                <div className="pricing-content">
                                    <ul className="clearfix">
                                        <li>
                                            23+ Free elements blocks{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            Free web hosting &amp; domain{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            SSL with big certificates{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            1000+ Free active users{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            500GB Free Bandwidth{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                    </ul>
                                    <a href="#" className="main-btn main-btn-3">
                                        Purchase Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-10">
                            <div className="pricing-plan-box mt-30">
                                <div className="pricing-header">
                                    <div className="pricing-icon">
                                        <img
                                            src="img/pricing-icon.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <div className="text-end">
                                        <span className="price-wrap">
                                            <span className="currency">$</span>
                                            <span className="price">49</span>
                                            <span className="price-suffix">
                                                .00
                                            </span>
                                        </span>
                                        <span className="pricing-limit">
                                            Per Month
                                        </span>
                                    </div>
                                </div>
                                <div className="pricing-content">
                                    <ul className="clearfix">
                                        <li>
                                            23+ Free elements blocks{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            Free web hosting &amp; domain{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            SSL with big certificates{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            1000+ Free active users{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            500GB Free Bandwidth{" "}
                                            <i className="fal fa-check" />
                                        </li>
                                    </ul>
                                    <a href="#" className="main-btn main-btn-3">
                                        Purchase Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Pricing Section End ======*/}
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
                                                    {" "}
                                                    <i className="fal fa-calendar-alt" />{" "}
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
                                                    {" "}
                                                    <i className="fal fa-calendar-alt" />{" "}
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
                                                    {" "}
                                                    <i className="fal fa-calendar-alt" />{" "}
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
                                            <span>Phone:</span> +0 123-456-7890{" "}
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

export default pricing;
