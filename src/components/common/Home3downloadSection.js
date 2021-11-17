import React from "react";

const Home3downloadSection = () => {
    return (
        <section className="download-section">
            <div className="container">
                <div className="download-text">
                    <div className="section-title title-style-three">
                        <span className="title-tag">Get A Trail</span>
                        <h2 className="title">
                            Explore &amp; find your right <br /> destination
                            with app.
                        </h2>
                        <ul className="download-btns">
                            <li>
                                <a href="#">
                                    <img
                                        src="img/app-store.png"
                                        alt="AppStore"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="img/play-store.png"
                                        alt="PlayStore"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="download-img">
                        <img src="img/cta-img.png" alt="Image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home3downloadSection;
