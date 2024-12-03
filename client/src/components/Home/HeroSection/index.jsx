import React from "react";
import "./herosection.scss"
import { IoSearch } from "react-icons/io5";
import { categories } from "../../../data";
import BrandsSection from "../../Common/Brands";

const HeroSection = () => {
    const subtitleClass = `text-secondary text-xs md:text-lg`;
    const titleClass = `mb-2 text-white text-[24px] font-semibold leading-[32px] md:text-[64px] md:leading-[68px]`;

    return (
        <section className="main__heading heading">
            <div className="custom-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center theme-section">
                    <div className="flex flex-col items-start gap-6">
                        <div>
                            <h2 className={titleClass}>
                                Find the perfect <span className="text-primary">freelance</span> services <br className="hidden lg:inline-block" />for your business
                            </h2>
                        </div>
                        <form className="filters-panel__form filters-panel-form" action="#">
                            <div className="w-34 relative">
                                <IoSearch className="absolute top-[50%] right-3 -translate-y-1/2 text-white bg-transparent border-none w-[37px] h-[37px]" />
                                <input className="bg-transparent border rounded-theme-r-small h-full w-full p-5 pr-12 text-white" type="text" placeholder="Search for any service..." />
                            </div>
                        </form>
                        <div className="flex gap-4 items-center flex-wrap mt-2"> <span className="text-white font-medium">Popular:</span>
                            {categories.map(item => (
                                <button
                                    type="button"
                                    className="p-3 rounded-theme-r-small text-sm !bg-transparent text-white transition-all duration-600 
                                            ease-in-out border-slate-500 border hover:!bg-secondary 
                                            hover:border-secondary">{item}</button>
                            ))}
                        </div>
                        {/* <a className="px-6 py-4 flex justify-center items-center text-center text-white text-[14px] font-semibold leading-[20px] rounded-[10px] bg-primary transition-all duration-300 hover:bg-secondary" href="/">
                                Build your business
                            </a> */}
                    </div>
                    <div className="relative w-full h-full flex justify-center items-center hidden md:flex">
                        <div className="relative min-w-[300px] top-4 -left-10 flex flex-col justify-center items-center w-max pt-8 rounded-theme-p-r bg-primary2 z-[1] animate-[smallToDownAnimation_6s_infinite]">
                            <p className="text-black text-[20px] font-semibold leading-[20px] mb-4">
                                Fresh look at <br />familiar elements<br /> is sure to create <br />a great experience<br /> that members of<br /> your community<br /> will love.
                            </p>
                            <div className="elevate-view__box-subtext_img obsolute object-cover rounded-theme-p-r"><img src="assets/index/communication.png" alt="communication" /></div>
                        </div>
                        <img className="absolute left-[237px] top-[-15px] w-[120px] rounded-full object-cover animate-[toUpAnimation_3s_infinite]" src="assets/index/v1.png" alt="index 1" />
                        <img className="absolute right-[101px] top-[08px] w-[166px] rounded-full object-cover animate-[smallToDownAnimation_4s_infinite]" src="assets/index/v2.png" alt="index 2" />
                        <img className="absolute left-[0px] top-[80%] w-[166px] rounded-full object-cover animate-[toRightAnimation_3s_infinite]" src="assets/index/v3.png" alt="index 3" />
                        <img className="absolute left-[267px] bottom-[-25%] w-[100px] rounded-full object-cover animate-[smallToDownAnimation_4s_infinite]" src="assets/index/v4.png" alt="index 4" />
                        <img className="absolute left-[70px] top-[27px] w-[100px] rounded-full object-cover animate-[toLeftAnimation_4s_infinite]" src="assets/index/m1.png" alt="index 5" />
                        <img className="absolute left-[24px] top-[43%] w-[100px] rounded-full object-cover animate-[toRightAnimation_3s_infinite]" src="assets/index/m2.png" alt="index 6" />
                        <img className="absolute right-[200px] top-[93%] w-[100px] rounded-full object-cover animate-[toLeftAnimation_4s_infinite]" src="assets/index/m3.png" alt="index 7" />
                        <img className="absolute right-[33px] bottom-[10%] w-[171px] rounded-full object-cover animate-[smallToDownAnimation_4s_infinite]" src="assets/index/m4.png" alt="index 8" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;