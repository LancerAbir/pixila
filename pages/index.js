import HomeCounterSection from "../src/components/common/HomeCounterSection";
import HomeCTASection from "../src/components/common/HomeCTASection";
import HomeSkillSection from "../src/components/common/HomeSkillSection";
import Footer1 from "../src/layout/Footer/Footer1";
import HomeHeader from "../src/layout/Header/HomeHeader";

export default function Home() {
    return (
        <>
            {/*====== Header Start ======*/}
            <HomeHeader />
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
            <HomeCounterSection />
            {/*====== Counter area End ======*/}
            {/*====== Skill area Start ======*/}
            <HomeSkillSection />
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
            <HomeCTASection />
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
            <Footer1 />
            {/*====== Footer End ======*/}
        </>
    );
}
