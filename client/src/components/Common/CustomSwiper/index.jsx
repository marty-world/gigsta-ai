import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

import "./customswiper.scss";

import { cards } from "../../../data";

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
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            >
                {cards.map((item, index) => <SwiperSlide style={{ textAlign: "center", padding: "30px" }} key={index}>
                    <div className="h-full">
                        <div className="card__inner items-start gap-4">
                            <div className="flex items-start flex-col gap-2">
                                <p className="bg-primary p-2 text-xs rounded-theme-r-xs text-white py-1">
                                    {item.desc}
                                </p>
                                <a className="text-white text-3xl text-left font-semibold font-Display" href="group-profile.html">
                                    {item.title}
                                </a>
                            </div>
                            <a className="card-box__poster" href="group-profile.html">
                                <img className="card-box__poster-img" src={item.img} alt="img" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
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
