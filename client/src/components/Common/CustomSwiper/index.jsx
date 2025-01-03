import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./customswiper.scss";

import { cards } from "../../../data";
import { Link } from "react-router-dom";

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
        textAlign: "center",
        width: "50px",
        height: "50px",
        display: "flex",
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
    }
};

const CustomSwiper = () => {
    return (
        <div style={{ position: "relative" }}>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                loop={true}
                slidesPerView={3}
                breakpoints={{
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
            >
                {cards.map((item, index) => <SwiperSlide style={{ textAlign: "center", padding: "26px" }} key={index}>
                    <div className="h-full">
                        <div className="card__inner items-start gap-4">
                            <div className="flex items-start flex-col gap-2">
                                <Link className="text-white text-[28px] mb-[15px] text-left font-[500] font-Display hover:text-primary2" to={`/gigs?category=${item.slug}`}>
                                    {item.title}
                                </Link>
                            </div>
                            <Link className="card-box__poster" to={`/gigs?category=${item.slug}`}>
                                <img className="card-box__poster-img" src={item.img} alt="img" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
            <div
                className="custom-prev !w-8 !h-8 !right-10 md:!right-16 !-top-14 justify-center !md:-top-20 md:!w-[50px] md:!h-[50px]"
                style={{ ...styles.arrow, ...styles.leftArrow }}
            >
                <FaAngleLeft className="text-stone-500 p-2 md:p-1 lg:p-0 bg-transparent border-none" />
            </div>
            <div
                className="custom-next !w-8 !h-8 !-top-14 !md:-top-20 justify-center md:!w-[50px] md:!h-[50px]"
                style={{ ...styles.arrow, ...styles.rightArrow }}
            >
                <FaAngleRight className="text-white p-2 md:p-1 lg:p-0 bg-transparent border-none" />
            </div>
        </div>
    );
};

export default CustomSwiper;
