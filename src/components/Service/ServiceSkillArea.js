import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const ServiceSkillArea = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="skill-section section-gap-bottom grey-bg">
            <div className="container-fluid p-0 overflow-hidden">
                <div className="skillset-videos row skillset-videos-slider">
                    <div className="col">
                        <div className="skillset-video">
                            <Link href="#">
                                <a
                                    onClick={() => setOpen(true)}
                                    className="popup-btn popup-video"
                                >
                                    <i className="fas fa-play" />
                                </a>
                            </Link>
                            <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="pVE92TNDwUk"
                                onClose={() => setOpen(false)}
                            />
                            <div
                                className="video-bg"
                                style={{
                                    backgroundImage:
                                        "url(img/skillset/slide-01.jpg)",
                                }}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="skillset-video">
                            <Link href="#">
                                <a
                                    onClick={() => setOpen(true)}
                                    className="popup-btn popup-video"
                                >
                                    <i className="fas fa-play" />
                                </a>
                            </Link>
                            <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="pVE92TNDwUk"
                                onClose={() => setOpen(false)}
                            />
                            <div
                                className="video-bg"
                                style={{
                                    backgroundImage:
                                        "url(img/skillset/slide-03.jpg)",
                                }}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="skillset-video">
                            <Link href="#">
                                <a
                                    onClick={() => setOpen(true)}
                                    className="popup-btn popup-video"
                                >
                                    <i className="fas fa-play" />
                                </a>
                            </Link>
                            <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="pVE92TNDwUk"
                                onClose={() => setOpen(false)}
                            />
                            <div
                                className="video-bg"
                                style={{
                                    backgroundImage:
                                        "url(img/skillset/slide-02.jpg)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container section-gap-top">
                <div className="pie-charts">
                    <div className="single-pie-chart">
                        <div
                            className="chart"
                            data-percent={61}
                            data-bar-color="#1baaa0"
                        >
                            <span>61</span>
                        </div>
                        <h4 className="title">Work Progress</h4>
                        <p>
                            As emerging technologies converge with urban
                            planning, a revolution of automated, on-demand
                        </p>
                    </div>
                    <div className="single-pie-chart">
                        <div
                            className="chart"
                            data-percent={85}
                            data-bar-color="#1baaa0"
                        >
                            <span>85</span>
                        </div>
                        <h4 className="title">Projects Done</h4>
                        <p>
                            As emerging technologies converge with urban
                            planning, a revolution of automated, on-demand
                        </p>
                    </div>
                    <div className="single-pie-chart">
                        <div
                            className="chart"
                            data-percent={61}
                            data-bar-color="#1baaa0"
                        >
                            <span>61</span>
                        </div>
                        <h4 className="title">Work Progress</h4>
                        <p>
                            As emerging technologies converge with urban
                            planning, a revolution of automated, on-demand
                        </p>
                    </div>
                    <div className="single-pie-chart">
                        <div
                            className="chart"
                            data-percent={85}
                            data-bar-color="#1baaa0"
                        >
                            <span>85</span>
                        </div>
                        <h4 className="title">Projects Done</h4>
                        <p>
                            As emerging technologies converge with urban
                            planning, a revolution of automated, on-demand
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSkillArea;
