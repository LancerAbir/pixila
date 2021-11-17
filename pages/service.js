import React from "react";
import ServiceBGC from "../src/components/common/ServiceBGC";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const service = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <ServiceBGC />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Service Area Start ======*/}
            <section className="service-area section-gap-bottom section-gap-top-90">
                <div className="container">
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
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="service-box-two mt-30">
                                <span className="box-count">04</span>
                                <h4 className="title">
                                    <a href="#">Pro Game Developemnt</a>
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
                                <span className="box-count">05</span>
                                <h4 className="title">
                                    <a href="#">Wordpress Theme Develop</a>
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
                                <span className="box-count">06</span>
                                <h4 className="title">
                                    <a href="#">
                                        24/7 Online &amp; Offline Support
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
            {/*====== Skill area Start ======*/}
            <section className="skill-section section-gap-bottom grey-bg">
                <div className="container-fluid p-0 overflow-hidden">
                    <div className="skillset-videos row skillset-videos-slider">
                        <div className="col">
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
                                            "url(img/skillset/slide-01.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">
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
                                            "url(img/skillset/slide-03.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">
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
                                            "url(img/skillset/slide-02.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container section-gap-top">
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
                                planning, a revolution of automated, on-demand
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
                                planning, a revolution of automated, on-demand
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
                                planning, a revolution of automated, on-demand
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
                                planning, a revolution of automated, on-demand
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Skill area End ======*/}
            {/*====== News Section start ======*/}
            <section className="news-section section-gap">
                <div className="container">
                    <div className="section-title text-center mb-30">
                        <span className="title-tag">News</span>
                        <h2 className="title">New and latest insights</h2>
                    </div>
                    <div className="row latest-news-boxes boxes-primary-color boxes-with-border">
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
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default service;
