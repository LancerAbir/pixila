import Link from "next/link";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { PortfolioOneData } from "../Isotope/PortfolioData";

const PortfolioArea = () => {
    const [data, setData] = useState(PortfolioOneData);
    const [activeBox, setActive] = useState(1);
    const activeLi = (value) => (activeBox === value ? "active" : "");

    const filterItem = (categoryItem) => {
        const updateItems = PortfolioOneData.filter((currentItem) => {
            return currentItem.category === categoryItem;
        });
        setData(updateItems);
    };
    return (
        <section className="portfolio-area section-gap">
            <div className="container">
                <div className="portfolio-filter mb-10">
                    <ul>
                        <li
                            className={`${activeLi(1)}`}
                            onClick={() => {
                                filterItem("all"), setActive(1);
                            }}
                        >
                            All Works
                        </li>
                        <li
                            data-filter=".graphics"
                            className={`${activeLi(2)}`}
                            onClick={() => {
                                filterItem("graphics"), setActive(2);
                            }}
                        >
                            Graphics
                        </li>
                        <li
                            data-filter=".website"
                            className={`${activeLi(3)}`}
                            onClick={() => {
                                filterItem("website"), setActive(3);
                            }}
                        >
                            Website
                        </li>
                        <li
                            data-filter=".ui-ux"
                            className={`${activeLi(4)}`}
                            onClick={() => {
                                filterItem("ui-ux"), setActive(4);
                            }}
                        >
                            UI/UX
                        </li>
                        <li
                            data-filter=".consultancy"
                            className={`${activeLi(5)}`}
                            onClick={() => {
                                filterItem("consultancy"), setActive(5);
                            }}
                        >
                            Consultancy
                        </li>
                    </ul>
                </div>
                <div className="portfolio-filter-items row">
                    {data.map((element) => {
                        const {
                            id,
                            image,
                            subTitle1,
                            subTitle2,
                            title,
                            classGrid,
                        } = element;

                        return (
                            <div
                                className="col-lg-4 col-md-6 graphics consultancy"
                                key={id}
                            >
                                <Fade big>
                                    <div className="portfolio-box-two mt-30">
                                        <div
                                            className="thumb"
                                            style={{
                                                backgroundImage: `url(${
                                                    image && image
                                                })`,
                                            }}
                                        >
                                            <Link href="/portfolio-details">
                                                <a className="link">
                                                    <i className="fal fa-long-arrow-right" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <div className="tags">
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        {subTitle1},
                                                    </a>
                                                </Link>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        {subTitle2}
                                                    </a>
                                                </Link>
                                            </div>
                                            <h4 className="title">
                                                <Link href="/portfolio-details">
                                                    <a>{title}</a>
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PortfolioArea;
