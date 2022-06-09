import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import slider1 from "../../../Assests/Image/Slider-1.jpg";
import slider2 from "../../../Assests/Image/Slider-2.jpg";
import slider3 from "../../../Assests/Image/Slider-3.jpg";
import { Link } from 'react-router-dom';

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
                <SwiperSlide className="relative">
                    <img src={slider1} alt="First Slider" className="lg:h-[80vh] md:h-[75vh] h-[60vh] w-full" />
                    <div className="text-white lg:text-left md:text-left text-center absolute lg:top-[30%] md:top-[25%] top-[20%] lg:left-[20%] md:left-[20%] left-[5%] w-full mx-auto">
                        <p className="text-2xl tracking-widest mb-6">Welcome to Speedy Express</p>
                        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold mb-4">We Provide World Best</h1>
                        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold mb-10">Courier Services</h1>
                        <Link to="/contact">
                            <button className="bg-orange-500 px-6 py-3 rounded-md border border-orange-500 hover:bg-transparent hover:text-orange-500 duration-300">Contact Us</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider2} alt="First Slider" className="lg:h-[80vh] md:h-[75vh] h-[60vh] w-full" />
                    <div className="text-white lg:text-left md:text-left text-center absolute lg:top-[30%] md:top-[25%] top-[20%] lg:left-[20%] md:left-[20%] left-[5%] w-full mx-auto">
                        <p className="text-2xl tracking-widest mb-6">Welcome to Speedy Express</p>
                        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold mb-4">We Provide World Best</h1>
                        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold mb-10">Courier Services</h1>
                        <Link to="/contact">
                            <button className="bg-orange-500 px-6 py-3 rounded-md border border-orange-500 hover:bg-transparent hover:text-orange-500 duration-300">Contact Us</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider3} alt="First Slider" className="lg:h-[80vh] md:h-[75vh] h-[60vh] w-full" />
                    <div className="text-white lg:text-left md:text-left text-center absolute lg:top-[30%] md:top-[25%] top-[20%] lg:left-[20%] md:left-[20%] left-[5%] w-full mx-auto">
                        <p className="text-2xl tracking-widest mb-6">Welcome to Speedy Express</p>
                        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold mb-4">We Provide World Best</h1>
                        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold mb-10">Courier Services</h1>
                        <Link to="/contact">
                            <button className="bg-orange-500 px-6 py-3 rounded-md border border-orange-500 hover:bg-transparent hover:text-orange-500 duration-300">Contact Us</button>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Bannar;