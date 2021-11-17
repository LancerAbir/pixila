import React from "react";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const shop = () => {
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
                        <div className="col-lg-6 col-md-6">
                            <div className="breadcrumb-text">
                                <span className="title-tag">
                                    Welcome to our company
                                </span>
                                <h2 className="page-title">Product Shop.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>Shop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== Shop Area Start ======*/}
            <section className="shop-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="shop-top-filter">
                                <p className="shoping-result-count">
                                    Showing 1–9 of 12 results
                                </p>
                                <ul className="product-view-style">
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-list" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="active-view">
                                            <i className="fal fa-th" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="shop-loop row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/01.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/02.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/03.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/04.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/05.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/06.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/07.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/08.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/09.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/09.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/11.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-box">
                                        <div className="product-img">
                                            <img
                                                src="img/shop/12.jpg"
                                                alt="ProductImage"
                                            />
                                            <ul className="product-action">
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="product-title">
                                            <a href="shop-details.html">
                                                Polo Miranda Tshirt
                                            </a>
                                        </h5>
                                        <span className="price">$79.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrap">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-arrow-left" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="current-page">
                                            01
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">02</a>
                                    </li>
                                    <li>
                                        <a href="#">----</a>
                                    </li>
                                    <li>
                                        <a href="#">08</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-arrow-right" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="primary-sidebar shop-sidebar">
                                <div className="widget search-widget">
                                    <h5 className="widget-title">
                                        Search Here
                                    </h5>
                                    <form action="#">
                                        <input
                                            type="search"
                                            placeholder="Search product name"
                                        />
                                        <button type="button">
                                            <i className="fal fa-search" />
                                            Search
                                        </button>
                                    </form>
                                </div>
                                <div className="widget product-categories">
                                    <h5 className="widget-title">Categories</h5>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Tshirt <span>08</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Accessories <span>12</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Books <span>12</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Laptop &amp; PC <span>15</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Polo <span>09</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget price-range-widget">
                                    <h5 className="widget-title">
                                        Price Range
                                    </h5>
                                    <label
                                        htmlFor="customRange1"
                                        className="form-label"
                                    >
                                        Example range
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="customRange1"
                                    />
                                </div>
                                <div className="widget product-popular-tags">
                                    <h5 className="widget-title">Tags</h5>
                                    <ul>
                                        <li>
                                            <a href="#">Tshirt</a>
                                        </li>
                                        <li>
                                            <a href="#">Sunglass</a>
                                        </li>
                                        <li>
                                            <a href="#">Kits</a>
                                        </li>
                                        <li>
                                            <a href="#">Tshirt</a>
                                        </li>
                                        <li>
                                            <a href="#">Sunglass</a>
                                        </li>
                                        <li>
                                            <a href="#">Kits</a>
                                        </li>
                                        <li>
                                            <a href="#">Tshirt</a>
                                        </li>
                                        <li>
                                            <a href="#">Sunglass</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget product-popular">
                                    <h5 className="widget-title">
                                        Hot Products
                                    </h5>
                                    <ul>
                                        <li>
                                            <div className="thumb">
                                                <img
                                                    src="img/shop/hot-product/01.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="desc">
                                                <h6>
                                                    <a href="shop-details.html">
                                                        Polo Miranda Tshirt
                                                    </a>
                                                </h6>
                                                <span className="price">
                                                    $79.00
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img
                                                    src="img/shop/hot-product/02.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="desc">
                                                <h6>
                                                    <a href="shop-details.html">
                                                        Polo Miranda Tshirt
                                                    </a>
                                                </h6>
                                                <span className="price">
                                                    $79.00
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img
                                                    src="img/shop/hot-product/03.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="desc">
                                                <h6>
                                                    <a href="shop-details.html">
                                                        Polo Miranda Tshirt
                                                    </a>
                                                </h6>
                                                <span className="price">
                                                    $79.00
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <img
                                                    src="img/shop/hot-product/04.jpg"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="desc">
                                                <h6>
                                                    <a href="shop-details.html">
                                                        Polo Miranda Tshirt
                                                    </a>
                                                </h6>
                                                <span className="price">
                                                    $79.00
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Shop Area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default shop;
