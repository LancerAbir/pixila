import React from "react";

const ServiceNewsSection = () => {
    return (
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
                                                Chemical engineering projects
                                                for all technologies
                                            </a>
                                        </h4>
                                        <p>
                                            As emerging technologies converge
                                            with urban planning, a revolution of
                                            automated, on-demand and ownerless
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
                                                Chemical engineering projects
                                                for all technologies
                                            </a>
                                        </h4>
                                        <p>
                                            As emerging technologies converge
                                            with urban planning, a revolution of
                                            automated, on-demand and ownerless
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
    );
};

export default ServiceNewsSection;
