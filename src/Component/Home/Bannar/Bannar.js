import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import slider1 from "../../../Assests/Image/Slider-1.jpg";
import slider2 from "../../../Assests/Image/Slider-2.jpg";
import slider3 from "../../../Assests/Image/Slider-3.jpg";

const Bannar = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                autoplay={{ delay: 4500, disableOnInteraction: false, }}
                pagination={{ clickable: true, }}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
                className="mySwiper">
                <SwiperSlide>
                    <img src={slider1} alt="First Slider" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="First Slider" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="First Slider" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Bannar;