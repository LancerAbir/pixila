import React from "react";

const index2 = () => {
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
            {/*====== About section Start ======*/}
            <div className="about-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10 wow fadeInLeft">
                            <div className="about-experience">
                                <img src="img/about-img.jpg" alt="About" />
                                <div className="experience-tag">
                                    <img
                                        src="img/experience-tag.png"
                                        alt="Experience"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-10 wow fadeInRight">
                            <div className="about-text about-text-two mt-md-gap-50">
                                <div className="section-title title-style-two mb-30">
                                    <span className="title-tag">About Us</span>
                                    <h2 className="title">
                                        We will satisfy you by our work ideas
                                    </h2>
                                </div>
                                <p>
                                    Their creativity, innovation, technological
                                    expertise, and project completion steps were
                                    impressive. Project management was
                                    professional. We’re a full-service creative
                                    digital marketing agency, collaborating with
                                    brands all over the world.
                                </p>
                                <ul className="mt-40">
                                    <li>
                                        <i className="fal fa-check" /> We
                                        deliver Values for every business{" "}
                                    </li>
                                    <li>
                                        <i className="fal fa-check" /> We make
                                        Technology more Human{" "}
                                    </li>
                                    <li>
                                        <i className="fal fa-check" /> We make
                                        Technology more Human
                                    </li>
                                    <li>
                                        <i className="fal fa-check" /> 24/7
                                        Online Support
                                    </li>
                                </ul>
                                <div className="about-author">
                                    <div className="author-img">
                                        <img
                                            src="img/about-author.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="author-desc">
                                        <h5>Rosalina D. William</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*====== About section End ======*/}
            {/*====== Service Area Start ======*/}
            <section className="service-area service-area-cta-bottom grey-bg">
                <div className="container">
                    <div className="section-title title-style-two mb-30">
                        <span className="title-tag">Services</span>
                        <h2 className="title">Solutions we provide</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div
                            className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="service-box-two primary-color-2 mt-30">
                                <span className="box-count">01</span>
                                <h4 className="title">
                                    <a href="#">Digital Product Developoment</a>
                                </h4>
                                <p>
                                    We enjoy working with discerning clients,
                                    people for whom quality, service, integrity
                                    &amp; aesthetics matter deeply.
                                </p>
                                <a
                                    href="service-2.html"
                                    className="service-link"
                                >
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="service-box-two primary-color-2 mt-30">
                                <span className="box-count">02</span>
                                <h4 className="title">
                                    <a href="service-2.html">
                                        General Consulting Process
                                    </a>
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
                        <div
                            className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                            data-wow-delay="0.7s"
                        >
                            <div className="service-box-two primary-color-2 mt-30">
                                <span className="box-count">03</span>
                                <h4 className="title">
                                    <a href="service-2.html">
                                        Hire in Fixed Contracting
                                    </a>
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
            {/*====== CTA Start ======*/}
            <section className="cta-section-two">
                <div className="container-fluid fluid-container-left pe-0">
                    <div className="cta-text">
                        <h4 className="cta-title">
                            Do you need similar project? Call Us{" "}
                            <a href="#">+ 422 081 748 212</a>
                        </h4>
                        <ul className="cta-social-icon">
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
                    </div>
                </div>
            </section>
            {/*====== CTA End ======*/}
            {/*====== Skill area Start ======*/}
            <section className="skill-section with-absolute-image">
                <div className="container">
                    <div className="row justify-content-lg-end justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="skill-text">
                                <div className="section-title title-style-two mb-30">
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
                                    digital marketing agency, collaborating with
                                    brands
                                </p>
                                <div className="pie-charts two-box mt-40">
                                    <div className="single-pie-chart">
                                        <div
                                            className="chart"
                                            data-percent={61}
                                            data-bar-color="#4c32fb"
                                        >
                                            <span>61</span>
                                        </div>
                                        <h4 className="title">Work Progress</h4>
                                        <p>
                                            As emerging technologies converge
                                            with urban planning, a revolution of
                                            automated, on-demand
                                        </p>
                                    </div>
                                    <div className="single-pie-chart">
                                        <div
                                            className="chart"
                                            data-percent={85}
                                            data-bar-color="#4c32fb"
                                        >
                                            <span>85</span>
                                        </div>
                                        <h4 className="title">Projects Done</h4>
                                        <p>
                                            As emerging technologies converge
                                            with urban planning, a revolution of
                                            automated, on-demand
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Skill area End ======*/}
            {/*====== Brand section Start ======*/}
            <section
                className="brand-section-two bgc"
                style={{
                    backgroundImage: "url(img/brand/brand-bg.jpg)",
                }}
            >
                <div className="container-fluid">
                    <div className="brand-logos row justify-content-between align-items-center">
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/6.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/7.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/8.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/9.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/10.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/6.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/7.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/8.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/9.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/10.png" alt="Image" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Brand section End ======*/}
            {/*====== Portfolio Arae Start ======*/}
            <section className="portfolio-section section-gap">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-4">
                            <div className="section-title title-style-two">
                                <span className="title-tag">Portfolio</span>
                                <h2 className="title">Our case study</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row portfolio-slider">
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/01.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4>
                                        <a href="#">Develop solution</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/02.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4>
                                        <a href="#">Develop solution</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/03.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4>
                                        <a href="#">Develop solution</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/04.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4>
                                        <a href="#">Develop solution</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/01.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4>
                                        <a href="#">Develop solution</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/02.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4>
                                        <a href="#">Develop solution</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/03.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4>
                                        <a href="#">Develop solution</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/04.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4>
                                        <a href="#">Develop solution</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Portfolio Arae End ======*/}
            {/*====== Testimonials area start ======*/}
            <section className="testimonial-section section-gap-top secondary-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title title-style-two color-white text-center mb-50">
                                <span className="title-tag">Testimonials</span>
                                <h2 className="title">Users Feedback</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-7 col-lg-8 col-md-9">
                            <div className="testimonial-img mb-negative">
                                <img
                                    src="img/testimonial/testimonial-img.jpg"
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 ms-auto">
                            <div
                                className="testimonial-boxes-two mb-negative"
                                id="testimonialSliderTwo"
                            >
                                <div className="testimonial-box">
                                    <p>
                                        As a fashion influencer with almost 2
                                        million followers, @barbiestyle selected
                                        the boldest looks for the launch as her
                                        fall wardrobe transitions away from her
                                        summer staples.
                                    </p>
                                    <div className="author-info">
                                        <h4>Miranda H. Halim</h4>
                                        <span>Founder</span>
                                    </div>
                                </div>
                                <div className="testimonial-box">
                                    <p>
                                        As a fashion influencer with almost 2
                                        million followers, @barbiestyle selected
                                        the boldest looks for the launch as her
                                        fall wardrobe transitions away from her
                                        summer staples.
                                    </p>
                                    <div className="author-info">
                                        <h4>Miranda H. Halim</h4>
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
            <section className="news-section grey-bg extra-gap-top">
                <div className="container">
                    <div className="section-title title-style-two mb-30">
                        <span className="title-tag">News</span>
                        <h2 className="title">New and latest insights</h2>
                    </div>
                    <div className="row latest-news-boxes">
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
                                                        <i className="fal fa-calendar-alt" />{" "}
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
                                                        <i className="fal fa-calendar-alt" />{" "}
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
                                                "url(img/latest-news/01.jpg)",
                                        }}
                                    />
                                    <div className="content">
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />{" "}
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
                                                "url(img/latest-news/01.jpg)",
                                        }}
                                    />
                                    <div className="content">
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />{" "}
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
                                                "url(img/latest-news/01.jpg)",
                                        }}
                                    />
                                    <div className="content">
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />{" "}
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
            {/*====== Footer Start ======*/}
            <footer className="footer-two">
                <div className="footer-top">
                    <div className="container">
                        <div className="d-sm-flex justify-content-between align-items-center">
                            <div className="footer-logo mb-xs-gap-30">
                                <img src="img/logo-2.png" alt="Image" />
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
                                                    <a href="blog-single.html">
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
                                                    <a href="blog-single.html">
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
                                                    <a href="blog-single.html">
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

export default index2;
