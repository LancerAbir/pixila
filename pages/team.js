import React from "react";

const team = () => {
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
                                <h2 className="page-title">Our Experts.</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== Team section Start ======*/}
            <section className="team-section section-gap-bottom section-gap-top-90">
                <div className="container">
                    <div className="team-members row">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member mt-30">
                                <div className="member-img">
                                    <img
                                        src="img/teams/01.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Fonder
                                    </span>
                                    <h5 className="name">Romada D. Darblin</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member mt-30">
                                <div className="member-img">
                                    <img
                                        src="img/teams/02.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">CEO</span>
                                    <h5 className="name">
                                        Kilixer B. Brownila
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member mt-30">
                                <div className="member-img">
                                    <img
                                        src="img/teams/03.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Designer
                                    </span>
                                    <h5 className="name">Dumble Y. Yankies</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member mt-30">
                                <div className="member-img">
                                    <img
                                        src="img/teams/04.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Developer
                                    </span>
                                    <h5 className="name">Miranda H. Halim</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member mt-30">
                                <div className="member-img">
                                    <img
                                        src="img/teams/05.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Fonder
                                    </span>
                                    <h5 className="name">Romada D. Darblin</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member mt-30">
                                <div className="member-img">
                                    <img
                                        src="img/teams/06.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">CEO</span>
                                    <h5 className="name">
                                        Kilixer B. Brownila
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member mt-30">
                                <div className="member-img">
                                    <img
                                        src="img/teams/07.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Designer
                                    </span>
                                    <h5 className="name">Dumble Y. Yankies</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member mt-30">
                                <div className="member-img">
                                    <img
                                        src="img/teams/08.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Developer
                                    </span>
                                    <h5 className="name">Miranda H. Halim</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Team section End ======*/}
            {/*====== Skill area Start ======*/}
            <section className="skill-section with-gallery">
                <div className="grey-bg skill-section-top">
                    <div className="container">
                        <div className="section-title text-center mb-50">
                            <span className="title-tag">Counter</span>
                            <h2 className="title">Some Fun Facts</h2>
                        </div>
                        <div className="pie-charts">
                            <div className="single-pie-chart">
                                <div
                                    className="chart"
                                    data-percent={61}
                                    data-bar-color="#1baaa0"
                                >
                                    <span>61</span>
                                </div>
                                <h4 className="title">Work Progress</h4>
                                <p>
                                    As emerging technologies converge with urban
                                    planning, a revolution of automated,
                                    on-demand
                                </p>
                            </div>
                            <div className="single-pie-chart">
                                <div
                                    className="chart"
                                    data-percent={85}
                                    data-bar-color="#1baaa0"
                                >
                                    <span>85</span>
                                </div>
                                <h4 className="title">Projects Done</h4>
                                <p>
                                    As emerging technologies converge with urban
                                    planning, a revolution of automated,
                                    on-demand
                                </p>
                            </div>
                            <div className="single-pie-chart">
                                <div
                                    className="chart"
                                    data-percent={61}
                                    data-bar-color="#1baaa0"
                                >
                                    <span>61</span>
                                </div>
                                <h4 className="title">Work Progress</h4>
                                <p>
                                    As emerging technologies converge with urban
                                    planning, a revolution of automated,
                                    on-demand
                                </p>
                            </div>
                            <div className="single-pie-chart">
                                <div
                                    className="chart"
                                    data-percent={85}
                                    data-bar-color="#1baaa0"
                                >
                                    <span>85</span>
                                </div>
                                <h4 className="title">Projects Done</h4>
                                <p>
                                    As emerging technologies converge with urban
                                    planning, a revolution of automated,
                                    on-demand
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="skill-gallery">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="image mb-30">
                                    <img
                                        src="img/skillset/06.jpg"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="image mb-30">
                                    <img
                                        src="img/skillset/07.jpg"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Skill area End ======*/}
            {/*====== Newsletter Start ======*/}
            <div className="container">
                <div className="newsletter-form">
                    <div className="row align-items-center">
                        <div className="col-xl-5">
                            <div className="section-title">
                                <span className="title-tag">Newsletter</span>
                                <h2 className="title">Get weekly updates</h2>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="newsletter-form-wrap">
                                <form action="#">
                                    <div className="input-fields">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Full name"
                                            />
                                            <span className="icon">
                                                <i className="fal fa-user" />
                                            </span>
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Enter email address"
                                            />
                                            <span className="icon">
                                                <i className="fal fa-envelope" />
                                            </span>
                                        </div>
                                        <div className="input-field">
                                            <button type="submit">
                                                <i className="fal fa-paper-plane" />{" "}
                                                Subscribe Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-logos section-gap row">
                    <div className="col">
                        <a href="#" className="brand-logo">
                            <img src="img/brand/1.png" alt="Image" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="brand-logo">
                            <img src="img/brand/2.png" alt="Image" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="brand-logo">
                            <img src="img/brand/3.png" alt="Image" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="brand-logo">
                            <img src="img/brand/4.png" alt="Image" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="brand-logo">
                            <img src="img/brand/5.png" alt="Image" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="brand-logo">
                            <img src="img/brand/1.png" alt="Image" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="brand-logo">
                            <img src="img/brand/2.png" alt="Image" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="brand-logo">
                            <img src="img/brand/3.png" alt="Image" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="brand-logo">
                            <img src="img/brand/4.png" alt="Image" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="brand-logo">
                            <img src="img/brand/5.png" alt="Image" />
                        </a>
                    </div>
                </div>
            </div>
            {/*====== Newsletter End ======*/}
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

export default team;
