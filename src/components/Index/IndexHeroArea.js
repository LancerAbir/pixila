import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const IndexHeroArea = () => {
    return (
        <section className="hero-area">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="hero-text">
                            <Fade top>
                                <span
                                    className="title-tag wow fadeInDown"
                                    data-wow-delay="0.3s"
                                >
                                    It &apos; s a lot easy to make a difference
                                    togather.
                                </span>
                            </Fade>
                            <Fade left>
                                <h2
                                    className="title wow fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    Replication is the <br /> presentation of
                                    <br /> our <span>capabilities</span>
                                </h2>
                            </Fade>
                            <ul className="hero-btns">
                                <Fade bottom>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.7s"
                                    >
                                        <Link href="/service-2">
                                            <a className="main-btn">
                                                Get Started Now
                                            </a>
                                        </Link>
                                    </li>
                                </Fade>
                                <Fade bottom>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.9s"
                                    >
                                        <Link href="/service-2">
                                            <a className="main-btn main-btn-2">
                                                Learn More
                                            </a>
                                        </Link>
                                    </li>
                                </Fade>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-10">
                        <Fade right>
                            <div
                                className="hero-img text-lg-end text-center wow fadeInRight"
                                data-wow-delay="0.3s"
                            >
                                <img
                                    src="img/hero-img/hero-01.png"
                                    alt="HeroImage"
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndexHeroArea;
