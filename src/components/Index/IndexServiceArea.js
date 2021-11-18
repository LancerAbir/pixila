import React from "react";

const IndexServiceArea = () => {
    return (
        <section className="service-area section-gap primary-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="section-title text-center mb-30">
                            <span className="title-tag">Our Services</span>
                            <h2 className="title">
                                We provide wide range of digital
                                <span>service</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div
                        className="col-md-6 col-sm-10 wow fadeInLeft"
                        data-wow-delay="0.3s"
                    >
                        <div className="service-box mt-30">
                            <div className="row align-items-center">
                                <div className="col-xl-6">
                                    <div className="service-img">
                                        <img src="img/service/01.png" alt />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="service-desc">
                                        <h4>Digital Product</h4>
                                        <p>
                                            Productservices are professional
                                            services that help market or
                                            advertise your business online.
                                        </p>
                                        <a
                                            href="service-2.html"
                                            className="service-link"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-sm-10 wow fadeInRight"
                        data-wow-delay="0.4s"
                    >
                        <div className="service-box mt-30">
                            <div className="row align-items-center">
                                <div className="col-xl-6">
                                    <div className="service-img">
                                        <img src="img/service/02.png" alt />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="service-desc">
                                        <h4>Game Development</h4>
                                        <p>
                                            Productservices are professional
                                            services that help market or
                                            advertise your business online.
                                        </p>
                                        <a
                                            href="service.html"
                                            className="service-link"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-sm-10 wow fadeInLeft"
                        data-wow-delay="0.5s"
                    >
                        <div className="service-box pro-service mt-30">
                            <div className="row align-items-center">
                                <div className="col-xl-6">
                                    <div className="service-img">
                                        <img src="img/service/03.png" alt />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="service-desc">
                                        <h4>
                                            <span>Pro</span>Consultancy
                                        </h4>
                                        <p>
                                            Productservices are professional
                                            services that help market or
                                            advertise your business online.
                                        </p>
                                        <a
                                            href="service-2.html"
                                            className="service-link"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-sm-10 wow fadeInRight"
                        data-wow-delay="0.6s"
                    >
                        <div className="service-box mt-30">
                            <div className="row align-items-center">
                                <div className="col-xl-6">
                                    <div className="service-img">
                                        <img src="img/service/04.png" alt />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="service-desc">
                                        <h4>Digital Marketing</h4>
                                        <p>
                                            Productservices are professional
                                            services that help market or
                                            advertise your business online.
                                        </p>
                                        <a
                                            href="service-2.html"
                                            className="service-link"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ticket-generate mt-30 wow fadeInUp">
                    <p>
                        Need Help With Your IT Endeavors? Contact Us to Get a
                        Pro Service!
                    </p>
                    <a href="#">
                        <i className="fal fa-ticket" /> Generate A Ticket
                    </a>
                </div>
            </div>
        </section>
    );
};

export default IndexServiceArea;