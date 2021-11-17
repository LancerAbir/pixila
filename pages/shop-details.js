import React from "react";

const shopDetails = () => {
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
                        <div className="col-md-6">
                            <div className="breadcrumb-text">
                                <span className="title-tag">
                                    Welcome to our company
                                </span>
                                <h2 className="page-title">Product Details.</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="breadcrumb-nav">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="separator">|</li>
                                    <li>Shop Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Breadcrumb section End ======*/}
            {/*====== Shop Area Start ======*/}
            <section className="shop-area">
                <div className="product-top section-gap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
                                <div className="product-gallery">
                                    <div className="main-gallery-image">
                                        <div className="image">
                                            <img
                                                src="img/shop/product-gallery/01.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="image">
                                            <img
                                                src="img/shop/product-gallery/02.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="image">
                                            <img
                                                src="img/shop/product-gallery/03.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                    <div className="gallery-dots-slider">
                                        <div className="dots-image">
                                            <img
                                                src="img/shop/product-gallery/thumb-01.jpg"
                                                alt="Dots"
                                            />
                                        </div>
                                        <div className="dots-image">
                                            <img
                                                src="img/shop/product-gallery/thumb-02.jpg"
                                                alt="Dots"
                                            />
                                        </div>
                                        <div className="dots-image">
                                            <img
                                                src="img/shop/product-gallery/thumb-03.jpg"
                                                alt="Dots"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-10">
                                <div className="product-summary">
                                    <span className="product-cat">
                                        // Maxi Dress
                                    </span>
                                    <h3 className="product-title">
                                        Good Deeds Royal Blue Furniture
                                    </h3>
                                    <div className="summary-divider" />
                                    <span className="price">
                                        £245.00 <del>£399.99</del>
                                    </span>
                                    <ul className="rating">
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li className="rating-text">
                                            (25 Customer review)
                                        </li>
                                    </ul>
                                    <div className="summary-divider" />
                                    <div className="short-desc">
                                        <p>
                                            Sweet as can be, the darling Lucy
                                            Love Sophia Rust Red Embroidered
                                            Dress is here to brighten your day!
                                            Slender straps support the apron
                                            neckline of this gauzy, woven dress
                                            bedecked in floral embroidery.
                                            Sheath silhouette ends at a mini
                                            hem. Sleek, polished, and boasting
                                            an impeccably modern fit, this blue,
                                            2-button Lazio suit features a notch
                                            lapel,
                                        </p>
                                    </div>
                                    <ul className="product-meta">
                                        <li>
                                            <span>Availability:</span> In stock
                                        </li>
                                        <li>
                                            <span>Product Code:</span> #4657
                                        </li>
                                        <li>
                                            <span>Tags:</span>
                                            <a href="#"> Fashion,</a>
                                            <a href="#"> Hood,</a>
                                            <a href="#">Classic</a>
                                        </li>
                                    </ul>
                                    <div className="summary-divider" />
                                    <div className="product-cart-from">
                                        <form action="#">
                                            <div className="input-fields">
                                                <div className="input-field">
                                                    <label htmlFor="color">
                                                        Color
                                                    </label>
                                                    <select
                                                        name="color"
                                                        id="color"
                                                    >
                                                        <option value={1}>
                                                            Select Color
                                                        </option>
                                                        <option value={2}>
                                                            Red
                                                        </option>
                                                        <option value={3}>
                                                            Blue
                                                        </option>
                                                        <option value={4}>
                                                            Green
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="size">
                                                        Size
                                                    </label>
                                                    <select
                                                        name="size"
                                                        id="size"
                                                    >
                                                        <option value={1}>
                                                            Select size
                                                        </option>
                                                        <option value={2}>
                                                            Samll
                                                        </option>
                                                        <option value={3}>
                                                            Large
                                                        </option>
                                                        <option value={4}>
                                                            Extra Large
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="qty">
                                                        Qty
                                                    </label>
                                                    <div className="qty-box">
                                                        <input
                                                            type="number"
                                                            id="qty"
                                                            name="qty"
                                                            defaultValue={1}
                                                        />
                                                        <span className="qty-plus">
                                                            <i className="fal fa-sort-up" />
                                                        </span>
                                                        <span className="qty-minus">
                                                            <i className="fal fa-sort-down" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="input-field">
                                                    <a
                                                        href="#"
                                                        className="clear-btn"
                                                    >
                                                        Clear Selection
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="input-fields form-btns">
                                                <div className="input-field">
                                                    <button
                                                        type="submit"
                                                        className="cart-btn"
                                                    >
                                                        <i className="fal fa-shopping-basket" />
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="input-field">
                                                    <a
                                                        className="wishlist-btn"
                                                        href="#"
                                                    >
                                                        <i className="fal fa-heart" />
                                                        Add To Wishlist
                                                    </a>
                                                </div>
                                                <div className="input-field">
                                                    <a
                                                        className="compare-btn"
                                                        href="#"
                                                    >
                                                        <i className="fal fa-expand" />
                                                        Compare
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <ul className="social-share">
                                        <li>
                                            <span>Share This: </span>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-slack" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-whatsapp" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-tab section-gap grey-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-11">
                                <ul
                                    className="nav nav-tabs"
                                    id="productTab"
                                    role="tablist"
                                >
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            data-bs-target="#descriptions"
                                            type="button"
                                            role="tab"
                                        >
                                            Descriptions
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#additional-info"
                                            type="button"
                                            role="tab"
                                        >
                                            Additional Information
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#reviews"
                                            type="button"
                                            role="tab"
                                        >
                                            Reviews (2)
                                        </button>
                                    </li>
                                </ul>
                                <div
                                    className="tab-content"
                                    id="productTabContent"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="descriptions"
                                        role="tabpanel"
                                    >
                                        <p className="mb-30">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum. Sed ut
                                            perspiciatis unde omnis iste natus
                                            error sit voluptatem accusantium
                                            doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit
                                            amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi
                                            tempora incidunt ut labore et dolore
                                            magnam aliquam quaerat
                                            voluptatem.Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum. Sed ut
                                            perspiciatis unde omnis iste natus
                                            error sit voluptatem accusantium
                                            doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit
                                            amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi
                                            tempora incidunt.
                                        </p>
                                        <p className="mb-30">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum. Sed ut
                                            perspiciatis unde omnis iste natus
                                            error sit voluptatem accusantium
                                            doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit
                                            amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi
                                            tempora incidunt ut labore et dolore
                                            magnam aliquam quaerat
                                            voluptatem.Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua.
                                        </p>
                                        <p>
                                            Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum. Sed ut
                                            perspiciatis unde omnis iste natus
                                            error sit voluptatem accusantium
                                            doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit
                                            amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi
                                            tempora incidunt.
                                        </p>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="additional-info"
                                        role="tabpanel"
                                    >
                                        <table className="additional-table">
                                            <tbody>
                                                <tr>
                                                    <th>Model</th>
                                                    <td>
                                                        Microsoft Surface Pro 6
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Processor</th>
                                                    <td>
                                                        Intel® Core™ 8th Gen
                                                        i5-8250U or i7-8650U
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Memory</th>
                                                    <td>8GB or 16GB RAM </td>
                                                </tr>
                                                <tr>
                                                    <th>Storage</th>
                                                    <td>
                                                        Solid-state drive (SSD)
                                                        options: 128GB, 256GB,
                                                        512GB, or 1TB
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Battery life</th>
                                                    <td>
                                                        Up to 13.5 hours of
                                                        local video playback
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Graphics</th>
                                                    <td>
                                                        Intel® UHD Graphics 620
                                                        (i5) <br /> Intel® UHD
                                                        Graphics 620 (i7)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Warranty</th>
                                                    <td>
                                                        1-year limited hardware
                                                        warranty
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="reviews"
                                        role="tabpanel"
                                    >
                                        <div className="review-area">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <ul className="review-lists">
                                                        <li className="single-review">
                                                            <div className="thumb">
                                                                <img
                                                                    src="img/blog/comment-01.jpg"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                            <div className="review-desc">
                                                                <h5 className="name">
                                                                    Rosalina
                                                                    Kelian
                                                                </h5>
                                                                <span className="date">
                                                                    19th May
                                                                    2018
                                                                </span>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetuer
                                                                    adipiscing
                                                                    elit. Aenean
                                                                    commodo
                                                                    ligula eget
                                                                    dolor.
                                                                    Aenean
                                                                    massa. cu
                                                                    sociis
                                                                    natoque
                                                                </p>
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star-half-alt" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="far fa-star" />
                                                                    </li>
                                                                </ul>
                                                                <a
                                                                    href="#"
                                                                    className="reply-btn"
                                                                >
                                                                    Reply
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li className="single-review">
                                                            <div className="thumb">
                                                                <img
                                                                    src="img/blog/comment-02.jpg"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                            <div className="review-desc">
                                                                <h5 className="name">
                                                                    Rosalina
                                                                    Kelian
                                                                </h5>
                                                                <span className="date">
                                                                    19th May
                                                                    2018
                                                                </span>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetuer
                                                                    adipiscing
                                                                    elit. Aenean
                                                                    commodo
                                                                    ligula eget
                                                                    dolor.
                                                                    Aenean
                                                                    massa. cu
                                                                    sociis
                                                                    natoque
                                                                </p>
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star-half-alt" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="far fa-star" />
                                                                    </li>
                                                                </ul>
                                                                <a
                                                                    href="#"
                                                                    className="reply-btn"
                                                                >
                                                                    Reply
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="reviews-form mt-md-gap-40">
                                                        <h5>Add Your Review</h5>
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Your Name"
                                                                    />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input
                                                                        type="email"
                                                                        placeholder="Your Email"
                                                                    />
                                                                </div>
                                                                <div className="col-12">
                                                                    <textarea
                                                                        placeholder="Your Review"
                                                                        defaultValue={
                                                                            ""
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="col-12">
                                                                    <button type="submit">
                                                                        Submit
                                                                        Review
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Shop Area End ======*/}
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

export default shopDetails;
