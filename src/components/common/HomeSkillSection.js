import React from "react";

const HomeSkillSection = () => {
    return (
        <section className="skill-section section-gap-top">
            <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-between">
                    <div className="col-lg-6 col-md-10">
                        <div className="skill-text mb-50">
                            <div className="section-title mb-30">
                                <span className="title-tag">Our Skillset</span>
                                <h2 className="title">
                                    Effective business delivery solutions at all{" "}
                                    <span>glance</span>
                                </h2>
                            </div>
                            <p>
                                Productservices are professional services that
                                help market or advertise your business
                                <br /> online. Best Way to Manage and Share Work
                                Resources.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-10">
                        <div className="progress-bars mb-md-gap-60">
                            <div className="single-progress" data-count={72}>
                                <div className="title">
                                    <span>Work Progress</span>
                                    <span className="progress-counter">
                                        <span className="count">72</span>%
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
            <div className="skillset-videos fluid-container-left overflow-hidden">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="skillset-video active mb-xs-gap-30">
                            <a
                                href="https://www.youtube.com/watch?v=pVE92TNDwUk"
                                className="popup-btn popup-video"
                            >
                                <i className="fas fa-play" />
                            </a>
                            <div
                                className="video-bg"
                                style={{
                                    backgroundImage: "url(img/skillset/01.jpg)",
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="skillset-video">
                            <a
                                href="https://www.youtube.com/watch?v=pVE92TNDwUk"
                                className="popup-btn popup-video"
                            >
                                <i className="fas fa-play" />
                            </a>
                            <div
                                className="video-bg"
                                style={{
                                    backgroundImage: "url(img/skillset/02.jpg)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSkillSection;
