import React from "react";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const process = () => {
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
                                <h2 className="page-title">Our Process.</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>Process</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== Process Area Start ======*/}
            <section className="process-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="process-img mb-md-gap-50">
                                <img src="img/process-img.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="process-text ps-xl-5">
                                <div className="section-title mb-20">
                                    <span className="title-tag">Process</span>
                                    <h2 className="title">
                                        Get an amazing experience
                                    </h2>
                                </div>
                                <p>
                                    Productservices are professional services
                                    that help market or advertise your business
                                    online. Best Way to Manage and Share Work
                                    Resources.
                                </p>
                                <ul className="process-list mt-40">
                                    <li>
                                        <span className="count">01</span>
                                        <h4>
                                            Projects discussions with client
                                        </h4>
                                        <p>
                                            Productservices are professional
                                            services that help market or
                                            advertise your business online. Best
                                            Way to Manage and Share Work
                                            Resources.
                                        </p>
                                    </li>
                                    <li>
                                        <span className="count">02</span>
                                        <h4>
                                            Start with wireframe &amp; design
                                        </h4>
                                        <p>
                                            Productservices are professional
                                            services that help market or
                                            advertise your business online. Best
                                            Way to Manage and Share Work
                                            Resources.
                                        </p>
                                    </li>
                                    <li>
                                        <span className="count">03</span>
                                        <h4>
                                            Development finalize &amp; handover
                                        </h4>
                                        <p>
                                            Productservices are professional
                                            services that help market or
                                            advertise your business online. Best
                                            Way to Manage and Share Work
                                            Resources.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="process-section process-with-cta">
                <div className="section-gap-top secondary-bg">
                    <div className="container">
                        <div className="section-title color-white text-center mb-20">
                            <span className="title-tag">Process</span>
                            <h2 className="title">How It Works</h2>
                        </div>
                        <div className="row process-boxes justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="process-box mt-30">
                                    <div
                                        className="thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/process/01.jpg)",
                                        }}
                                    />
                                    <div className="desc">
                                        <h4>Project Discussions</h4>
                                        <span className="count">01</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="process-box mt-30">
                                    <div
                                        className="thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/process/02.jpg)",
                                        }}
                                    />
                                    <div className="desc">
                                        <h4>Wireframe &amp; Design</h4>
                                        <span className="count">02</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="process-box mt-30">
                                    <div
                                        className="thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/process/03.jpg)",
                                        }}
                                    />
                                    <div className="desc">
                                        <h4>Finalize &amp; Handover</h4>
                                        <span className="count">03</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="process-cta grey-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="section-title">
                                    <h2 className="title">
                                        Lets make an custom order here.
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <a href="#" className="main-btn mt-md-gap-30">
                                    Make Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="process-section section-gap">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="title-tag">Process</span>
                        <h2 className="title">How It Works</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box-two mt-50">
                                <div className="icon">
                                    <i className="flaticon-hand" />
                                </div>
                                <span className="count">01</span>
                                <div className="desc">
                                    <h4>Project Discussions</h4>
                                    <p>
                                        Do your business a huge <br /> favor
                                        today!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box-two mt-50">
                                <div className="icon">
                                    <i className="flaticon-share" />
                                </div>
                                <span className="count">02</span>
                                <div className="desc">
                                    <h4>Make Wireframe</h4>
                                    <p>
                                        Do your business a huge <br /> favor
                                        today!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box-two mt-50">
                                <div className="icon">
                                    <i className="flaticon-cpu" />
                                </div>
                                <span className="count">03</span>
                                <div className="desc">
                                    <h4>Project Making</h4>
                                    <p>
                                        Do your business a huge <br /> favor
                                        today!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box-two mt-50">
                                <div className="icon">
                                    <i className="flaticon-mind" />
                                </div>
                                <span className="count">04</span>
                                <div className="desc">
                                    <h4>Product Handover</h4>
                                    <p>
                                        Do your business a huge <br /> favor
                                        today!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Process Area End ======*/}
            {/*====== Testimonials area start ======*/}
            <section className="testimonial-section with-pattern section-gap grey-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50">
                                <span className="title-tag">Testimonials</span>
                                <h2 className="title">
                                    Clients <span>feedbacks</span>
                                </h2>
                            </div>
                            <div className="testimonial-slider-progress mb-40">
                                <span className="line-one" />
                                <span className="line-two" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="testimonial-boxes row"
                        id="testimonialSliderOne"
                    >
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-1.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-2.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-1.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-2.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Testimonials area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default process;
