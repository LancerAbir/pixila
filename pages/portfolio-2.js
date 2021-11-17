import React from "react";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const portfolio2 = () => {
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
                                <h2 className="page-title">Case Study.</h2>
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
                        <div className="col-xl-3 col-md-6 graphics ui-ux consultancy">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/16.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 website ui-ux">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/17.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 ui-ux consultancy">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/18.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 website consultancy">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/19.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 graphics ui-ux">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/20.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 consultancy website">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/21.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 website ui-ux">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/22.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 graphics website">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/23.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 consultancy ui-ux">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/24.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 graphics ui-ux">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/25.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 consultancy graphics">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/26.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 graphics ui-ux">
                            <div className="portfolio-box-three mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/27.jpg)",
                                    }}
                                />
                                <div className="content">
                                    <div className="tags">
                                        <a href="#">App,</a>
                                        <a href="#">Design</a>
                                    </div>
                                    <h4 className="title">
                                        <a href="portfolio-details.html">
                                            Spay Mobile Banking App
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

export default portfolio2;
