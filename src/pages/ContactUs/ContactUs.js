import React from 'react';
import InnerBanner from '../../components/InnerBanner';
import contactPageShape1 from '../../images/shapes/contact-page-shape-1.png'
import sectionTitleShape1 from '../../images/shapes/section-title-shape-1.png'
import { FiMapPin } from 'react-icons/fi';
import { GoMailRead } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';

const ContactUs = () => {
    return (
        <div>
            <InnerBanner title='Contact Us'></InnerBanner>
            {/* <!--Contact Details Start--> */}
            <section className="contact-details">
                <div className="container">
                    <ul className="list-unstyled contact-details__list">
                        <li>
                            <div className="contact-details__icon">
                                <span className="icon-telephone">  <FiPhoneCall /></span>
                            </div>
                            <div className="contact-details__content">
                                <h4>
                                    <a href="#" className="contact-details__number-1 cntcttextcolor">+91(03224) 255275, 255662,
                                        255843, 255895</a>
                                </h4>
                            </div>
                        </li>
                        <li>
                            <div className="contact-details__icon">
                                <span className="icon-email">
                                    <GoMailRead />

                                </span>
                            </div>
                            <div className="contact-details__content">
                                <h4>
                                    <a href="mailto:icare_haldia@rediffmail.com" className="contact-details__number-1 cntcttextcolor">icare_haldia@rediffmail.com </a>
                                    <a href="mailto:contactus@icare-haldia.org" className="contact-details__number-1 cntcttextcolor">contactus@icare-haldia.org </a>
                                    <a href="mailto:information@icare-haldia.org" className="contact-details__number-1 cntcttextcolor">information@icare-haldia.org </a>
                                </h4>
                            </div>
                        </li>
                        <li>
                            <div className="contact-details__icon">
                                <span className="icon-pin"> <FiMapPin />
                                </span>
                            </div>
                            <div className="contact-details__content">
                                <h4>ICARE Complex, HIT Campus, P.O.-Hatiberia, Haldia, Dist. Purba Medinipur, WEST BENGAL</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* <!--Contact Details End--> */}

            {/* <!--Contact Page Start--> */}
            <section className="contact-page">
                <div className="contact-page-shape-1">
                    <img src={contactPageShape1} alt="" />
                </div>
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-sub-title-box">
                            <p className="section-sub-title">Contact with us</p>
                            <div className="section-title-shape-1">
                                <img src={sectionTitleShape1} alt="" />
                            </div>
                        </div>
                        <h2 className="section-title__title">Feel free to write our <br /> experts</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-page__form">
                                <form action="https://roofsie-html.vercel.app/main-html/assets/inc/sendemail.php" className="comment-one__form contact-form-validated"
                                    novalidate="novalidate">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Name" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Email" name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Phone" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Address" name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea name="message" placeholder="Comments"></textarea>
                                            </div>
                                            <div className="comment-form__btn-box">
                                                <button type="submit" className="thm-btn comment-form__btn"> <i
                                                    className="fa fa-arrow-right"></i> Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Contact Page End--> */}

            {/* <!--Google Map Start--> */}
            <section className="google-map google-map-two">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.9902188359893!2d88.0680414148351!3d22.04996965750746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f05ff93ae1ff%3A0x2e9a4ec487437661!2sHaldia%20Institute%20of%20Management!5e0!3m2!1sen!2sin!4v1654841397216!5m2!1sen!2sin" width="100%" height="500" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="google-map__one" ></iframe>
            </section>
            {/* <!--Google Map End--> */}
        </div>
    );
};

export default ContactUs;