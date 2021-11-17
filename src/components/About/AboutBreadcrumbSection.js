import React from "react";

const AboutBreadcrumbSection = () => {
    return (
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
                            <h2 className="page-title">About Us.</h2>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="breadcrumb-nav">
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="separator">|</li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBreadcrumbSection;