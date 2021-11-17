import React from "react";

const blogSingle = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <header className="header-four sticky-header">
                <div className="header-navbar">
                    <div className="container position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="navbar-left d-flex align-items-center">
                                <div className="site-logo">
                                    <a href="index.html">
                                        <img
                                            src="img/logo-4.png"
                                            alt="Pixila"
                                        />
                                    </a>
                                </div>
                                <nav className="site-nav-menu">
                                    <ul className="primary-menu">
                                        <li className="current">
                                            <a href="index.html">Home</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="index.html">
                                                        Home One
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">
                                                        Home Two
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">
                                                        Home Three
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">
                                                        Home Four
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">OnePage</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="index-onepage.html">
                                                                Home One
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2-onepage.html">
                                                                Home Two
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3-onepage.html">
                                                                Home Three
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-4-onepage.html">
                                                                Home Four
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html">About us</a>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="portfolio.html">
                                                        Portfolio
                                                    </a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="portfolio.html">
                                                                Portfolio One
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio-2.html">
                                                                Portfolio Two
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio-3.html">
                                                                Portfolio Three
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio-details.html">
                                                                Portfolio
                                                                Details
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="service.html">
                                                        Service
                                                    </a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="service.html">
                                                                Service One
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="service-2.html">
                                                                Service Two
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="faq.html">FAQ</a>
                                                </li>
                                                <li>
                                                    <a href="pricing.html">
                                                        Pricing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="process.html">
                                                        Process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="team.html">Team</a>
                                                </li>
                                                <li>
                                                    <a href="shop.html">Shop</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="shop-details.html">
                                                                Shop Details
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="blog.html">News</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="blog-single.html">
                                                        News Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Contact us
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" className="nav-close">
                                        <i className="fal fa-times" />
                                    </a>
                                </nav>
                                <div className="search-widget">
                                    <a href="#" className="search-icon">
                                        <i className="far fa-search" />
                                    </a>
                                    <div className="search-form">
                                        <form action="#">
                                            <input
                                                type="search"
                                                placeholder="Search here...."
                                            />
                                            <button type="submit">
                                                <i className="fal fa-search" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-right d-flex align-items-center">
                                <div className="header-contact-btn">
                                    <a href="#">Get Started Now</a>
                                </div>
                                <a href="#" className="nav-toggler">
                                    <i className="far fa-bars" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <section
                className="breadcrumb-section bgc"
                style={{ backgroundImage: "url(img/breadcrumb-bg.jpg)" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="breadcrumb-text">
                                <span className="title-tag">
                                    Welcome to our company
                                </span>
                                <h2 className="page-title">News Details.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>News Details</li>
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
                            <div className="single-post-box post-details">
                                <div className="post-content">
                                    <a href="#" className="post-cat">
                                        Business
                                    </a>
                                    <h3 className="post-title">
                                        Business contents insurance is a type
                                        business insurance that can protect
                                    </h3>
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
                                    <p className="mb-20">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum. Sed ut perspiciatis unde
                                        omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam
                                        rem aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo
                                        enim ipsam voluptatem quia voluptas sit
                                        aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt. Neque
                                        porro quisquam est, qui dolorem ipsum
                                        quia dolor sit amet, consectetur,
                                        adipisci velit, sed quia non numquam
                                        eius modi tempora incidunt ut labore et
                                        dolore magnam aliquam quaerat
                                        voluptatem. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt. Lorem ipsum
                                        dolor sit amet, consectetur adipisicing
                                        elit, sed do eiusmod tempor incididunt
                                    </p>
                                    <figure className="mt-40 mb-40">
                                        <img
                                            src="img/blog/post-details.jpg"
                                            alt="Image"
                                        />
                                    </figure>
                                    <h3 className="subtitle">
                                        A cleansing hot shower or bath
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed
                                        do eiusmod tempor incididunt ut labore
                                    </p>
                                    <div className="divider" />
                                    <h3 className="subtitle">
                                        Setting the mood with incense
                                    </h3>
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 mb-lg-0 mb-4">
                                            <img
                                                src="img/blog/post-details-2.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="col-lg-9">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat. Duis
                                                aute irure dolor in
                                                reprehenderit in voluptate Lorem
                                                ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod
                                            </p>
                                        </div>
                                    </div>
                                    <div className="divider" />
                                    <h3 className="subtitle">
                                        Setting the mood with incense
                                    </h3>
                                    <ul className="post-content-list">
                                        <li>
                                            <i className="fal fa-check" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </li>
                                    </ul>
                                    <blockquote className="mt-40 mb-40">
                                        <cite>by Hetmayar</cite>
                                        Choices to take a holiday and travelling
                                        out in this pandemic situation are
                                        limited. Why not take a staycation.
                                        <div className="quote-icon">
                                            <img
                                                src="img/blog/quote-icon.png"
                                                alt="quote"
                                            />
                                        </div>
                                    </blockquote>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum. Sed ut perspiciatis unde
                                        omnis iste natus error sit voluptatem
                                        accusantium. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore.
                                    </p>
                                    <div className="row align-items-center mt-20 mb-20">
                                        <div className="col-lg-4 mb-lg-0 mb-4">
                                            <img
                                                src="img/blog/post-details-3.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="col-lg-8">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat. Duis
                                                aute irure dolor in
                                                reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat
                                                nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident,
                                                sunt in culpa qui officia
                                                deserunt mollit anim id est
                                                laborum. Sed ut perspiciatis
                                                unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium. Lorem
                                                ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua.
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum. Sed ut perspiciatis unde
                                        omnis iste natus error sit voluptatem.
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </div>
                                <div className="post-footer mt-40 mb-40">
                                    <div className="d-sm-flex justify-content-between">
                                        <div className="related-tag">
                                            <h5>Releted Tags</h5>
                                            <ul>
                                                <li>
                                                    <a href="#">Popular</a>
                                                </li>
                                                <li>
                                                    <a href="#">Desgin</a>
                                                </li>
                                                <li>
                                                    <a href="#">UX</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="social-share">
                                            <h5>Social Share</h5>
                                            <ul>
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
                                                        <i className="fab fa-vk" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-whatsapp" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-blogger-b" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="divider" />
                                    <div className="post-nav">
                                        <div className="prev-post">
                                            <span>Prev Post</span>
                                            <h3>
                                                <a href="#">
                                                    Tips On Minimalist
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="next-post">
                                            <span>Next Post</span>
                                            <h3>
                                                <a href="#">Less Is More</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="divider" />
                                    <div className="related-posts">
                                        <h3 className="related-title">
                                            Releted Post
                                        </h3>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="related-post-box">
                                                    <div
                                                        className="thumb"
                                                        style={{
                                                            backgroundImage:
                                                                "url(img/blog/related-post/01.jpg)",
                                                        }}
                                                    />
                                                    <div className="content">
                                                        <span className="date">
                                                            <i className="fal fa-calendar-alt" />
                                                            24th March 2020
                                                        </span>
                                                        <h4>
                                                            <a href="#">
                                                                A series of iOS
                                                                7 inspire vector
                                                                icons sense.
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet, conse ctet
                                                            ur adipisicing elit,
                                                            sed doing.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="related-post-box">
                                                    <div
                                                        className="thumb"
                                                        style={{
                                                            backgroundImage:
                                                                "url(img/blog/related-post/02.jpg)",
                                                        }}
                                                    />
                                                    <div className="content">
                                                        <span className="date">
                                                            <i className="fal fa-calendar-alt" />
                                                            24th March 2020
                                                        </span>
                                                        <h4>
                                                            <a href="#">
                                                                A series of iOS
                                                                7 inspire vector
                                                                icons sense.
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet, conse ctet
                                                            ur adipisicing elit,
                                                            sed doing.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-author">
                                        <div className="image">
                                            <img
                                                src="img/blog/post-author-3.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="info">
                                            <span>Written by</span>
                                            <h2 className="name">
                                                Rosalina D. William
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation is
                                                enougn for today. Lorem ipsum
                                                dolor sit amet, consectetur
                                                adipisicing elit, sed do
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-template">
                                    <h3 className="template-title">
                                        03 Comments
                                    </h3>
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-author">
                                                <img
                                                    src="img/blog/comment-01.jpg"
                                                    alt="Author"
                                                />
                                            </div>
                                            <div className="comment-content">
                                                <h6>Rosalina Kelian</h6>
                                                <span className="date">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </span>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit, sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex
                                                    ea commodo consequat.
                                                </p>
                                                <a
                                                    href="#"
                                                    className="reply-link"
                                                >
                                                    <i className="fal fa-reply" />
                                                    Reply
                                                </a>
                                            </div>
                                            <ul className="children">
                                                <li>
                                                    <div className="comment-author">
                                                        <img
                                                            src="img/blog/comment-02.jpg"
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    <div className="comment-content">
                                                        <h6>Rosalina Kelian</h6>
                                                        <span className="date">
                                                            <i className="fal fa-calendar-alt" />
                                                            24th March 2020
                                                        </span>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore
                                                            magna aliqua. Ut
                                                            enim ad minim
                                                            veniam, quis nostrud
                                                            exercitation
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="reply-link"
                                                        >
                                                            <i className="fal fa-reply" />
                                                            Reply
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img
                                                    src="img/blog/comment-03.jpg"
                                                    alt="Author"
                                                />
                                            </div>
                                            <div className="comment-content">
                                                <h6>Rosalina Kelian</h6>
                                                <span className="date">
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </span>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit, sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex
                                                    ea commodo consequat.
                                                </p>
                                                <a
                                                    href="#"
                                                    className="reply-link"
                                                >
                                                    <i className="fal fa-reply" />
                                                    Reply
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="divider" />
                                    <h3 className="template-title">
                                        Post Comment
                                    </h3>
                                    <div className="comment-form">
                                        <form action="#">
                                            <div className="input-field icon-right textarea-field mb-20">
                                                <textarea
                                                    placeholder="Type your comments...."
                                                    defaultValue={""}
                                                />
                                                <span className="icon">
                                                    <i className="fal fa-pencil" />
                                                </span>
                                            </div>
                                            <div className="input-field icon-right mb-20">
                                                <input
                                                    type="text"
                                                    placeholder="Type your name...."
                                                />
                                                <span className="icon">
                                                    <i className="fal fa-user" />
                                                </span>
                                            </div>
                                            <div className="input-field icon-right mb-20">
                                                <input
                                                    type="text"
                                                    placeholder="Type your email...."
                                                />
                                                <span className="icon">
                                                    <i className="fal fa-envelope" />
                                                </span>
                                            </div>
                                            <div className="input-field icon-right mb-30">
                                                <input
                                                    type="text"
                                                    placeholder="Type your website...."
                                                />
                                                <span className="icon">
                                                    <i className="fal fa-globe" />
                                                </span>
                                            </div>
                                            <div className="input-field">
                                                <button type="submit">
                                                    <i className="fal fa-comments" />
                                                    Post Comment
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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
            <footer className="footer-one">
                <div className="footer-top">
                    <div className="container">
                        <div className="d-sm-flex justify-content-between align-items-center">
                            <div className="footer-logo mb-xs-gap-30">
                                <img src="img/logo-white.png" alt="Image" />
                            </div>
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
                                        <i className="fab fa-youtube" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-vimeo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="widget about-widget">
                                    <h5 className="widget-title">About us.</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectet ur
                                        adipisicing elit, sed do eiusmod tem por
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="widget nav-widget">
                                    <h5 className="widget-title">Services.</h5>
                                    <ul>
                                        <li>
                                            <a href="#">SEO Marketing</a>
                                        </li>
                                        <li>
                                            <a href="#">Game Development</a>
                                        </li>
                                        <li>
                                            <a href="#">Link Building</a>
                                        </li>
                                        <li>
                                            <a href="#">Bitcoin Mining</a>
                                        </li>
                                        <li>
                                            <a href="#">Keyword Targeting</a>
                                        </li>
                                        <li>
                                            <a href="#">Live Streaming</a>
                                        </li>
                                        <li>
                                            <a href="#">Web Analytics</a>
                                        </li>
                                        <li>
                                            <a href="#">Marketplace</a>
                                        </li>
                                        <li>
                                            <a href="#">Email Marketing</a>
                                        </li>
                                        <li>
                                            <a href="#">Business Strategy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="widget recent-post-widget">
                                    <h5 className="widget-title">
                                        News feeds.
                                    </h5>
                                    <ul>
                                        <li>
                                            <div className="post-img">
                                                <img
                                                    src="img/post-widget/01.jpg"
                                                    alt
                                                />
                                            </div>
                                            <div className="post-desc">
                                                <span className="post-date">
                                                    <i className="fal fa-calendar-alt" />
                                                    10th May 2020
                                                </span>
                                                <h6>
                                                    <a href="#">
                                                        Chemical Engineering
                                                        Projects For All.
                                                    </a>
                                                </h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-img">
                                                <img
                                                    src="img/post-widget/02.jpg"
                                                    alt
                                                />
                                            </div>
                                            <div className="post-desc">
                                                <span className="post-date">
                                                    <i className="fal fa-calendar-alt" />
                                                    10th May 2020
                                                </span>
                                                <h6>
                                                    <a href="#">
                                                        Chemical Engineering
                                                        Projects For All.
                                                    </a>
                                                </h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-img">
                                                <img
                                                    src="img/post-widget/03.jpg"
                                                    alt
                                                />
                                            </div>
                                            <div className="post-desc">
                                                <span className="post-date">
                                                    <i className="fal fa-calendar-alt" />
                                                    10th May 2020
                                                </span>
                                                <h6>
                                                    <a href="#">
                                                        Chemical Engineering
                                                        Projects For All.
                                                    </a>
                                                </h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="widget contact-info">
                                    <h5 className="widget-title">
                                        Get in touch.
                                    </h5>
                                    <ul>
                                        <li>
                                            <i className="fal fa-map-marker-alt" />
                                            <span>Office:</span> 121 King St,
                                            Melbourne VIC 3000, Australia
                                        </li>
                                        <li>
                                            <i className="fal fa-phone" />
                                            <span>Phone:</span> +0 123-456-7890
                                            <br />
                                            +0 123-456-7890
                                        </li>
                                        <li>
                                            <i className="fal fa-envelope" />
                                            <span>
                                                Email:
                                            </span> info@example.com <br />
                                            info@example.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="d-md-flex align-items-center justify-content-between">
                            <ul className="footer-menu order-md-2">
                                <li>
                                    <a href="#">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Refund Policy</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                            <p className="copyright-text order-md-1">
                                Copyright By@<a href="#">WebTend</a> - 2021
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*====== Footer End ======*/}
        </>
    );
};

export default blogSingle;
