import React from "react";
import Home3downloadSection from "../src/components/common/Home3downloadSection";
import Home3featureTextBlocks from "../src/components/common/Home3featureTextBlocks";
import Home3sectionGap from "../src/components/common/Home3sectionGap";
import Footer4 from "../src/layout/Footer/Footer4";
import Header3 from "../src/layout/Header/Header3";

const index3OnePage = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header3 />
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <section className="hero-area hero-area-three" id="home">
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
            <section
                className="features-section section-gap-top-90 section-gap-bottom"
                id="features"
            >
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
            <section
                className="process-tab-section section-gap with-gradient-bg"
                id="process"
            >
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
            <Home3sectionGap />
            {/*====== Brand Section End ======*/}
            {/*====== Features Text block Start =====*/}
            <Home3featureTextBlocks />
            {/*====== Features Text block End ======*/}
            {/*====== Testimonials area start ======*/}
            <section
                className="testimonial-section section-gap bgc"
                id="feedback"
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
            <section className="news-section section-gap" id="news">
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
            <Home3downloadSection />
            {/*====== Download section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer4 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default index3OnePage;
