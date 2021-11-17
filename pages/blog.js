import React from "react";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const blog = () => {
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
                                <h2 className="page-title">News Feeds.</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>News</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== Blog Area Start ======*/}
            <section className="blog-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="blog-loop">
                                <div className="single-post-box">
                                    <div className="post-thumb">
                                        <img
                                            src="img/blog/01.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="post-content">
                                        <a href="#" className="post-cat">
                                            Business
                                        </a>
                                        <h3 className="post-title">
                                            <a href="blog-single.html">
                                                Dharma Home Suites at Novia
                                                offers fully plain furnished
                                                apartments to fit
                                            </a>
                                        </h3>
                                        <p>
                                            Novia's spaciously two bedroom
                                            apartments are perfect for families
                                            and even business partners. Look out
                                            into the Manhattan skyline from the
                                            open fully equipped kitchen.
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-eye" />
                                                    100 Views
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-comments" />
                                                    30 Comments
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </a>
                                            </li>
                                        </ul>
                                        <a href="#" className="posted-by">
                                            <img
                                                src="img/blog/post-author.jpg"
                                                alt="Author"
                                            />
                                            <span>by Hetmayar</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-post-box video-post">
                                    <div className="post-thumb">
                                        <img
                                            src="img/blog/02.jpg"
                                            alt="Image"
                                        />
                                        <a
                                            href="https://www.youtube.com/watch?v=pVE92TNDwUk"
                                            className="popup-video"
                                        >
                                            <i className="fas fa-play" />
                                        </a>
                                    </div>
                                    <div className="post-content">
                                        <a href="#" className="post-cat">
                                            Business
                                        </a>
                                        <h3 className="post-title">
                                            <a href="blog-single.html">
                                                Dharma Home Suites at Novia
                                                offers fully plain furnished
                                                apartments to fit
                                            </a>
                                        </h3>
                                        <p>
                                            Novia's spaciously two bedroom
                                            apartments are perfect for families
                                            and even business partners. Look out
                                            into the Manhattan skyline from the
                                            open fully equipped kitchen.
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-eye" />
                                                    100 Views
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-comments" />
                                                    30 Comments
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </a>
                                            </li>
                                        </ul>
                                        <a href="#" className="posted-by">
                                            <img
                                                src="img/blog/post-author.jpg"
                                                alt="Author"
                                            />
                                            <span>by Hetmayar</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-post-box">
                                    <div className="post-thumb">
                                        <img
                                            src="img/blog/03.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="post-content">
                                        <a href="#" className="post-cat">
                                            Business
                                        </a>
                                        <h3 className="post-title">
                                            <a href="blog-single.html">
                                                Dharma Home Suites at Novia
                                                offers fully plain furnished
                                                apartments to fit
                                            </a>
                                        </h3>
                                        <p>
                                            Novia's spaciously two bedroom
                                            apartments are perfect for families
                                            and even business partners. Look out
                                            into the Manhattan skyline from the
                                            open fully equipped kitchen.
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-eye" />
                                                    100 Views
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-comments" />
                                                    30 Comments
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </a>
                                            </li>
                                        </ul>
                                        <a href="#" className="posted-by">
                                            <img
                                                src="img/blog/post-author.jpg"
                                                alt="Author"
                                            />
                                            <span>by Hetmayar</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-post-box audio-post">
                                    <div className="post-thumb audio-preview">
                                        <img
                                            src="img/blog/soundcloud.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="blog-single.html">
                                                Dharma Home Suites at Novia
                                                offers fully plain furnished
                                                apartments to fit
                                            </a>
                                        </h3>
                                        <p>
                                            Novia's spaciously two bedroom
                                            apartments are perfect for families
                                            and even business partners. Look out
                                            into the Manhattan skyline from the
                                            open fully equipped kitchen.
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-eye" />
                                                    100 Views
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-comments" />
                                                    30 Comments
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-post-box no-thumb">
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="blog-single.html">
                                                Dharma Home Suites at Novia
                                                offers fully plain furnished
                                                apartments to fit
                                            </a>
                                        </h3>
                                        <p>
                                            Novia's spaciously two bedroom
                                            apartments are perfect for families
                                            and even business partners. Look out
                                            into the Manhattan skyline from the
                                            open fully equipped kitchen.
                                        </p>
                                        <ul className="post-meta">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-eye" />
                                                    100 Views
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-comments" />
                                                    30 Comments
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-post-box quote-post">
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="blog-single.html">
                                                Dharma Home Suites at Novia
                                                offers fully plain &amp;
                                                furnished
                                            </a>
                                        </h3>
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
                        <div className="col-xl-4">
                            <div className="primary-sidebar blog-sidebar">
                                <div className="widget about-author">
                                    <h5 className="widget-title">About Me</h5>
                                    <div className="author-content">
                                        <img
                                            src="img/about-author.jpg"
                                            alt="Author"
                                        />
                                        <h6 className="name">
                                            Rosalina D. Willaimson
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consect
                                            etur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore.
                                        </p>
                                        <ul className="social-icon">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-behance" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget search-widget">
                                    <h5 className="widget-title">
                                        Search Here
                                    </h5>
                                    <form action="#">
                                        <input
                                            type="search"
                                            placeholder="Search your keyword..."
                                        />
                                        <button type="button">
                                            <i className="fal fa-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="widget popular-post-widget">
                                    <h5 className="widget-title">
                                        Popular Feeds
                                    </h5>
                                    <ul>
                                        <li>
                                            <div
                                                className="post-thumb"
                                                style={{
                                                    backgroundImage:
                                                        "url(img/blog/popular-post/01.jpg)",
                                                }}
                                            />
                                            <div className="content">
                                                <h6>
                                                    <a href="#">
                                                        Lorem ipsum dolor sit
                                                        cing elit, sed do
                                                        something.
                                                    </a>
                                                </h6>
                                                <span className="date">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="post-thumb"
                                                style={{
                                                    backgroundImage:
                                                        "url(img/blog/popular-post/02.jpg)",
                                                }}
                                            />
                                            <div className="content">
                                                <h6>
                                                    <a href="#">
                                                        Lorem ipsum dolor sit
                                                        cing elit, sed do
                                                        something.
                                                    </a>
                                                </h6>
                                                <span className="date">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="post-thumb"
                                                style={{
                                                    backgroundImage:
                                                        "url(img/blog/popular-post/03.jpg)",
                                                }}
                                            />
                                            <div className="content">
                                                <h6>
                                                    <a href="#">
                                                        Lorem ipsum dolor sit
                                                        cing elit, sed do
                                                        something.
                                                    </a>
                                                </h6>
                                                <span className="date">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="post-thumb"
                                                style={{
                                                    backgroundImage:
                                                        "url(img/blog/popular-post/04.jpg)",
                                                }}
                                            />
                                            <div className="content">
                                                <h6>
                                                    <a href="#">
                                                        Lorem ipsum dolor sit
                                                        cing elit, sed do
                                                        something.
                                                    </a>
                                                </h6>
                                                <span className="date">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget categories-widget">
                                    <h5 className="widget-title">Categories</h5>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Business <span>26</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Consultant <span>30</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Creative <span>71</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                UI/UX <span>56</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Technology <span>60</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget instagram-feeds">
                                    <h5 className="widget-title">
                                        Instagram Feeds
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/01.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/02.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/03.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/04.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/05.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/06.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/07.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/08.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/09.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/10.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/11.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="img/blog/instagram/12.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget popular-tags">
                                    <h5 className="widget-title">
                                        Popular Tags
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="#">Popular</a>
                                        </li>
                                        <li>
                                            <a href="#">Design</a>
                                        </li>
                                        <li>
                                            <a href="#">UI</a>
                                        </li>
                                        <li>
                                            <a href="#">UX</a>
                                        </li>
                                        <li>
                                            <a href="#">Usability</a>
                                        </li>
                                        <li>
                                            <a href="#">Develop</a>
                                        </li>
                                        <li>
                                            <a href="#">Icon</a>
                                        </li>
                                        <li>
                                            <a href="#">Icon</a>
                                        </li>
                                        <li>
                                            <a href="#">Business</a>
                                        </li>
                                        <li>
                                            <a href="#">Consult</a>
                                        </li>
                                        <li>
                                            <a href="#">Kit</a>
                                        </li>
                                        <li>
                                            <a href="#">Kit</a>
                                        </li>
                                        <li>
                                            <a href="#">Keyboard</a>
                                        </li>
                                        <li>
                                            <a href="#">Mouse</a>
                                        </li>
                                        <li>
                                            <a href="#">Tech</a>
                                        </li>
                                        <li>
                                            <a href="#">Tech</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget ad-widget">
                                    <h5 className="widget-title">
                                        Sponsor Adds
                                    </h5>
                                    <div className="ad-img">
                                        <img
                                            src="img/blog/ad-image.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Blog Area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default blog;
