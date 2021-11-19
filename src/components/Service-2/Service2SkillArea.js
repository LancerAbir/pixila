import Link from "next/link";
import React from "react";

const Service2SkillArea = () => {
    return (
        <section className="skill-section section-gap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-7 col-md-10 order-lg-2">
                        <div className="skillset-video active ms-lg-5">
                            <Link href="#">
                                <a
                                    href="https://www.youtube.com/watch?v=pVE92TNDwUk"
                                    className="popup-btn popup-video"
                                >
                                    <i className="fas fa-play" />
                                </a>
                            </Link>
                            <div
                                className="video-bg"
                                style={{
                                    backgroundImage: "url(img/skillset/05.jpg)",
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-10 order-lg-1">
                        <div className="skill-text mt-md-gap-50">
                            <div className="section-title mb-30">
                                <span className="title-tag">Our Skillset</span>
                                <h2 className="title">
                                    Emerging technologies converge with urban
                                </h2>
                            </div>
                            <p>
                                Their creativity, innovation, technological
                                expertise, and project completion steps were
                                impressive. Project management was professional.
                                We’re a full-service creative digital marketing
                                agency, collaborating.
                            </p>
                            <div className="progress-bars progress-bars-two mt-40">
                                <div
                                    className="single-progress"
                                    data-count={72}
                                >
                                    <div className="title">
                                        <span>Main Strategy</span>
                                        <span className="progress-counter">
                                            <span className="count">72</span>%
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
                                            <span className="count">80</span>%
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
    );
};

export default Service2SkillArea;
