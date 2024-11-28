import React from "react";
import "./landingsection.scss";

const LandingSection = () => {
    return (
        <div className="main__section-top section-top section-top--main">
            <div className="container p-4 mx-auto">
                <div className="section-top__inner">
                    <div className="section-top__content section-top-content">
                        <p className="section-top-content__date">
                            Explore your business
                        </p>
                        <h1 className="section-top-content__title title">
                            A whole world of freelance talent at your fingertips
                        </h1>
                        <ul className="section-top-content__list card-list">
                            <li className="card-list__item">
                                <p className="card-list__text">
                                    The best for every budget
                                </p>
                            </li>
                            <li className="card-list__item">
                                <p className="card-list__text">
                                    Quality work done quickly
                                </p>
                            </li>
                            <li className="card-list__item">
                                <p className="card-list__text">
                                    Protected payments, every time
                                </p>
                            </li>
                            <li className="card-list__item">
                                <p className="card-list__text">
                                    24/7 support
                                </p>
                            </li>
                        </ul>
                        <div className="section-top-content__buttons">
                            <a className="section-top-content__buttons-link section-top-content__buttons-link--green"
                                href="#">
                                Explore
                            </a>
                        </div>
                    </div>
                    <div className="section-top__img flex items-center justify-center">
                        <video poster='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png' src="./media/video.mp4" controls></video>
                        {/* <img className="section-top__img-image" src="/assets/landing.jpg" alt="img" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingSection;