import React from "react";

const index3 = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <header className="header-three sticky-header">
                <div className="header-navbar">
                    <div className="container position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="navbar-left d-flex align-items-center">
                                <div className="site-logo">
                                    <a href="index.html">
                                        <img
                                            src="img/logo-3.png"
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
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <section className="hero-area hero-area-three">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-5 col-md-8">
                            <div className="hero-text">
                                <span
                                    className="title-tag wow fadeInDown"
                                    data-wow-delay="0.3s"
                                >
                                    It's a lot easy to make a difference
                                    togather.
                                </span>
                                <h2
                                    className="title wow fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    Brings your <span>pro</span>team together
                                </h2>
                                <div
                                    className="subscription-form wow fadeInUp"
                                    data-wow-delay="0.7s"
                                >
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder="Enter email address"
                                        />
                                        <button type="submit">
                                            <i className="fal fa-long-arrow-right" />
                                            Subscribe
                                        </button>
                                    </form>
                                    <p
                                        className="form-note wow fadeInLeft"
                                        data-wow-delay="0.9s"
                                    >
                                        ** Don’t worry we not gonna make
                                        spamming
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-7 col-lg-7 col-md-10 wow fadeInRight"
                            data-wow-delay="0.5s"
                        >
                            <div className="hero-img text-lg-end text-center">
                                <img
                                    src="img/hero-img/hero-03.png"
                                    alt="Hero"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Hero Area Start ======*/}
            {/*====== Features section start ======*/}
            <section className="features-section section-gap-top-90 section-gap-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-box mt-30">
                                <div className="feature-content">
                                    <div className="feature-img">
                                        <img src="img/feature/01.jpg" alt />
                                    </div>
                                    <h4>Conversation &amp; Insights</h4>
                                    <p>
                                        Productservices are professional
                                        services that help market or advertise
                                        your business online base work.
                                    </p>
                                </div>
                                <a href="#" className="feature-link">
                                    Check Details
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-box mt-30">
                                <div className="feature-content">
                                    <div className="feature-img">
                                        <img src="img/feature/02.jpg" alt />
                                    </div>
                                    <h4>Conversation &amp; Insights</h4>
                                    <p>
                                        Productservices are professional
                                        services that help market or advertise
                                        your business online base work.
                                    </p>
                                </div>
                                <a href="#" className="feature-link">
                                    Check Details
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-box mt-30">
                                <div className="feature-content">
                                    <div className="feature-img">
                                        <img src="img/feature/03.jpg" alt />
                                    </div>
                                    <h4>Conversation &amp; Insights</h4>
                                    <p>
                                        Productservices are professional
                                        services that help market or advertise
                                        your business online base work.
                                    </p>
                                </div>
                                <a href="#" className="feature-link">
                                    Check Details
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Features section End ======*/}
            {/*====== Process Area Start ======*/}
            <section className="process-tab-section section-gap with-gradient-bg">
                <div className="container">
                    <div className="process-tab">
                        <ul
                            className="nav nav-tabs"
                            id="processTab"
                            role="tablist"
                        >
                            <li
                                className="nav-item analysis"
                                role="presentation"
                            >
                                <button
                                    className="nav-link active"
                                    data-bs-toggle="tab"
                                    data-bs-target="#analysis"
                                    type="button"
                                    role="tab"
                                >
                                    <i className="fal fa-chart-area" />
                                    Predictive Analysis
                                </button>
                            </li>
                            <li
                                className="nav-item building-edit"
                                role="presentation"
                            >
                                <button
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#building-edit"
                                    type="button"
                                    role="tab"
                                >
                                    <i className="fal fa-link" /> Link Building
                                    &amp; Edit
                                </button>
                            </li>
                            <li
                                className="nav-item team-collab"
                                role="presentation"
                            >
                                <button
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#team-collab"
                                    type="button"
                                    role="tab"
                                >
                                    <i className="fal fa-users" /> Team
                                    collaboration
                                </button>
                            </li>
                            <li
                                className="nav-item customize"
                                role="presentation"
                            >
                                <button
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#customize"
                                    type="button"
                                    role="tab"
                                >
                                    <i className="fal fa-edit" /> Customize
                                    Option
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="processTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="analysis"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="building-edit"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="team-collab"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="customize"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Process Area End ======*/}
            {/*====== Brand Section Start ======*/}
            <section className="section-gap">
                <div className="container">
                    <div className="brand-logos row">
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/11.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/12.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/13.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/14.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/15.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/11.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/12.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/13.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/14.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/15.png" alt="Image" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Brand Section End ======*/}
            {/*====== Features Text block Start =====*/}
            <section className="feature-text-blocks">
                <div className="feature-text-block section-gap section-border-top">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-10 wow fadeInLeft">
                                <div className="block-img">
                                    <img
                                        src="img/feature-text-block.jpg"
                                        alt="Features"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 wow fadeInRight">
                                <div className="block-text">
                                    <div className="section-title title-style-three">
                                        <span className="title-tag">
                                            Software Intregrations
                                        </span>
                                        <h2 className="title">
                                            Set it as the font in your
                                            application in iOs.
                                        </h2>
                                    </div>
                                    <p>
                                        Have stronger bones, muscles and joints
                                        and lower risk of developing for with
                                        osteoporosis capitalize on custom.
                                    </p>
                                    <p>
                                        Fitness is the condition of being
                                        physically fit and healthy and involves
                                        attributes that include, but are not
                                        limited to mental acuity,
                                        cardiorespiratory endurance, muscular
                                        strength, muscular endurance, body
                                        composition, and flexibility.
                                    </p>
                                    <a href className="block-btn">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-text-block section-gap section-border-top">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-10 order-lg-2 wow fadeInLeft">
                                <div className="block-img">
                                    <img
                                        src="img/feature-text-block.jpg"
                                        alt="Features"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 order-lg-1 wow fadeInRight">
                                <div className="block-text color-2">
                                    <div className="section-title title-style-three">
                                        <span className="title-tag">
                                            Team Intregrations
                                        </span>
                                        <h2 className="title">
                                            Set it as the font in your
                                            application in iOs.
                                        </h2>
                                    </div>
                                    <p>
                                        Have stronger bones, muscles and joints
                                        and lower risk of developing for with
                                        osteoporosis capitalize on custom.
                                    </p>
                                    <p>
                                        Fitness is the condition of being
                                        physically fit and healthy and involves
                                        attributes that include, but are not
                                        limited to mental acuity,
                                        cardiorespiratory endurance, muscular
                                        strength, muscular endurance, body
                                        composition, and flexibility.
                                    </p>
                                    <a href className="block-btn">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-text-block section-gap section-border-top">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-10 wow fadeInLeft">
                                <div className="block-img">
                                    <img
                                        src="img/feature-text-block.jpg"
                                        alt="Features"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 wow fadeInRight">
                                <div className="block-text color-3">
                                    <div className="section-title title-style-three">
                                        <span className="title-tag">
                                            Conversations
                                        </span>
                                        <h2 className="title">
                                            Set it as the font in your
                                            application in iOs.
                                        </h2>
                                    </div>
                                    <p>
                                        Have stronger bones, muscles and joints
                                        and lower risk of developing for with
                                        osteoporosis capitalize on custom.
                                    </p>
                                    <p>
                                        Fitness is the condition of being
                                        physically fit and healthy and involves
                                        attributes that include, but are not
                                        limited to mental acuity,
                                        cardiorespiratory endurance, muscular
                                        strength, muscular endurance, body
                                        composition, and flexibility.
                                    </p>
                                    <a href className="block-btn">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Features Text block End ======*/}
            {/*====== Testimonials area start ======*/}
            <section
                className="testimonial-section section-gap bgc"
                style={{
                    backgroundImage: "url(img/testimonial/testimonial-bg.jpg)",
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title title-style-three text-center mb-50">
                                <span className="title-tag">Testimonials</span>
                                <h2 className="title">
                                    Set it as the font in your application in
                                    iOs.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div
                        className="testimonial-boxes multiple-color-style row"
                        id="testimonialSliderOne"
                    >
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-1.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-2.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-1.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-2.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Testimonials area End ======*/}
            {/*====== News Section start ======*/}
            <section className="news-section section-gap">
                <div className="container">
                    <div className="section-title title-style-three mb-30">
                        <span className="title-tag">Insights</span>
                        <h2 className="title">News &amp; Feeds</h2>
                    </div>
                    <div className="row latest-news-boxes news-style-three">
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
                                                <a href="blog-single.html">
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
                                                <a href="blog-single.html">
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
                                            <a href="blog-single.html">
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
                                            <a href="blog-single.html">
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
                                            <a href="blog-single.html">
                                                Engineering projects for all
                                                technologies
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                                <a href="blog.html" className="load-more-btn">
                                    <i className="fal fa-newspaper" /> More News
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== News Section End ======*/}
            {/*====== Download section Start ======*/}
            <section className="download-section">
                <div className="container">
                    <div className="download-text">
                        <div className="section-title title-style-three">
                            <span className="title-tag">Get A Trail</span>
                            <h2 className="title">
                                Explore &amp; find your right <br /> destination
                                with app.
                            </h2>
                            <ul className="download-btns">
                                <li>
                                    <a href="#">
                                        <img
                                            src="img/app-store.png"
                                            alt="AppStore"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="img/play-store.png"
                                            alt="PlayStore"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="download-img">
                            <img src="img/cta-img.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Download section End ======*/}
            {/*====== Footer Start ======*/}
            <footer className="footer-three">
                <div className="container">
                    <div className="footer-top">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <ul className="footer-top-menu">
                                <li>
                                    <a href="#">Roadmap</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">Connect</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <a href="#">facebook</a>
                                </li>
                                <li>
                                    <a href="#">twtter</a>
                                </li>
                                <li>
                                    <a href="#">linkedin </a>
                                </li>
                                <li>
                                    <a href="#">pinterest</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5">
                                <div className="widget about-widget">
                                    <h5 className="widget-title">About us.</h5>
                                    <p>
                                        Finding the mental wherewithal to get
                                        into workout mode can take some serious
                                        effort, especially when all your
                                        activities happen at home. It can be
                                        done, but you have
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 offset-xl-1 col-lg-4 col-sm-6">
                                <div className="widget nav-widget">
                                    <h5 className="widget-title">
                                        Main Links.
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Reviews</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Best Products</a>
                                        </li>
                                        <li>
                                            <a href="#">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="#">Categories</a>
                                        </li>
                                        <li>
                                            <a href="#">Portfolio</a>
                                        </li>
                                        <li>
                                            <a href="#">Brands</a>
                                        </li>
                                        <li>
                                            <a href="#">Insights</a>
                                        </li>
                                        <li>
                                            <a href="#">Hiring</a>
                                        </li>
                                        <li>
                                            <a href="#">Business Strategy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 offset-xl-1 col-lg-3 col-sm-6">
                                <div className="widget contact-info-two">
                                    <h5 className="widget-title">
                                        Get in touch.
                                    </h5>
                                    <ul>
                                        <li>
                                            <span>New Address</span>
                                            14/A, New Home Town, Nyc
                                        </li>
                                        <li>
                                            <span>Head Quatar</span>
                                            71, Qlex Tower, Onthon, UK
                                        </li>
                                    </ul>
                                    <a href="#" className="info-btn">
                                        Contact Us
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*====== Footer End ======*/}
        </>
    );
};

export default index3;
