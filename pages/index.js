export default function Home() {
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
                                                        Agency
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">
                                                        Consulting
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">
                                                        Software
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">
                                                        Sass
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">OnePage</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="index-onepage.html">
                                                                Agency
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2-onepage.html">
                                                                Consulting
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3-onepage.html">
                                                                Software
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-4-onepage.html">
                                                                Sass
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

            {/*====== Hero Area Start ======*/}
            <section className="hero-area">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5">
                            <div className="hero-text">
                                <span
                                    className="title-tag wow fadeInDown"
                                    data-wow-delay="0.3s"
                                >
                                    It's a lot easy to make a difference
                                    togather.
                                </span>
                                <h2
                                    className="title wow fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    Replication is the <br /> presentation of
                                    <br /> our <span>capabilities</span>
                                </h2>
                                <ul className="hero-btns">
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.7s"
                                    >
                                        <a
                                            href="service-2.html"
                                            className="main-btn"
                                        >
                                            Get Started Now
                                        </a>
                                    </li>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.9s"
                                    >
                                        <a
                                            href="service-2.html"
                                            className="main-btn main-btn-2"
                                        >
                                            Learn More
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-10">
                            <div
                                className="hero-img text-lg-end text-center wow fadeInRight"
                                data-wow-delay="0.3s"
                            >
                                <img
                                    src="img/hero-img/hero-01.png"
                                    alt="HeroImage"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Hero Area Start ======*/}
            {/*====== Service Area Start ======*/}
            <section className="service-area section-gap primary-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section-title text-center mb-30">
                                <span className="title-tag">Our Services</span>
                                <h2 className="title">
                                    We provide wide range of digital
                                    <span>service</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div
                            className="col-md-6 col-sm-10 wow fadeInLeft"
                            data-wow-delay="0.3s"
                        >
                            <div className="service-box mt-30">
                                <div className="row align-items-center">
                                    <div className="col-xl-6">
                                        <div className="service-img">
                                            <img src="img/service/01.png" alt />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-desc">
                                            <h4>Digital Product</h4>
                                            <p>
                                                Productservices are professional
                                                services that help market or
                                                advertise your business online.
                                            </p>
                                            <a
                                                href="service-2.html"
                                                className="service-link"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-sm-10 wow fadeInRight"
                            data-wow-delay="0.4s"
                        >
                            <div className="service-box mt-30">
                                <div className="row align-items-center">
                                    <div className="col-xl-6">
                                        <div className="service-img">
                                            <img src="img/service/02.png" alt />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-desc">
                                            <h4>Game Development</h4>
                                            <p>
                                                Productservices are professional
                                                services that help market or
                                                advertise your business online.
                                            </p>
                                            <a
                                                href="service.html"
                                                className="service-link"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-sm-10 wow fadeInLeft"
                            data-wow-delay="0.5s"
                        >
                            <div className="service-box pro-service mt-30">
                                <div className="row align-items-center">
                                    <div className="col-xl-6">
                                        <div className="service-img">
                                            <img src="img/service/03.png" alt />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-desc">
                                            <h4>
                                                <span>Pro</span>Consultancy
                                            </h4>
                                            <p>
                                                Productservices are professional
                                                services that help market or
                                                advertise your business online.
                                            </p>
                                            <a
                                                href="service-2.html"
                                                className="service-link"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-sm-10 wow fadeInRight"
                            data-wow-delay="0.6s"
                        >
                            <div className="service-box mt-30">
                                <div className="row align-items-center">
                                    <div className="col-xl-6">
                                        <div className="service-img">
                                            <img src="img/service/04.png" alt />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-desc">
                                            <h4>Digital Marketing</h4>
                                            <p>
                                                Productservices are professional
                                                services that help market or
                                                advertise your business online.
                                            </p>
                                            <a
                                                href="service-2.html"
                                                className="service-link"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-generate mt-30 wow fadeInUp">
                        <p>
                            Need Help With Your IT Endeavors? Contact Us to Get
                            a Pro Service!
                        </p>
                        <a href="#">
                            <i className="fal fa-ticket" /> Generate A Ticket
                        </a>
                    </div>
                </div>
            </section>
            {/*====== Service Area End ======*/}
            {/*====== About section Start ======*/}
            <div className="about-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8 wow fadeInLeft">
                            <div className="about-illustration mb-md-gap-50">
                                <img src="img/illustration/01.png" alt />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 wow fadeInRight">
                            <div className="about-text">
                                <div className="section-title mb-30">
                                    <span className="title-tag">About Us</span>
                                    <h2 className="title">
                                        Get an amazing experience with quality
                                        level <span>team</span>
                                    </h2>
                                </div>
                                <p>
                                    Productservices are professional services
                                    that help market or advertise your business
                                    online. Best Way to Manage and Share Work
                                    Resources.
                                </p>
                                <a
                                    href="contact.html"
                                    className="main-btn mt-30"
                                >
                                    Learn More
                                </a>
                                <div className="about-author">
                                    <div className="author-img">
                                        <img
                                            src="img/about-author.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="author-desc">
                                        <h5>Rosalina D. William</h5>
                                        <span>Founder of Bella</span>
                                    </div>
                                    <div className="brand-img">
                                        <img src="img/brand/2.png" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*====== About section End ======*/}
            {/*====== Counter area Start ======*/}
            <section className="counter-section">
                <div className="container">
                    <div className="counter-inner">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="counter-wrap">
                                        <i className="fal fa-user" />
                                        <span className="counter">1165</span>
                                    </div>
                                    <h3 className="title">Projects Executed</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="counter-wrap">
                                        <i className="fal fa-globe" />
                                        <span className="counter">219</span>
                                    </div>
                                    <h3 className="title">Global Presence</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="counter-wrap">
                                        <i className="fal fa-users" />
                                        <span className="counter">5</span>k+
                                    </div>
                                    <h3 className="title">Active Clients</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="counter-wrap">
                                        <i className="fal fa-book" />
                                        <span className="counter">500</span>+
                                    </div>
                                    <h3 className="title">Recognition</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Counter area End ======*/}
            {/*====== Skill area Start ======*/}
            <section className="skill-section section-gap-top">
                <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-lg-6 col-md-10">
                            <div className="skill-text mb-50">
                                <div className="section-title mb-30">
                                    <span className="title-tag">
                                        Our Skillset
                                    </span>
                                    <h2 className="title">
                                        Effective business delivery solutions at
                                        all <span>glance</span>
                                    </h2>
                                </div>
                                <p>
                                    Productservices are professional services
                                    that help market or advertise your business
                                    <br /> online. Best Way to Manage and Share
                                    Work Resources.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-10">
                            <div className="progress-bars mb-md-gap-60">
                                <div
                                    className="single-progress"
                                    data-count={72}
                                >
                                    <div className="title">
                                        <span>Work Progress</span>
                                        <span className="progress-counter">
                                            <span className="count">72</span>%
                                        </span>
                                    </div>
                                    <div className="progressbar-wrap">
                                        <div className="progressbar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skillset-videos fluid-container-left overflow-hidden">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="skillset-video active mb-xs-gap-30">
                                <a
                                    href="https://www.youtube.com/watch?v=pVE92TNDwUk"
                                    className="popup-btn popup-video"
                                >
                                    <i className="fas fa-play" />
                                </a>
                                <div
                                    className="video-bg"
                                    style={{
                                        backgroundImage:
                                            "url(img/skillset/01.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="skillset-video">
                                <a
                                    href="https://www.youtube.com/watch?v=pVE92TNDwUk"
                                    className="popup-btn popup-video"
                                >
                                    <i className="fas fa-play" />
                                </a>
                                <div
                                    className="video-bg"
                                    style={{
                                        backgroundImage:
                                            "url(img/skillset/02.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Skill area End ======*/}
            {/*====== Team section Start ======*/}
            <section className="team-section section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title text-center mb-50">
                                <span className="title-tag">Team</span>
                                <h2 className="title">
                                    Meet with our awesome and exper
                                    <span>team</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="team-members team-member-slider row">
                        <div className="col">
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src="img/teams/01.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Fonder
                                    </span>
                                    <h5 className="name">Romada D. Darblin</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src="img/teams/02.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">CEO</span>
                                    <h5 className="name">
                                        Kilixer B. Brownila
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src="img/teams/03.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Designer
                                    </span>
                                    <h5 className="name">Dumble Y. Yankies</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src="img/teams/04.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Developer
                                    </span>
                                    <h5 className="name">Miranda H. Halim</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src="img/teams/05.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Fonder
                                    </span>
                                    <h5 className="name">Romada D. Darblin</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src="img/teams/06.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">CEO</span>
                                    <h5 className="name">
                                        Kilixer B. Brownila
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src="img/teams/07.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Designer
                                    </span>
                                    <h5 className="name">Dumble Y. Yankies</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member">
                                <div className="member-img">
                                    <img
                                        src="img/teams/08.jpg"
                                        alt="TeamMember"
                                    />
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <span className="member-position">
                                        Developer
                                    </span>
                                    <h5 className="name">Miranda H. Halim</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Team section End ======*/}
            {/*====== CTA section Start ======*/}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-inner">
                        <div className="row align-items-center">
                            <div className="col-xl-5">
                                <div className="cta-text mb-lg-gap-30">
                                    <div className="section-title">
                                        <span className="title-tag">
                                            Make Request
                                        </span>
                                        <h2 className="title">
                                            Make custom order
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="cta-form">
                                    <form action="#">
                                        <div className="field-groups">
                                            <div className="input-field">
                                                <input
                                                    type="email"
                                                    placeholder="Enter email address"
                                                />
                                                <span className="icon">
                                                    <i className="fal fa-envelope" />
                                                </span>
                                            </div>
                                            <div className="input-field">
                                                <input
                                                    type="text"
                                                    placeholder="Your Estimate"
                                                />
                                                <span className="icon">
                                                    <i className="fal fa-pencil" />
                                                </span>
                                            </div>
                                            <div className="input-field">
                                                <button type="submit">
                                                    <i className="fal fa-long-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== CTA section End ======*/}
            {/*====== Testimonials area start ======*/}
            <section className="testimonial-section with-pattern testimonial-brand-section primary-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50">
                                <span className="title-tag">Testimonials</span>
                                <h2 className="title">
                                    Clients <span>feedbacks</span>
                                </h2>
                            </div>
                            <div className="testimonial-slider-progress mb-40">
                                <span className="line-one" />
                                <span className="line-two" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="testimonial-boxes row"
                        id="testimonialSliderOne"
                    >
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-1.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-2.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-1.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-2.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ”Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.”
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="brand-logos section-gap-top row justify-content-between align-items-center">
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/1.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/2.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/3.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/4.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/5.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/1.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/2.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/3.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/4.png" alt="Image" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className="brand-logo">
                                <img src="img/brand/5.png" alt="Image" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Testimonials area End ======*/}
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
                                                    <a href="blog-single.html">
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
                                                    <a href="blog-single.html">
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
                                                    <a href="blog-single.html">
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
        </>
    );
}
