import React from "react";
import ServiceBGC from "../src/components/common/ServiceBGC";
import ServicePricingSection from "../src/components/common/ServicePricingSection";
import ServiceProcessSection from "../src/components/common/ServiceProcessSection";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const service2 = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <ServiceBGC />
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
            <ServiceProcessSection />
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
            <ServicePricingSection />
            {/*====== Pricing Section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default service2;
