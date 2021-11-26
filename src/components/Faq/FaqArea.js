import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionTab from "../common/AccordionTab";

const FaqArea = () => {
    return (
        <section className="faq-area section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <Accordion defaultActiveKey="0">
                            <div
                                className="accordion faq-accordion"
                                id="accordionFAQ"
                            >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        How can i make this kind very easily?
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <AccordionTab />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        How can i make this kind very easily?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <AccordionTab />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        How can i make this kind very easily?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <AccordionTab />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        How can i make this kind very easily?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <AccordionTab />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        How can i make this kind very easily?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <AccordionTab />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                        How can i make this kind very easily?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <AccordionTab />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                        </Accordion>
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
                                    <button type="submit" className="main-btn">
                                        Get A Quote
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqArea;
