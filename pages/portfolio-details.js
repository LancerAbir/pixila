import React from "react";

const portfolioDetails = () => {
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
                        <div className="col-lg-5 col-md-6">
                            <div className="breadcrumb-text">
                                <span className="title-tag">
                                    Welcome to our company
                                </span>
                                <h2 className="page-title">Case Details.</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>Portfolio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== Portfolio Area Start ======*/}
            <section className="portfolio-area portfolio-details section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="portfolio-details-gallery row">
                                <div className="col-12">
                                    <div className="image">
                                        <img
                                            src="img/portfolio/portfolio-details/01.jpg"
                                            alt="Portfolio"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="image mt-30">
                                        <img
                                            src="img/portfolio/portfolio-details/02.jpg"
                                            alt="Portfolio"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="image mt-30">
                                        <img
                                            src="img/portfolio/portfolio-details/03.jpg"
                                            alt="Portfolio"
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="image mt-30">
                                        <img
                                            src="img/portfolio/portfolio-details/04.jpg"
                                            alt="Portfolio"
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="image mt-30">
                                        <img
                                            src="img/portfolio/portfolio-details/05.jpg"
                                            alt="Portfolio"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-10">
                            <div className="portfolio-desc">
                                <h3 className="title">ProMan In Black Inc.</h3>
                                <p>
                                    Right understanding of the definition and
                                    key characteristics of project is of
                                    significant importance. Any project is not
                                    just a way to make or do something but it’s
                                    an opportunity to achieve some desired
                                    result by implementing a systematic
                                    management approach (for example, producing
                                    a product or sharing knowledge).
                                </p>
                                <div className="portfolio-info">
                                    <h6>Projects Info</h6>
                                    <ul>
                                        <li>
                                            <span>Category:</span>
                                            <a href="#">Branding,</a>
                                            <a href="#">Design</a>
                                        </li>
                                        <li>
                                            <span>Date:</span> June 21, 2021
                                        </li>
                                        <li>
                                            <span>Tags:</span>
                                            <a href="#">color,</a>
                                            <a href="#">design,</a>
                                            <a href="#">theme,</a>
                                            <a href="#">ui,</a>
                                            <a href="#">ux</a>
                                        </li>
                                    </ul>
                                    <a href="#" className="main-btn mt-30">
                                        Live Preview
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                    <span className="icon">
                                        <i className="flaticon-files" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-nav mt-60">
                        <div className="prev-post">
                            <a href="#">
                                <i className="fal fa-long-arrow-left" /> Prev
                                Project
                            </a>
                        </div>
                        <div className="dot-icon">
                            <img
                                src="img/portfolio/portfolio-details/nav-dots.png"
                                alt="Dots"
                            />
                        </div>
                        <div className="next-post">
                            <a href="#">
                                Next Project
                                <i className="fal fa-long-arrow-right" />
                            </a>
                        </div>
                    </div>
                    <div className="related-portfolio">
                        <h3 className="related-portfolio-title">
                            Related projects
                        </h3>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="portfolio-box-two mt-30">
                                    <div
                                        className="thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/portfolio/05.jpg)",
                                        }}
                                    >
                                        <a
                                            href="portfolio-details.html"
                                            className="link"
                                        >
                                            <i className="fal fa-long-arrow-right" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="tags">
                                            <a href="#">Design,</a>
                                            <a href="#">Development</a>
                                        </div>
                                        <h4 className="title">
                                            <a href="portfolio-details.html">
                                                Kikado Mobile App Design
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="portfolio-box-two mt-30">
                                    <div
                                        className="thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/portfolio/06.jpg)",
                                        }}
                                    >
                                        <a
                                            href="portfolio-details.html"
                                            className="link"
                                        >
                                            <i className="fal fa-long-arrow-right" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="tags">
                                            <a href="#">Design,</a>
                                            <a href="#">Development</a>
                                        </div>
                                        <h4 className="title">
                                            <a href="portfolio-details.html">
                                                Kikado Mobile App Design
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="portfolio-box-two mt-30">
                                    <div
                                        className="thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/portfolio/07.jpg)",
                                        }}
                                    >
                                        <a
                                            href="portfolio-details.html"
                                            className="link"
                                        >
                                            <i className="fal fa-long-arrow-right" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="tags">
                                            <a href="#">Design,</a>
                                            <a href="#">Development</a>
                                        </div>
                                        <h4 className="title">
                                            <a href="portfolio-details.html">
                                                Kikado Mobile App Design
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Portfolio Area End ======*/}
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

export default portfolioDetails;
