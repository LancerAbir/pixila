import Link from "next/link";
import React, { useState } from "react";
// const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Index4HeroArea = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="hero-area hero-area-four">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 col-md-11">
                        <div className="hero-text">
                            <Link href="#">
                                <a
                                    onClick={() => setOpen(true)}
                                    className="popup-video wow fadeInDown"
                                    data-wow-delay="0.3s"
                                >
                                    <i className="fas fa-play" />
                                </a>
                            </Link>
                            {/**<ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="ScMzIvxBSi4"
                                onClose={() => setOpen(false)}
                            /> */}

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

export default Index4HeroArea;
