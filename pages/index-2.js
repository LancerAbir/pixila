import React from "react";
import Home2brandSectionTwo from "../src/components/common/Home2brandSectionTwo";
import Home2ctaSectionTwo from "../src/components/common/Home2ctaSectionTwo";
import Home2skillSection from "../src/components/common/Home2skillSection";
import Footer3 from "../src/layout/Footer/Footer3";
import Header1 from "../src/layout/Header/Header1";

const index2 = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
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
            <Home2ctaSectionTwo />
            {/*====== CTA End ======*/}
            {/*====== Skill area Start ======*/}
            <Home2skillSection />
            {/*====== Skill area End ======*/}
            {/*====== Brand section Start ======*/}
            <Home2brandSectionTwo />
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
            <Footer3 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default index2;
