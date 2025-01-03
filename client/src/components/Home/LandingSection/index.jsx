import React from "react";
import "./landingsection.scss";

const LandingSection = () => {
    const titleClass = `mb-2 text-white text-[34px] font-semibold leading-[40px] md:text-[38px] md:leading-[44px] xl:text-[48px] xl:leading-[56px]`;

    return (
        <div className="theme-section !pt-0">
            <div className="custom-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 rounded-[25px] border border-[#4b515a] flex items-center flex-wrap 
                    gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px] section-padding justify-between self-center">
                    <div className="section-top__content section-top-content order-2 md:order-1">

                        <h1 className={titleClass}>
                            A whole world of freelance talent at your fingertips
                        </h1>
                        <ul className="section-top-content__list mt-[25px] font-[16px] ">
                            <li className="card-list__item pb-[10px]">
                                <p className="card-list__text  lg:text-[18px]">
                                    The best for every budget
                                </p>
                            </li>
                            <li className="card-list__item pb-[10px]">
                                <p className="card-list__text  lg:text-[18px]">
                                    Quality work done quickly
                                </p>
                            </li>
                            <li className="card-list__item pb-[10px]">
                                <p className="card-list__text lg:text-[18px]">
                                    Protected payments, every time
                                </p>
                            </li>
                            <li className="card-list__item pb-[10px]">
                                <p className="card-list__text lg:text-[18px]">
                                    24/7 support
                                </p>
                            </li>
                        </ul>
                        <div className="section-top-content__buttons mt-[25px]">
                            <a className="section-top-content__buttons-link section-top-content__buttons-link--green"
                                href="#">
                                Explore Our Gigs
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center order-1 md:order-2">
                        <video className="w-full rounded-theme-r-small" poster='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_800,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png' src="./media/video.mp4" controls></video>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingSection;