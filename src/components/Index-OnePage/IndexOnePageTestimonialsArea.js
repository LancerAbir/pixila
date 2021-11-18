import Link from "next/link";
import React from "react";

const IndexOnePageTestimonialsArea = () => {
    return (
        <section
            className="testimonial-section with-pattern testimonial-brand-section primary-bg"
            id="feedbacks"
        >
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
                                    Companies of every size, and in 62 different
                                    countries, are using Betakit.”
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
                                    Companies of every size, and in 62 different
                                    countries, are using Betakit.”
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
                                    Companies of every size, and in 62 different
                                    countries, are using Betakit.”
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
                                    Companies of every size, and in 62 different
                                    countries, are using Betakit.”
                                </p>
                                <div className="author-info">
                                    <h5>Miranda H. Halim</h5>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-logos section-gap-top row justify-content-between align-items-center">
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/1.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/2.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/3.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/4.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/5.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/1.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/2.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/3.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/4.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/5.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndexOnePageTestimonialsArea;
