import React from "react";

const service2 = () => {
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
                                <h2 className="page-title">What We Do.</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>Service</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== Service Area Start ======*/}
            <section className="service-area section-gap-bottom section-gap">
                <div className="container">
                    <div className="service-boxes-three">
                        <div className="row g-0">
                            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                                <div className="service-box-three">
                                    <div className="icon">
                                        <i className="fal fa-box-open" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Product Design</a>
                                    </h4>
                                    <p>Get an amazing experience here</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                                <div className="service-box-three">
                                    <div className="icon">
                                        <i className="fal fa-globe" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Digital Marketing</a>
                                    </h4>
                                    <p>Get an amazing experience here</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                                <div className="service-box-three">
                                    <div className="icon">
                                        <i className="fal fa-mobile" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Mobile App Design</a>
                                    </h4>
                                    <p>Get an amazing experience here</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                                <div className="service-box-three">
                                    <div className="icon">
                                        <i className="fal fa-desktop" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Website Design</a>
                                    </h4>
                                    <p>Get an amazing experience here</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                                <div className="service-box-three">
                                    <div className="icon">
                                        <i className="fal fa-chart-pie" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Business Strategy</a>
                                    </h4>
                                    <p>Get an amazing experience here</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                                <div className="service-box-three">
                                    <div className="icon">
                                        <i className="fal fa-fill-drip" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Interior Design</a>
                                    </h4>
                                    <p>Get an amazing experience here</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                                <div className="service-box-three">
                                    <div className="icon">
                                        <i className="fal fa-clone" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Mining Storage</a>
                                    </h4>
                                    <p>Get an amazing experience here</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                                <div className="service-box-three">
                                    <div className="icon">
                                        <i className="fal fa-cloud-download" />
                                    </div>
                                    <h4 className="title">
                                        <a href="#">Cloud Solutions</a>
                                    </h4>
                                    <p>Get an amazing experience here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Service Area End ======*/}
            {/*====== Process Area Start ======*/}
            <section className="process-section process-with-cta">
                <div className="section-gap-top secondary-bg">
                    <div className="container">
                        <div className="section-title color-white text-center mb-20">
                            <span className="title-tag">Process</span>
                            <h2 className="title">How It Works</h2>
                        </div>
                        <div className="row process-boxes justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="process-box mt-30">
                                    <div
                                        className="thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/process/01.jpg)",
                                        }}
                                    />
                                    <div className="desc">
                                        <h4>Project Discussions</h4>
                                        <span className="count">01</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="process-box mt-30">
                                    <div
                                        className="thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/process/02.jpg)",
                                        }}
                                    />
                                    <div className="desc">
                                        <h4>Wireframe &amp; Design</h4>
                                        <span className="count">02</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="process-box mt-30">
                                    <div
                                        className="thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/process/03.jpg)",
                                        }}
                                    />
                                    <div className="desc">
                                        <h4>Finalize &amp; Handover</h4>
                                        <span className="count">03</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="process-cta grey-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="section-title">
                                    <h2 className="title">
                                        Lets make an custom order here.
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <a href="#" className="main-btn mt-md-gap-30">
                                    Make Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Process Area End ======*/}
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
                                            "url(img/skillset/05.jpg)",
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
                                <img
                                    src="img/logo-white.png"
                                    alt="Image"
                                />
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

export default service2;
