import React, { useState } from "react";
import "./herosection.scss"
import { IoSearch } from "react-icons/io5";
import { categories } from "../../../data";
import BrandsSection from "../../Common/Brands";
import { useNavigate, Link } from "react-router-dom";

const popularServices = [
    { to: "/gigs?search=logo", label: "Design Logo" },
    { to: "/gigs?search=eCommerce%20website", label: "eCommerce website" },
    { to: "/gigs?search=branding", label: "Branding" },
];

const HeroSection = () => {
    const subtitleClass = `text-secondary text-xs md:text-lg`;
    const titleClass = `mb-2 text-white text-[28px] font-semibold leading-[32px] md:text-[36px] md:leading-[40px] lg:text-[48px] lg:leading-[52px] xl:text-[64px] xl:leading-[68px]`;
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (search) {
            navigate(`/gigs?search=${search}`);
        }
    }

    return (
        <section className="main__heading heading">
            <div className="custom-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center theme-section">
                    <div className="flex flex-col items-start gap-6 order-2 md:order-1">
                        <div>
                            <h2 className={titleClass}>
                                Find the perfect <span className="text-primary">freelance</span> services <br className="hidden xl:inline-block" />for your business
                            </h2>
                        </div>
                        <div className="w-full">
                            <div className="w-full relative">
                                <IoSearch onClick={handleSearch} className="absolute top-[50%] right-3 -translate-y-1/2 
                                    text-white bg-transparent border-none w-[28px] h-[28px] lg:w-[37px] lg:h-[37px]" />
                                <input className="bg-transparent border rounded-theme-r-small h-full w-full p-3.5 lg:p-5 pr-12 text-white"
                                    onChange={(({ target: { value } }) => setSearch(value))} type="search" placeholder="Search for any service..." />
                            </div>
                        </div>
                        <div className="flex gap-2 lg:gap-4 items-center flex-wrap mt-2"> <span className="text-white text-xs lg:text-sm font-medium">Popular:</span>
                            {popularServices.map((service, index) => (
                                <Link
                                    key={index}
                                    to={service.to}
                                    className="p-2 lg:px-3 lg:py-3 min-h-[20px] leading-[14px] rounded-[5px] text-xs lg:text-sm !bg-transparent text-white transition-all 
                                        duration-600 ease-in-out border-slate-500 border hover:!bg-secondary hover:border-secondary"
                                >
                                    {service.label}
                                </Link>
                            ))}
                        </div>
                        {/* <a className="px-6 py-4 flex justify-center items-center text-center text-white text-[14px] font-semibold leading-[20px] rounded-[10px] bg-primary transition-all duration-300 hover:bg-secondary" href="/">
                            Build your business
                        </a> */}
                    </div>
                    <div className="relative w-full h-full flex justify-center items-center order-1 md:order-2">
                        <div className="relative max-w-[300px] min-w-full lg:min-w-[300px] xl:top-4 xl:-left-10 flex flex-col 
                            justify-center items-center w-max p-6 md:p-8 rounded-theme-r-small md:rounded-theme-p-r bg-primary2 z-[1] animate-[smallToDownAnimation_6s_infinite]">
                            <p className="text-black text-[16px] md:text-[20px] font-semibold leading-[20px] mb-4">
                                Fresh look at <br className="hidden md:inline-block" />familiar elements <br className="hidden md:inline-block" />
                                is sure to create <br className="hidden md:inline-block" />a great experience <br className="hidden md:inline-block" />
                                that members of<br className="hidden md:inline-block" /> your community <br className="hidden md:inline-block" />will love.
                            </p>
                            <div className="elevate-view__box-subtext_img obsolute object-cover rounded-theme-p-r"><img src="assets/index/communication.png" alt="communication" /></div>
                        </div>
                        <img className="hidden xl:block absolute left-[237px] top-[-15px] w-[120px] rounded-full object-cover animate-[toUpAnimation_3s_infinite]" src="assets/index/v1.png" alt="index 1" />
                        <img className="hidden xl:block absolute right-[101px] top-[08px] w-[166px] rounded-full object-cover animate-[smallToDownAnimation_4s_infinite]" src="assets/index/v2.png" alt="index 2" />
                        <img className="hidden xl:block absolute left-[0px] top-[80%] w-[166px] rounded-full object-cover animate-[toRightAnimation_3s_infinite]" src="assets/index/v3.png" alt="index 3" />
                        <img className="hidden xl:block absolute left-[267px] bottom-[-25%] w-[100px] rounded-full object-cover animate-[smallToDownAnimation_4s_infinite]" src="assets/index/v4.png" alt="index 4" />
                        <img className="hidden xl:block absolute left-[70px] top-[27px] w-[100px] rounded-full object-cover animate-[toLeftAnimation_4s_infinite]" src="assets/index/m1.png" alt="index 5" />
                        <img className="hidden xl:block absolute left-[24px] top-[43%] w-[100px] rounded-full object-cover animate-[toRightAnimation_3s_infinite]" src="assets/index/m2.png" alt="index 6" />
                        <img className="hidden xl:block absolute right-[200px] top-[93%] w-[100px] rounded-full object-cover animate-[toLeftAnimation_4s_infinite]" src="assets/index/m3.png" alt="index 7" />
                        <img className="hidden xl:block absolute right-[33px] bottom-[10%] w-[171px] rounded-full object-cover animate-[smallToDownAnimation_4s_infinite]" src="assets/index/m4.png" alt="index 8" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;