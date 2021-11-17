import React from "react";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const service2 = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
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
                                            23+ Free elements blocks
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            Free web hosting &amp; domain
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            SSL with big certificates
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            1000+ Free active users
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            500GB Free Bandwidth
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
                                            23+ Free elements blocks
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            Free web hosting &amp; domain
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            SSL with big certificates
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            1000+ Free active users
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            500GB Free Bandwidth
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
                                            23+ Free elements blocks
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            Free web hosting &amp; domain
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            SSL with big certificates
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            1000+ Free active users
                                            <i className="fal fa-check" />
                                        </li>
                                        <li>
                                            500GB Free Bandwidth
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
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default service2;
