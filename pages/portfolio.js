import React from "react";
import PortfolioBGC from "../src/components/common/PortfolioBGC";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const portfolio = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <PortfolioBGC />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Portfolio Area Start ======*/}
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
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
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
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
                                    <a
                                        href="portfolio-details.html"
                                        className="link"
                                    >
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">Design,</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Kikado Mobile App Design
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Portfolio Area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default portfolio;
