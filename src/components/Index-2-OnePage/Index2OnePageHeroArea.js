import Link from "next/link";
import React from "react";

const Index2OnePageHeroArea = () => {
    return (
        <section className="hero-area hero-area-two" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5 col-md-10">
                        <div className="hero-text">
                            <h2
                                className="title wow fadeInDown"
                                data-wow-delay="0.3s"
                            >
                                Design, Development, &amp; Identity For Your
                                Product.
                            </h2>
                            <p className="wow fadeInLeft" data-wow-delay="0.5s">
                                Let's create something together
                            </p>
                            <ul className="social-counts">
                                <li
                                    className="facebook wow fadeInUp"
                                    data-wow-delay="0.7s"
                                >
                                    <Link href="#">
                                        <a>
                                            <i className="fab fa-facebook-f" />
                                            <span>10000 Like</span>
                                        </a>
                                    </Link>
                                </li>
                                <li
                                    className="dribbble wow fadeInUp"
                                    data-wow-delay="0.9s"
                                >
                                    <Link href="#">
                                        <a>
                                            <i className="fab fa-dribbble" />
                                            <span>500K Followers</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-10 mx-auto">
                        <div
                            className="hero-video wow fadeInRight"
                            data-wow-delay="0.3s"
                        >
                            <div className="hero-video-wrap">
                                <Link href="#">
                                    <a
                                        href="https://www.youtube.com/watch?v=pVE92TNDwUk"
                                        className="video-btn popup-video"
                                    >
                                        Play
                                    </a>
                                </Link>
                                <img
                                    src="img/hero-img/hero-02.jpg"
                                    alt="HeroImage"
                                />
                                <div className="project-count">
                                    <span>
                                        <span className="count">20</span>
                                        Projects Done
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index2OnePageHeroArea;
