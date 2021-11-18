import React from "react";

const Index2NewsSection = () => {
    return (
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
                                            <a href="blog-single.html">
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
    );
};

export default Index2NewsSection;
