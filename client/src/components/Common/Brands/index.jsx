import { Swiper, SwiperSlide } from "swiper/react";

const BrandsSection = () => {
    return (
        <div className="theme-section container mx-auto !pt-0">
            <Swiper
                spaceBetween={30}
                slidesPerView={6}
                autoplay={true}
                breakpoints={{
                    // Responsive breakpoints
                    320: {
                        slidesPerView: 2, // For small screens
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3, // For medium screens
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 5, // For tablets
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 6, // For desktops
                        spaceBetween: 30,
                    },
                }}
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
    )
};

export default BrandsSection;