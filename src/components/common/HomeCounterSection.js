import React from "react";

const HomeCounterSection = () => {
    return (
        <section className="counter-section">
            <div className="container">
                <div className="counter-inner">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-box">
                                <div className="counter-wrap">
                                    <i className="fal fa-user" />
                                    <span className="counter">1165</span>
                                </div>
                                <h3 className="title">Projects Executed</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-box">
                                <div className="counter-wrap">
                                    <i className="fal fa-globe" />
                                    <span className="counter">219</span>
                                </div>
                                <h3 className="title">Global Presence</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-box">
                                <div className="counter-wrap">
                                    <i className="fal fa-users" />
                                    <span className="counter">5</span>k+
                                </div>
                                <h3 className="title">Active Clients</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-box">
                                <div className="counter-wrap">
                                    <i className="fal fa-book" />
                                    <span className="counter">500</span>+
                                </div>
                                <h3 className="title">Recognition</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCounterSection;
