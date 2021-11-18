import React from "react";

const Index4OnePageHeroArea = () => {
    return (
        <section className="hero-area hero-area-four" id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 col-md-11">
                        <div className="hero-text">
                            <a
                                className="popup-video wow fadeInDown"
                                href="https://www.youtube.com/watch?v=ScMzIvxBSi4"
                                data-wow-delay="0.3s"
                            >
                                <i className="fas fa-play" />
                            </a>
                            <h2
                                className="title wow fadeInLeft"
                                data-wow-delay="0.5s"
                            >
                                Boost Your Website Traffic &amp; Rank
                            </h2>
                            <p>Marketing experts are ready to help you</p>
                        </div>
                        <div className="hero-img text-center">
                            <img
                                src="img/hero-img/hero-04.png"
                                alt="Image"
                                className="wow fadeInUp"
                                data-wow-delay="0.5s"
                            />
                            <div
                                className="circle-shape-one wow fadeInRight"
                                data-wow-delay="0.8s"
                            />
                            <div
                                className="circle-shape-two wow fadeInLeft"
                                data-wow-delay="0.8s"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index4OnePageHeroArea;
