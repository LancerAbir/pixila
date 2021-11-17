import React from "react";
import Footer1 from "../src/layout/Footer/Footer1";
import Header6 from "../src/layout/Header/Header6";

const indexOnePage = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header6 />
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <section className="hero-area" id="home">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5">
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
                                    Replication is the <br /> presentation of
                                    <br /> our <span>capabilities</span>
                                </h2>
                                <ul className="hero-btns">
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.7s"
                                    >
                                        <a href="#" className="main-btn">
                                            Get Started Now
                                        </a>
                                    </li>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.9s"
                                    >
                                        <a
                                            href="#"
                                            className="main-btn main-btn-2"
                                        >
                                            Learn More
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-10">
                            <div
                                className="hero-img text-lg-end text-center wow fadeInRight"
                                data-wow-delay="0.3s"
                            >
                                <img
                                    src="img/hero-img/hero-01.png"
                                    alt="HeroImage"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Hero Area Start ======*/}
            {/*====== Service Area Start ======*/}
            <section
                className="service-area section-gap primary-bg"
                id="services"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section-title text-center mb-30">
                                <span className="title-tag">Our Services</span>
                                <h2 className="title">
                                    We provide wide range of digital
                                    <span>service</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div
                            className="col-md-6 col-sm-10 wow fadeInLeft"
                            data-wow-delay="0.3s"
                        >
                            <div className="service-box mt-30">
                                <div className="row align-items-center">
                                    <div className="col-xl-6">
                                        <div className="service-img">
                                            <img src="img/service/01.png" alt />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-desc">
                                            <h4>Digital Product</h4>
                                            <p>
                                                Productservices are professional
                                                services that help market or
                                                advertise your business online.
                                            </p>
                                            <a
                                                href="#"
                                                className="service-link"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-sm-10 wow fadeInRight"
                            data-wow-delay="0.4s"
                        >
                            <div className="service-box mt-30">
                                <div className="row align-items-center">
                                    <div className="col-xl-6">
                                        <div className="service-img">
                                            <img src="img/service/02.png" alt />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-desc">
                                            <h4>Game Development</h4>
                                            <p>
                                                Productservices are professional
                                                services that help market or
                                                advertise your business online.
                                            </p>
                                            <a
                                                href="#"
                                                className="service-link"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-sm-10 wow fadeInLeft"
                            data-wow-delay="0.5s"
                        >
                            <div className="service-box pro-service mt-30">
                                <div className="row align-items-center">
                                    <div className="col-xl-6">
                                        <div className="service-img">
                                            <img src="img/service/03.png" alt />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-desc">
                                            <h4>
                                                <span>Pro</span>Consultancy
                                            </h4>
                                            <p>
                                                Productservices are professional
                                                services that help market or
                                                advertise your business online.
                                            </p>
                                            <a
                                                href="#"
                                                className="service-link"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-sm-10 wow fadeInRight"
                            data-wow-delay="0.6s"
                        >
                            <div className="service-box mt-30">
                                <div className="row align-items-center">
                                    <div className="col-xl-6">
                                        <div className="service-img">
                                            <img src="img/service/04.png" alt />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-desc">
                                            <h4>Digital Marketing</h4>
                                            <p>
                                                Productservices are professional
                                                services that help market or
                                                advertise your business online.
                                            </p>
                                            <a
                                                href="#"
                                                className="service-link"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-generate mt-30 wow fadeInUp">
                        <p>
                            Need Help With Your IT Endeavors? Contact Us to Get
                            a Pro Service!
                        </p>
                        <a href="#">
                            <i className="fal fa-ticket" /> Generate A Ticket
                        </a>
                    </div>
                </div>
            </section>
            {/*====== Service Area End ======*/}
            {/*====== About section Start ======*/}
            <div className="about-section section-gap" id="about">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8 wow fadeInLeft">
                            <div className="about-illustration mb-md-gap-50">
                                <img src="img/illustration/01.png" alt />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 wow fadeInRight">
                            <div className="about-text">
                                <div className="section-title mb-30">
                                    <span className="title-tag">About Us</span>
                                    <h2 className="title">
                                        Get an amazing experience with quality
                                        level <span>team</span>
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
            </div>
            {/*====== About section End ======*/}
            {/*====== Counter area Start ======*/}
            <section className="counter-section">
                <div className="container">
                    <div className="counter-inner">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="counter-wrap">
                                        <i className="fal fa-user" />
                                        <span className="counter">1165</span>
                                    </div>
                                    <h3 className="title">Projects Executed</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="counter-wrap">
                                        <i className="fal fa-globe" />
                                        <span className="counter">219</span>
                                    </div>
                                    <h3 className="title">Global Presence</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="counter-wrap">
                                        <i className="fal fa-users" />
                                        <span className="counter">5</span>k+
                                    </div>
                                    <h3 className="title">Active Clients</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="counter-wrap">
                                        <i className="fal fa-book" />
                                        <span className="counter">500</span>+
                                    </div>
                                    <h3 className="title">Recognition</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Counter area End ======*/}
            {/*====== Skill area Start ======*/}
            <section className="skill-section section-gap-top">
                <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-lg-6 col-md-10">
                            <div className="skill-text mb-50">
                                <div className="section-title mb-30">
                                    <span className="title-tag">
                                        Our Skillset
                                    </span>
                                    <h2 className="title">
                                        Effective business delivery solutions at
                                        all <span>glance</span>
                                    </h2>
                                </div>
                                <p>
                                    Productservices are professional services
                                    that help market or advertise your business
                                    <br /> online. Best Way to Manage and Share
                                    Work Resources.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-10">
                            <div className="progress-bars mb-md-gap-60">
                                <div
                                    className="single-progress"
                                    data-count={72}
                                >
                                    <div className="title">
                                        <span>Work Progress</span>
                                        <span className="progress-counter">
                                            <span className="count">72</span>%
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
                <div className="skillset-videos fluid-container-left overflow-hidden">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="skillset-video active mb-xs-gap-30">
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
                                            "url(img/skillset/01.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="skillset-video">
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
                                            "url(img/skillset/02.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Skill area End ======*/}
            {/*====== Team section Start ======*/}
            <section className="team-section section-gap" id="team">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title text-center mb-50">
                                <span className="title-tag">Team</span>
                                <h2 className="title">
                                    Meet with our awesome and exper
                                    <span>team</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="team-members team-member-slider row">
                        <div className="col">
                            <div className="team-member">
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
                        <div className="col">
                            <div className="team-member">
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
                        <div className="col">
                            <div className="team-member">
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
                        <div className="col">
                            <div className="team-member">
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
                        <div className="col">
                            <div className="team-member">
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
                        <div className="col">
                            <div className="team-member">
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
                        <div className="col">
                            <div className="team-member">
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
                        <div className="col">
                            <div className="team-member">
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
            {/*====== CTA section Start ======*/}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-inner">
                        <div className="row align-items-center">
                            <div className="col-xl-5">
                                <div className="cta-text mb-lg-gap-30">
                                    <div className="section-title">
                                        <span className="title-tag">
                                            Make Request
                                        </span>
                                        <h2 className="title">
                                            Make custom order
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="cta-form">
                                    <form action="#">
                                        <div className="field-groups">
                                            <div className="input-field">
                                                <input
                                                    type="email"
                                                    placeholder="Enter email address"
                                                />
                                                <span className="icon">
                                                    <i className="fal fa-envelope" />
                                                </span>
                                            </div>
                                            <div className="input-field">
                                                <input
                                                    type="text"
                                                    placeholder="Your Estimate"
                                                />
                                                <span className="icon">
                                                    <i className="fal fa-pencil" />
                                                </span>
                                            </div>
                                            <div className="input-field">
                                                <button type="submit">
                                                    <i className="fal fa-long-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== CTA section End ======*/}
            {/*====== Testimonials area start ======*/}
            <section
                className="testimonial-section with-pattern testimonial-brand-section primary-bg"
                id="feedbacks"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50">
                                <span className="title-tag">Testimonials</span>
                                <h2 className="title">
                                    Clients <span>feedbacks</span>
                                </h2>
                            </div>
                            <div className="testimonial-slider-progress mb-40">
                                <span className="line-one" />
                                <span className="line-two" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="testimonial-boxes row"
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
                    <div className="brand-logos section-gap-top row justify-content-between align-items-center">
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
            </section>
            {/*====== Testimonials area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer1 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default indexOnePage;
