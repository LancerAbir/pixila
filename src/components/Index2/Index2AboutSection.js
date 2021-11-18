import React from "react";

const Index2AboutSection = () => {
    return (
        <div className="about-section section-gap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10 wow fadeInLeft">
                        <div className="about-experience">
                            <img src="img/about-img.jpg" alt="About" />
                            <div className="experience-tag">
                                <img
                                    src="img/experience-tag.png"
                                    alt="Experience"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-10 wow fadeInRight">
                        <div className="about-text about-text-two mt-md-gap-50">
                            <div className="section-title title-style-two mb-30">
                                <span className="title-tag">About Us</span>
                                <h2 className="title">
                                    We will satisfy you by our work ideas
                                </h2>
                            </div>
                            <p>
                                Their creativity, innovation, technological
                                expertise, and project completion steps were
                                impressive. Project management was professional.
                                We’re a full-service creative digital marketing
                                agency, collaborating with brands all over the
                                world.
                            </p>
                            <ul className="mt-40">
                                <li>
                                    <i className="fal fa-check" /> We deliver
                                    Values for every business
                                </li>
                                <li>
                                    <i className="fal fa-check" /> We make
                                    Technology more Human
                                </li>
                                <li>
                                    <i className="fal fa-check" /> We make
                                    Technology more Human
                                </li>
                                <li>
                                    <i className="fal fa-check" /> 24/7 Online
                                    Support
                                </li>
                            </ul>
                            <div className="about-author">
                                <div className="author-img">
                                    <img
                                        src="img/about-author.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="author-desc">
                                    <h5>Rosalina D. William</h5>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index2AboutSection;