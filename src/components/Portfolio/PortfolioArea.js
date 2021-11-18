import Link from "next/link";
import React from "react";

const PortfolioArea = () => {
    return (
        <section className="portfolio-area section-gap">
            <div className="container">
                <div className="portfolio-filter mb-10">
                    <ul>
                        <li className="active" data-filter="*">
                            All Works
                        </li>
                        <li data-filter=".graphics">Graphics</li>
                        <li data-filter=".website">Website</li>
                        <li data-filter=".ui-ux">UI/UX</li>
                        <li data-filter=".consultancy">Consultancy</li>
                    </ul>
                </div>
                <div className="portfolio-filter-items row">
                    <div className="col-lg-4 col-md-6 graphics consultancy">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/05.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 website graphics">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/06.jpg)",
                                }}
                            >
                                <a
                                    href="portfolio-details.html"
                                    className="link"
                                >
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ui-ux consultancy">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/07.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 website consultancy">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/07.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <a href="portfolio-details.html">
                                        Kikado Mobile App Design
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 graphics ui-ux">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/08.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ui-ux graphics">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/09.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 website consultancy">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/10.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 graphics website">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/11.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ui-ux consultancy">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/12.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 website ui-ux">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/13.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 graphics consultancy">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/14.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 website graphics">
                        <div className="portfolio-box-two mt-30">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/portfolio/15.jpg)",
                                }}
                            >
                                <Link href="/portfolio-details">
                                    <a className="link">
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <Link href="#">
                                        <a>Design,</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Development</a>
                                    </Link>
                                </div>
                                <h4 className="title">
                                    <Link href="/portfolio-details">
                                        <a>Kikado Mobile App Design</a>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioArea;
