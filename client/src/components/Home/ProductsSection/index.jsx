import React from "react";
import "./productssection.scss"
import CustomSwiper from "../../Common/CustomSwiper";

const ProductsSection = () => {
    return (
        <section className="main__groups-section groups-section">
            <div className="container p-4 mx-auto">
                <div className="groups-section__top groups-section-top">
                    <h2 className="groups-section-top__title">
                        Trusted By:
                    </h2>
                    {/* <div className="groups-section__buttons swiper-buttons">
                        <div className="groups-section__buttons-prev swiper-buttons-prev-btn">
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="icons">
                                    <path id="Icon"
                                        d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                        stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                </g>
                            </svg>
                        </div>
                        <div className="groups-section__buttons-next swiper-buttons-next-btn">
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="icons">
                                    <path id="Icon"
                                        d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                        stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                </g>
                            </svg>
                        </div>
                    </div> */}
                </div>
                <CustomSwiper />
            </div>
        </section>
    )
};

export default ProductsSection;