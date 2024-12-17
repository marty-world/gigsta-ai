import React from "react";
import "./productssection.scss"
import CustomSwiper from "../../Common/CustomSwiper";

const ProductsSection = () => {
    return (
        <section className="theme-section !pt-10">
            <div className="custom-container">
                <h2 className="text-[34px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-[600] mb-10">
                    Our Services:
                </h2>
                <CustomSwiper />
            </div>
        </section>
    )
};

export default ProductsSection;