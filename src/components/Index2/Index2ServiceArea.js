import Link from "next/link";
import React from "react";

const Index2ServiceArea = () => {
    return (
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
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Digital Product Developoment
                                    </a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="/service-2">
                                <a className="service-link">
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <div className="service-box-two primary-color-2 mt-30">
                            <span className="box-count">02</span>
                            <h4 className="title">
                                <Link href="/service-2">
                                    <a>General Consulting Process</a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="service-link"
                                >
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                        data-wow-delay="0.7s"
                    >
                        <div className="service-box-two primary-color-2 mt-30">
                            <span className="box-count">03</span>
                            <h4 className="title">
                                <Link href="/service-2">
                                    <a>Hire in Fixed Contracting</a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="service-link"
                                >
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index2ServiceArea;
