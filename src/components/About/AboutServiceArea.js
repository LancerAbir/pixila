import React from "react";

const AboutServiceArea = () => {
    return (
        <section className="service-area section-gap grey-bg">
            <div className="container">
                <div className="section-title text-center mb-30">
                    <span className="title-tag">Services</span>
                    <h2 className="title">Solutions we provide</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="service-box-two mt-30">
                            <span className="box-count">01</span>
                            <h4 className="title">
                                <a href="#">Digital Product Developoment</a>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
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
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
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
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
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
    );
};

export default AboutServiceArea;
