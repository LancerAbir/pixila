import Link from "next/link";
import React from "react";

const Home2brandSectionTwo = () => {
    return (
        <section
            className="brand-section-two bgc"
            style={{
                backgroundImage: "url(img/brand/brand-bg.jpg)",
            }}
        >
            <div className="container-fluid">
                <div className="brand-logos row justify-content-between align-items-center">
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/6.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/7.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/8.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/9.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/10.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/6.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/7.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/8.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/9.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="#">
                            <a className="brand-logo">
                                <img src="img/brand/10.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home2brandSectionTwo;
