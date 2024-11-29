import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./customswiper.scss";
import { cards } from "../../../data";

// Custom styles for navigation arrows
const styles = {
    arrow: {
        position: "absolute",
        top: "-67px",
        zIndex: 10,
        cursor: "pointer",
        transform: "translateY(-50%)",
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        width: "50px",
        height: "50px",
        display: "grid",
        alignItems: "center",
        justifyCenter: "center",
        borderRadius: "10px",
        fontSize: "24px",
    },
    leftArrow: {
        right: "60px"
    },
    rightArrow: {
        right: "0px",
    },
};

const CustomSwiper = () => {
    return (
        <div style={{ position: "relative" }}>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                spaceBetween={30}
                slidesPerView={4}
            >
                {cards.map((item, index) => <SwiperSlide style={{ textAlign: "center", padding: "30px" }} key={index}>
                    <div className="groups-section__card card">
                        <div className="card__inner">
                            <p className="card__suptext card__suptext--primary text-white py-1">
                                {item.desc}
                            </p>
                            <a className="card__title mb-4" href="group-profile.html">
                                {item.title}
                            </a>
                            <a className="card-box__poster" href="group-profile.html">
                                <img className="card-box__poster-img" src={item.img} alt="img" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>)}
                {/* <SwiperSlide style={{ textAlign: "center", padding: "30px" }}>
                    <div className="groups-section__card card">
                        <div className="card__inner">
                            <p className="card__suptext card__suptext--primary2">
                                private Group
                            </p>
                            <div className="card__options card-options">
                                <div className="card-options__btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="card-options__inner">
                                    <a className="card-options__link" href="group-profile.html">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.66659 13.3333H13.3333C13.6869 13.3333 14.026 13.1929 14.2761 12.9428C14.5261 12.6928 14.6666 12.3536 14.6666 12V5.33333C14.6666 4.97971 14.5261 4.64057 14.2761 4.39052C14.026 4.14048 13.6869 4 13.3333 4H8.04659C7.82698 3.99886 7.61105 3.9435 7.41798 3.83883C7.22492 3.73415 7.0607 3.58341 6.93992 3.4L6.39325 2.6C6.27247 2.41659 6.10825 2.26585 5.91519 2.16117C5.72212 2.0565 5.50619 2.00114 5.28659 2H2.66659C2.31296 2 1.97382 2.14048 1.72378 2.39052C1.47373 2.64057 1.33325 2.97971 1.33325 3.33333V12C1.33325 12.7333 1.93325 13.3333 2.66659 13.3333Z"
                                                stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M6 8.66669H10" stroke="#0E1218" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>
                                            Leave Group
                                        </span>
                                    </a>
                                    <a className="card-options__link" href="group-profile.html">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                                stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <span>
                                            Subscribe
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <a className="card__title" href="group-profile.html">
                                Mobile Apps
                            </a>
                            <ul className="card__list card-list">
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        Active 2 days ago
                                    </p>
                                </li>
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        10k Members
                                    </p>
                                </li>
                            </ul>
                            <a className="card-box__poster" href="group-profile.html">
                                <img className="card-box__poster-img" src="/assets/landing.jpg" alt="img" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ textAlign: "center", padding: "30px" }}>
                    <div className="groups-section__card card">
                        <div className="card__inner">
                            <p className="card__suptext card__suptext--secondary2">
                                private Group
                            </p>
                            <div className="card__options card-options">
                                <div className="card-options__btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="card-options__inner">
                                    <a className="card-options__link" href="group-profile.html">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.66659 13.3333H13.3333C13.6869 13.3333 14.026 13.1929 14.2761 12.9428C14.5261 12.6928 14.6666 12.3536 14.6666 12V5.33333C14.6666 4.97971 14.5261 4.64057 14.2761 4.39052C14.026 4.14048 13.6869 4 13.3333 4H8.04659C7.82698 3.99886 7.61105 3.9435 7.41798 3.83883C7.22492 3.73415 7.0607 3.58341 6.93992 3.4L6.39325 2.6C6.27247 2.41659 6.10825 2.26585 5.91519 2.16117C5.72212 2.0565 5.50619 2.00114 5.28659 2H2.66659C2.31296 2 1.97382 2.14048 1.72378 2.39052C1.47373 2.64057 1.33325 2.97971 1.33325 3.33333V12C1.33325 12.7333 1.93325 13.3333 2.66659 13.3333Z"
                                                stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M6 8.66669H10" stroke="#0E1218" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>
                                            Leave Group
                                        </span>
                                    </a>
                                    <a className="card-options__link" href="group-profile.html">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                                stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <span>
                                            Subscribe
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <a className="card__title" href="group-profile.html">
                                Mobile Apps
                            </a>
                            <ul className="card__list card-list">
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        Active 2 days ago
                                    </p>
                                </li>
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        10k Members
                                    </p>
                                </li>
                            </ul>
                            <a className="card-box__poster" href="group-profile.html">
                                <img className="card-box__poster-img" src="/assets/landing.jpg" alt="img" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ textAlign: "center", padding: "30px" }}>
                    <div className="groups-section__card card">
                        <div className="card__inner">
                            <p className="card__suptext card__suptext--white bg-white">
                                private Group
                            </p>
                            <div className="card__options card-options">
                                <div className="card-options__btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="card-options__inner">
                                    <a className="card-options__link" href="group-profile.html">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.66659 13.3333H13.3333C13.6869 13.3333 14.026 13.1929 14.2761 12.9428C14.5261 12.6928 14.6666 12.3536 14.6666 12V5.33333C14.6666 4.97971 14.5261 4.64057 14.2761 4.39052C14.026 4.14048 13.6869 4 13.3333 4H8.04659C7.82698 3.99886 7.61105 3.9435 7.41798 3.83883C7.22492 3.73415 7.0607 3.58341 6.93992 3.4L6.39325 2.6C6.27247 2.41659 6.10825 2.26585 5.91519 2.16117C5.72212 2.0565 5.50619 2.00114 5.28659 2H2.66659C2.31296 2 1.97382 2.14048 1.72378 2.39052C1.47373 2.64057 1.33325 2.97971 1.33325 3.33333V12C1.33325 12.7333 1.93325 13.3333 2.66659 13.3333Z"
                                                stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M6 8.66669H10" stroke="#0E1218" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>
                                            Leave Group
                                        </span>
                                    </a>
                                    <a className="card-options__link" href="group-profile.html">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                                stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <span>
                                            Subscribe
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <a className="card__title" href="group-profile.html">
                                Mobile Apps
                            </a>
                            <ul className="card__list card-list">
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        Active 2 days ago
                                    </p>
                                </li>
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        10k Members
                                    </p>
                                </li>
                            </ul>
                            <a className="card-box__poster" href="group-profile.html">
                                <img className="card-box__poster-img" src="/assets/landing.jpg" alt="img" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ textAlign: "center", padding: "30px" }}>
                    <div className="groups-section__card card">
                        <div className="card__inner">
                            <p className="card__suptext card__suptext--pink bg-black text-white">
                                private Group
                            </p>
                            <div className="card__options card-options">
                                <div className="card-options__btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="card-options__inner">
                                    <a className="card-options__link" href="group-profile.html">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.66659 13.3333H13.3333C13.6869 13.3333 14.026 13.1929 14.2761 12.9428C14.5261 12.6928 14.6666 12.3536 14.6666 12V5.33333C14.6666 4.97971 14.5261 4.64057 14.2761 4.39052C14.026 4.14048 13.6869 4 13.3333 4H8.04659C7.82698 3.99886 7.61105 3.9435 7.41798 3.83883C7.22492 3.73415 7.0607 3.58341 6.93992 3.4L6.39325 2.6C6.27247 2.41659 6.10825 2.26585 5.91519 2.16117C5.72212 2.0565 5.50619 2.00114 5.28659 2H2.66659C2.31296 2 1.97382 2.14048 1.72378 2.39052C1.47373 2.64057 1.33325 2.97971 1.33325 3.33333V12C1.33325 12.7333 1.93325 13.3333 2.66659 13.3333Z"
                                                stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M6 8.66669H10" stroke="#0E1218" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>
                                            Leave Group
                                        </span>
                                    </a>
                                    <a className="card-options__link" href="group-profile.html">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                                stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <span>
                                            Subscribe
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <a className="card__title" href="group-profile.html">
                                Mobile Apps
                            </a>
                            <ul className="card__list card-list">
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        Active 2 days ago
                                    </p>
                                </li>
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        10k Members
                                    </p>
                                </li>
                            </ul>
                            <a className="card-box__poster" href="group-profile.html">
                                <img className="card-box__poster-img" src="/assets/landing.jpg" alt="img" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>

            {/* Custom navigation buttons */}
            <div
                className="custom-prev"
                style={{ ...styles.arrow, ...styles.leftArrow }}
            >
                <FaAngleLeft className="text-white bg-transparent border-none" />
            </div>
            <div
                className="custom-next"
                style={{ ...styles.arrow, ...styles.rightArrow }}
            >
                <FaAngleRight className="text-white bg-transparent border-none" />
            </div>
        </div>
    );
};

export default CustomSwiper;
