import React from "react";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const portfolioDetails = () => {
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
                                <h2 className="page-title">Case Details.</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>Portfolio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== Portfolio Area Start ======*/}
            <section className="portfolio-area portfolio-details section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="portfolio-details-gallery row">
                                <div className="col-12">
                                    <div className="image">
                                        <img
                                            src="img/portfolio/portfolio-details/01.jpg"
                                            alt="Portfolio"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="image mt-30">
                                        <img
                                            src="img/portfolio/portfolio-details/02.jpg"
                                            alt="Portfolio"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="image mt-30">
                                        <img
                                            src="img/portfolio/portfolio-details/03.jpg"
                                            alt="Portfolio"
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="image mt-30">
                                        <img
                                            src="img/portfolio/portfolio-details/04.jpg"
                                            alt="Portfolio"
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="image mt-30">
                                        <img
                                            src="img/portfolio/portfolio-details/05.jpg"
                                            alt="Portfolio"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-10">
                            <div className="portfolio-desc">
                                <h3 className="title">ProMan In Black Inc.</h3>
                                <p>
                                    Right understanding of the definition and
                                    key characteristics of project is of
                                    significant importance. Any project is not
                                    just a way to make or do something but it’s
                                    an opportunity to achieve some desired
                                    result by implementing a systematic
                                    management approach (for example, producing
                                    a product or sharing knowledge).
                                </p>
                                <div className="portfolio-info">
                                    <h6>Projects Info</h6>
                                    <ul>
                                        <li>
                                            <span>Category:</span>
                                            <a href="#">Branding,</a>
                                            <a href="#">Design</a>
                                        </li>
                                        <li>
                                            <span>Date:</span> June 21, 2021
                                        </li>
                                        <li>
                                            <span>Tags:</span>
                                            <a href="#">color,</a>
                                            <a href="#">design,</a>
                                            <a href="#">theme,</a>
                                            <a href="#">ui,</a>
                                            <a href="#">ux</a>
                                        </li>
                                    </ul>
                                    <a href="#" className="main-btn mt-30">
                                        Live Preview
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                    <span className="icon">
                                        <i className="flaticon-files" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-nav mt-60">
                        <div className="prev-post">
                            <a href="#">
                                <i className="fal fa-long-arrow-left" /> Prev
                                Project
                            </a>
                        </div>
                        <div className="dot-icon">
                            <img
                                src="img/portfolio/portfolio-details/nav-dots.png"
                                alt="Dots"
                            />
                        </div>
                        <div className="next-post">
                            <a href="#">
                                Next Project
                                <i className="fal fa-long-arrow-right" />
                            </a>
                        </div>
                    </div>
                    <div className="related-portfolio">
                        <h3 className="related-portfolio-title">
                            Related projects
                        </h3>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
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
                            <div className="col-lg-4 col-md-6">
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
                            <div className="col-lg-4 col-md-6">
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

export default portfolioDetails;
