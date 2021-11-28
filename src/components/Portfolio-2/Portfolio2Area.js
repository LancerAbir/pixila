import Link from "next/link";
import React, { useState } from "react";
import { PortfolioData } from "../Isotope/PortfolioData";

const Portfolio2Area = () => {
    const [data, setData] = useState(PortfolioData);
    const [activeBox, setActive] = useState(1);
    const activeLi = (value) => (activeBox === value ? "active" : "");

    const filterItem = (categoryItem) => {
        const updateItems = PortfolioData.filter((currentItem) => {
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
                            <div className={classGrid && classGrid} key={id}>
                                <div className="portfolio-box-three mt-30">
                                    <div
                                        className="thumb"
                                        style={{
                                            backgroundImage: `url(${
                                                image && image
                                            })`,
                                        }}
                                    />
                                    <div className="content">
                                        <div className="tags">
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    {subTitle1 && subTitle1},
                                                </a>
                                            </Link>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    {subTitle2 && subTitle2}
                                                </a>
                                            </Link>
                                        </div>
                                        <h4 className="title">
                                            <Link href="/portfolio-details">
                                                <a>{title && title}</a>
                                            </Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio2Area;
