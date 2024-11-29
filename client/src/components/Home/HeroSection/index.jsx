import React from "react";
import "./herosection.scss"
import ProductsSection from "../ProductsSection";
import { IoSearch } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { categories } from "../../../data";

const HeroSection = () => {
    return (
        <>
            <section className="theme-section main__heading heading !pb-10">
                <div className="custom-container">
                    <div className="grid grid-cols-1 relative">
                        <div className="flex flex-col gap-8 w-full items-center">
                            <h1 className="heading__title text-6xl text-white">
                                <span>
                                    Find
                                </span>
                                {" "}the perfect <em>freelance</em> services{" "}
                                <span>
                                    for
                                </span>
                                {" "}your business
                            </h1>
                            <form className="filters-panel__form filters-panel-form" action="#">
                                <div className="w-72 relative">
                                    <IoSearch className="absolute top-[50%] right-3 -translate-y-1/2 text-white bg-transparent border-none" />
                                    <input className="bg-transparent border rounded-theme-r-small focus:outline-none focus:border-primary h-full w-full p-4 pr-12 text-white" type="text" placeholder="Search..." />
                                </div>
                            </form>
                            <div>
                                {/* <p className="text-white text-center poppins-medium mb-4">Popular:</p> */}
                                <div className="flex gap-4 items-center flex-wrap mt-4">
                                    {categories.map(item => (
                                        <button 
                                            type="button" 
                                            className="p-3 rounded-theme-r-small !bg-transparent text-white transition-all duration-600 
                                                ease-in-out border-white border hover:!bg-secondary 
                                                hover:border-secondary">{item}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img className="elevate-view__index1" src="assets/index/placeholder-1.png" alt="img" />
                        <img className="elevate-view__index2" src="assets/index/placeholder-2.png" alt="img" />
                        <img className="elevate-view__index4" src="assets/index/placeholder-3.png" alt="img" />
                        <img className="elevate-view__index8" src="assets/index/placeholder-4.png" alt="img" />
                    </div>
                    <div className="pt-28">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={6}
                        >
                            {[
                                { brand: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google2x.4fa6c20.png" }, 
                                { brand: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png" }, 
                                { brand: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" }, 
                                { brand: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" }, 
                                { brand: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" }, 
                                { brand: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" }, 
                                { brand: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" }, 
                                { brand: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" }, 
                            ].map((item) => <SwiperSlide style={{ textAlign: "center", padding: "15px" }}>
                                <div className="overflow-hidden w-max mx-auto">
                                    <img className="w-full object-contain h-16" src={item.brand} alt="img" />
                                </div>
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* <section className="main__count count">
                <div className="container p-4 mx-auto">
                    <div className="count__inner">
                        <a className="count__item count-item flex flex-col justify-between items-center" href="courses.html">
                            <div className="count-item__icon">
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons">
                                        <path id="Icon"
                                            d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                            stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="count-item__text">
                                    <span>
                                        Website Design
                                    </span>
                                </p>
                                <p className="count-item__subtext">
                                    Designs to make <br />you stand out.
                                </p>
                            </div>
                        </a>
                        <a className="count__item count-item flex flex-col justify-between items-center" href="groups.html">
                            <div className="count-item__icon">
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons">
                                        <path id="Icon"
                                            d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                            stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="count-item__text">
                                    <span>
                                        WordPress
                                    </span>
                                </p>
                                <p className="count-item__subtext">
                                    Customize your <br />website
                                </p>
                            </div>
                        </a>
                        <a className="count__item count-item flex flex-col justify-between items-center" href="members.html">
                            <div className="count-item__icon">
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons">
                                        <path id="Icon"
                                            d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                            stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="count-item__text">
                                    <span>
                                        Logo Design
                                    </span>
                                </p>
                                <p className="count-item__subtext">
                                    Build your <br />brand
                                </p>
                            </div>
                        </a>
                        <a className="count__item count-item flex flex-col justify-between items-center" href="#">
                            <div className="count-item__icon">
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons">
                                        <path id="Icon"
                                            d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                            stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="count-item__text">
                                    <span>
                                        AI Services
                                    </span>
                                </p>
                                <p className="count-item__subtext">
                                    Add AI with <br />experts who get it
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section> */}
        </>
    )
};

export default HeroSection;