import React from "react";

const index2OnePage = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <header className="header-two">
                <div className="container">
                    <div className="header-topbar d-none d-md-block">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="topbar-left d-flex align-items-center">
                                <a href="#" className="hiring-btn">
                                    <i className="fal fa-briefcase" />
                                    <span>
                                        We are <span>hiring</span>
                                    </span>
                                </a>
                                <ul className="contact-info">
                                    <li>
                                        <i className="fal fa-phone" />
                                        <a href="#">987-098-756-09</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topbar-right d-flex justify-content-end">
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
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-navbar">
                        <div className="d-flex align-items-center">
                            <div className="site-logo">
                                <a href="index.html">
                                    <img src="img/logo-2.png" alt="Pixila" />
                                </a>
                            </div>
                            <nav className="site-nav-menu">
                                <ul className="primary-menu onepage-nav">
                                    <li className="current">
                                        <a href="#home">Home</a>
                                    </li>
                                    <li>
                                        <a href="#about">About us</a>
                                    </li>
                                    <li>
                                        <a href="#services">Services</a>
                                    </li>
                                    <li>
                                        <a href="#portfolio">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="#feedbacks">Feedbacks</a>
                                    </li>
                                    <li>
                                        <a href="#news">News</a>
                                    </li>
                                </ul>
                                <a href="#" className="nav-close">
                                    <i className="fal fa-times" />
                                </a>
                            </nav>
                            <a href="#" className="nav-toggler">
                                <i className="fal fa-bars" />
                            </a>
                        </div>
                    </div>
                    <div className="header-contact-btn">
                        <a href="#">
                            Get A Free Quote
                            <span>info@webmail.com</span>
                            <span className="icon">
                                <i className="flaticon-email" />
                            </span>
                        </a>
                    </div>
                </div>
            </header>
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <section className="hero-area hero-area-two" id="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-5 col-md-10">
                            <div className="hero-text">
                                <h2
                                    className="title wow fadeInDown"
                                    data-wow-delay="0.3s"
                                >
                                    Design, Development, &amp; Identity For Your
                                    Product.
                                </h2>
                                <p
                                    className="wow fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    Let's create something together
                                </p>
                                <ul className="social-counts">
                                    <li
                                        className="facebook wow fadeInUp"
                                        data-wow-delay="0.7s"
                                    >
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                            <span>10000 Like</span>
                                        </a>
                                    </li>
                                    <li
                                        className="dribbble wow fadeInUp"
                                        data-wow-delay="0.9s"
                                    >
                                        <a href="#">
                                            <i className="fab fa-dribbble" />
                                            <span>500K Followers</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-md-10 mx-auto">
                            <div
                                className="hero-video wow fadeInRight"
                                data-wow-delay="0.3s"
                            >
                                <div className="hero-video-wrap">
                                    <a
                                        href="https://www.youtube.com/watch?v=pVE92TNDwUk"
                                        className="video-btn popup-video"
                                    >
                                        Play
                                    </a>
                                    <img
                                        src="img/hero-img/hero-02.jpg"
                                        alt="HeroImage"
                                    />
                                    <div className="project-count">
                                        <span>
                                            <span className="count">20</span>
                                            Projects Done
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Hero Area Start ======*/}
            {/*====== About section Start ======*/}
            <section className="about-section section-gap" id="about">
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
                                        deliver Values for every business
                                    </li>
                                    <li>
                                        <i className="fal fa-check" /> We make
                                        Technology more Human
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
            </section>
            {/*====== About section End ======*/}
            {/*====== Service Area Start ======*/}
            <section
                className="service-area service-area-cta-bottom grey-bg"
                id="services"
            >
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
                                <a href="#" className="service-link">
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
                        <div
                            className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                            data-wow-delay="0.7s"
                        >
                            <div className="service-box-two primary-color-2 mt-30">
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
            {/*====== CTA Start ======*/}
            <section className="cta-section-two">
                <div className="container-fluid fluid-container-left pe-0">
                    <div className="cta-text">
                        <h4 className="cta-title">
                            Do you need similar project? Call Us
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
            <section className="portfolio-section section-gap" id="portfolio">
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
            <section
                className="testimonial-section section-gap-top secondary-bg"
                id="feedbacks"
            >
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
            <section className="news-section grey-bg extra-gap-top" id="news">
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
                                                    <i className="fal fa-calendar-alt" />
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
                                                    <i className="fal fa-calendar-alt" />
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
                                                    <i className="fal fa-calendar-alt" />
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

export default index2OnePage;
