import React from "react";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const faq = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <section
                className="breadcrumb-section bgc"
                style={{ backgroundImage: "url(img/breadcrumb-bg.jpg)" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="breadcrumb-text">
                                <span className="title-tag">
                                    Welcome to our company
                                </span>
                                <h2 className="page-title">FAQ</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== FAQ AREA Start ======*/}
            <section className="faq-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div
                                className="accordion faq-accordion"
                                id="accordionFAQ"
                            >
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                        >
                                            How can i make this kind very
                                            easily?
                                        </button>
                                    </h4>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            <div className="row align-items-center">
                                                <div className="col-lg-2 mb-md-gap-30">
                                                    <img
                                                        src="img/faq.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nost rud
                                                        exercitation ullamco
                                                        laboris nisi ut aliquip
                                                        ex ea commodo consequat.
                                                        Duis aute irure dolor in
                                                        reprehenderit in
                                                        voluptate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                        >
                                            How can i make this kind very
                                            easily?
                                        </button>
                                    </h4>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            <div className="row align-items-center">
                                                <div className="col-lg-2 mb-md-gap-30">
                                                    <img
                                                        src="img/faq.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nost rud
                                                        exercitation ullamco
                                                        laboris nisi ut aliquip
                                                        ex ea commodo consequat.
                                                        Duis aute irure dolor in
                                                        reprehenderit in
                                                        voluptate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                        >
                                            How can i make this kind very
                                            easily?
                                        </button>
                                    </h4>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            <div className="row align-items-center">
                                                <div className="col-lg-2 mb-md-gap-30">
                                                    <img
                                                        src="img/faq.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nost rud
                                                        exercitation ullamco
                                                        laboris nisi ut aliquip
                                                        ex ea commodo consequat.
                                                        Duis aute irure dolor in
                                                        reprehenderit in
                                                        voluptate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                        >
                                            How can i make this kind very
                                            easily?
                                        </button>
                                    </h4>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            <div className="row align-items-center">
                                                <div className="col-lg-2 mb-md-gap-30">
                                                    <img
                                                        src="img/faq.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nost rud
                                                        exercitation ullamco
                                                        laboris nisi ut aliquip
                                                        ex ea commodo consequat.
                                                        Duis aute irure dolor in
                                                        reprehenderit in
                                                        voluptate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                        >
                                            How can i make this kind very
                                            easily?
                                        </button>
                                    </h4>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            <div className="row align-items-center">
                                                <div className="col-lg-2 mb-md-gap-30">
                                                    <img
                                                        src="img/faq.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nost rud
                                                        exercitation ullamco
                                                        laboris nisi ut aliquip
                                                        ex ea commodo consequat.
                                                        Duis aute irure dolor in
                                                        reprehenderit in
                                                        voluptate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix"
                                        >
                                            How can i make this kind very
                                            easily?
                                        </button>
                                    </h4>
                                    <div
                                        id="collapseSix"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            <div className="row align-items-center">
                                                <div className="col-lg-2 mb-md-gap-30">
                                                    <img
                                                        src="img/faq.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nost rud
                                                        exercitation ullamco
                                                        laboris nisi ut aliquip
                                                        ex ea commodo consequat.
                                                        Duis aute irure dolor in
                                                        reprehenderit in
                                                        voluptate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="primary-sidebar faq-sidebar">
                                <div className="widget contact-widget">
                                    <h5 className="widget-title">Ask Here</h5>
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder="Enter full name"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Enter email address"
                                        />
                                        <select name="#">
                                            <option value={1}>
                                                Select Subject
                                            </option>
                                            <option value={2}>
                                                Select Subject
                                            </option>
                                            <option value={3}>
                                                Select Subject
                                            </option>
                                            <option value={4}>
                                                Select Subject
                                            </option>
                                        </select>
                                        <textarea
                                            placeholder="Enter message"
                                            defaultValue={""}
                                        />
                                        <button
                                            type="submit"
                                            className="main-btn"
                                        >
                                            Get A Quote
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== FAQ AREA End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default faq;
