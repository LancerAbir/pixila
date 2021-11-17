import React from "react";

const Home4processTabSection = () => {
    return (
        <section className="process-tab-section section-gap-bottom">
            <div className="container">
                <div className="process-tab tab-version-two">
                    <ul className="nav nav-tabs" id="processTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#collaborate-options"
                                type="button"
                                role="tab"
                            >
                                <i className="fal fa-monitor-heart-rate" />
                                <span>
                                    Collaborate Options
                                    <span className="small-text">
                                        Easy to use &amp; 24/7 online support
                                    </span>
                                </span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                data-bs-toggle="tab"
                                data-bs-target="#messaging-options"
                                type="button"
                                role="tab"
                            >
                                <i className="fal fa-link" />
                                <span>
                                    Messaging Options
                                    <span className="small-text">
                                        Easy to use &amp; 24/7 online support
                                    </span>
                                </span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#chatbot-options"
                                type="button"
                                role="tab"
                            >
                                <i className="fal fa-users" />
                                <span>
                                    Chatbot Options
                                    <span className="small-text">
                                        Easy to use &amp; 24/7 online support
                                    </span>
                                </span>
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="processTabContent">
                        <div
                            className="tab-pane fade"
                            id="collaborate-options"
                            role="tabpanel"
                        >
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="tab-img text-center">
                                        <img
                                            src="img/process-tab-2.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade show active"
                            id="messaging-options"
                            role="tabpanel"
                        >
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="tab-img text-center">
                                        <img
                                            src="img/process-tab-2.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="chatbot-options"
                            role="tabpanel"
                        >
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="tab-img text-center">
                                        <img
                                            src="img/process-tab-2.jpg"
                                            alt="Image"
                                        />
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

export default Home4processTabSection;
