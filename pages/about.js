import React from "react";

const about = () => {
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
                                <h2 className="page-title">About Us.</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== About section Start ======*/}
            <section className="about-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-9">
                            <div className="about-experience-galley mb-lg-gap-50">
                                <div
                                    className="image-one"
                                    style={{
                                        backgroundImage:
                                            "url(img/experience-gallery/01.jpg)",
                                    }}
                                ></div>
                                <div
                                    className="image-two"
                                    style={{
                                        backgroundImage:
                                            "url(img/experience-gallery/02.jpg)",
                                    }}
                                ></div>
                                <div
                                    className="image-three"
                                    style={{
                                        backgroundImage:
                                            "url(img/experience-gallery/03.jpg)",
                                    }}
                                ></div>
                                <div className="experience-tag">
                                    <span>
                                        <span className="count">30</span>Years
                                        Experience
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="about-text">
                                <div className="section-title mb-30">
                                    <span className="title-tag">About Us</span>
                                    <h2 className="title">
                                        Get an amazing experience with quality
                                        level team
                                    </h2>
                                </div>
                                <p>
                                    Productservices are professional services
                                    that help market or advertise your business
                                    online. Best Way to Manage and Share Work
                                    Resources.
                                </p>
                                <a href="#" className="main-btn mt-30">
                                    Learn More
                                </a>
                                <div className="about-author">
                                    <div className="author-img">
                                        <img
                                            src="img/about-author.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="author-desc">
                                        <h5>Rosalina D. William</h5>
                                        <span>Founder of Bella</span>
                                    </div>
                                    <div className="brand-img">
                                        <img src="img/brand/2.png" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== About section End ======*/}
            {/*====== Service Area Start ======*/}
            <section className="service-area section-gap grey-bg">
                <div className="container">
                    <div className="section-title text-center mb-30">
                        <span className="title-tag">Services</span>
                        <h2 className="title">Solutions we provide</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="service-box-two mt-30">
                                <span className="box-count">01</span>
                                <h4 className="title">
                                    <a href="#">Digital Product Developoment</a>
                                </h4>
                                <p>
                                    We enjoy working with discerning clients,
                                    people for whom quality, service, integrity
                                    &amp; aesthetics matter deeply.
                                </p>
                                <a href="#" className="service-link">
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="service-box-two mt-30">
                                <span className="box-count">02</span>
                                <h4 className="title">
                                    <a href="#">General Consulting Process</a>
                                </h4>
                                <p>
                                    We enjoy working with discerning clients,
                                    people for whom quality, service, integrity
                                    &amp; aesthetics matter deeply.
                                </p>
                                <a href="#" className="service-link">
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="service-box-two mt-30">
                                <span className="box-count">03</span>
                                <h4 className="title">
                                    <a href="#">Hire in Fixed Contracting</a>
                                </h4>
                                <p>
                                    We enjoy working with discerning clients,
                                    people for whom quality, service, integrity
                                    &amp; aesthetics matter deeply.
                                </p>
                                <a href="#" className="service-link">
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Service Area End ======*/}
            {/*====== Skill area Start ======*/}
            <section className="skill-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 col-md-10 order-lg-2">
                            <div className="skillset-video active ms-lg-5">
                                <a
                                    href="https://www.youtube.com/watch?v=pVE92TNDwUk"
                                    className="popup-btn popup-video"
                                >
                                    <i className="fas fa-play" />
                                </a>
                                <div
                                    className="video-bg"
                                    style={{
                                        backgroundImage:
                                            "url(img/skillset/04.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-10 order-lg-1">
                            <div className="skill-text mt-md-gap-50">
                                <div className="section-title mb-30">
                                    <span className="title-tag">
                                        Our Skillset
                                    </span>
                                    <h2 className="title">
                                        Emerging technologies converge with
                                        urban
                                    </h2>
                                </div>
                                <p>
                                    Their creativity, innovation, technological
                                    expertise, and project completion steps were
                                    impressive. Project management was
                                    professional. We’re a full-service creative
                                    digital marketing agency, collaborating.
                                </p>
                                <div className="progress-bars progress-bars-two mt-40">
                                    <div
                                        className="single-progress"
                                        data-count={72}
                                    >
                                        <div className="title">
                                            <span>Main Strategy</span>
                                            <span className="progress-counter">
                                                <span className="count">
                                                    72
                                                </span>
                                                %
                                            </span>
                                        </div>
                                        <div className="progressbar-wrap">
                                            <div className="progressbar" />
                                        </div>
                                    </div>
                                    <div
                                        className="single-progress"
                                        data-count={80}
                                    >
                                        <div className="title">
                                            <span>Gaming &amp; Planning</span>
                                            <span className="progress-counter">
                                                <span className="count">
                                                    80
                                                </span>
                                                %
                                            </span>
                                        </div>
                                        <div className="progressbar-wrap">
                                            <div className="progressbar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Skill area End ======*/}
            {/*====== News Section start ======*/}
            <section className="news-section section-gap grey-bg">
                <div className="container">
                    <div className="section-title text-center mb-30">
                        <span className="title-tag">News</span>
                        <h2 className="title">New and latest insights</h2>
                    </div>
                    <div className="row latest-news-boxes boxes-primary-color">
                        <div className="col-xl-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="latest-news-box mt-30">
                                        <div
                                            className="news-thumb"
                                            style={{
                                                backgroundImage:
                                                    "url(img/latest-news/01.jpg)",
                                            }}
                                        />
                                        <div className="content">
                                            <ul className="post-meta">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-calendar-alt" />
                                                        10th May 2020
                                                    </a>
                                                </li>
                                                <li className="admin">
                                                    <a href="#">Admin</a>
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="#">
                                                    Chemical engineering
                                                    projects for all
                                                    technologies
                                                </a>
                                            </h4>
                                            <p>
                                                As emerging technologies
                                                converge with urban planning, a
                                                revolution of automated,
                                                on-demand and ownerless
                                                transport beckons. But is the
                                                concept
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="latest-news-box mt-30">
                                        <div
                                            className="news-thumb"
                                            style={{
                                                backgroundImage:
                                                    "url(img/latest-news/02.jpg)",
                                            }}
                                        />
                                        <div className="content">
                                            <ul className="post-meta">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-calendar-alt" />
                                                        10th May 2020
                                                    </a>
                                                </li>
                                                <li className="admin">
                                                    <a href="#">Admin</a>
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="#">
                                                    Chemical engineering
                                                    projects for all
                                                    technologies
                                                </a>
                                            </h4>
                                            <p>
                                                As emerging technologies
                                                converge with urban planning, a
                                                revolution of automated,
                                                on-demand and ownerless
                                                transport beckons. But is the
                                                concept
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="latest-news-side mt-30">
                                <div className="single-side-box">
                                    <div
                                        className="news-thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/latest-news/03.jpg)",
                                        }}
                                    />
                                    <div className="content">
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />
                                                    10th May 2020
                                                </a>
                                            </li>
                                            <li className="admin">
                                                <a href="#">Admin</a>
                                            </li>
                                        </ul>
                                        <h4>
                                            <a href="#">
                                                Engineering projects for all
                                                technologies
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                                <div className="single-side-box">
                                    <div
                                        className="news-thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/latest-news/04.jpg)",
                                        }}
                                    />
                                    <div className="content">
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />
                                                    10th May 2020
                                                </a>
                                            </li>
                                            <li className="admin">
                                                <a href="#">Admin</a>
                                            </li>
                                        </ul>
                                        <h4>
                                            <a href="#">
                                                Engineering projects for all
                                                technologies
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                                <div className="single-side-box">
                                    <div
                                        className="news-thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/latest-news/05.jpg)",
                                        }}
                                    />
                                    <div className="content">
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />
                                                    10th May 2020
                                                </a>
                                            </li>
                                            <li className="admin">
                                                <a href="#">Admin</a>
                                            </li>
                                        </ul>
                                        <h4>
                                            <a href="#">
                                                Engineering projects for all
                                                technologies
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                                <a href="#" className="load-more-btn">
                                    <i className="fal fa-newspaper" /> More News
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== News Section End ======*/}
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

export default about;
