import React from "react";

const IndexOnePageHeroArea = () => {
    return (
        <section className="hero-area" id="home">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="hero-text">
                            <span
                                className="title-tag wow fadeInDown"
                                data-wow-delay="0.3s"
                            >
                                It's a lot easy to make a difference togather.
                            </span>
                            <h2
                                className="title wow fadeInLeft"
                                data-wow-delay="0.5s"
                            >
                                Replication is the <br /> presentation of
                                <br /> our <span>capabilities</span>
                            </h2>
                            <ul className="hero-btns">
                                <li
                                    className="wow fadeInUp"
                                    data-wow-delay="0.7s"
                                >
                                    <a href="#" className="main-btn">
                                        Get Started Now
                                    </a>
                                </li>
                                <li
                                    className="wow fadeInUp"
                                    data-wow-delay="0.9s"
                                >
                                    <a href="#" className="main-btn main-btn-2">
                                        Learn More
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-10">
                        <div
                            className="hero-img text-lg-end text-center wow fadeInRight"
                            data-wow-delay="0.3s"
                        >
                            <img
                                src="img/hero-img/hero-01.png"
                                alt="HeroImage"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndexOnePageHeroArea;
