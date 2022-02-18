import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonial.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Testimonial = () => {
    return (
        <div className='testimonial-container'>
            <h1 className='josefins-sans text-2xl mb-4'>Testimonial</h1>
            <h1 className='josefins-sans text-4xl mt-2 mb-16'>WHAT OUR CLIENT SAY</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper pt-10"
            >
                <SwiperSlide>
                <div class="grid grid-cols-3 gap-16 w-9/12 m-auto">
                    <div className="bg-white p-8 slider-card">
                        <img src="https://images.unsplash.com/photo-1608153488161-803b502750fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y291cGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="client-img" />
                        <p className="text-xl py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus provident eum sequi amet quas nemo, esse distinctio ea iste ut!</p>
                        <h1 className="text-2xl font-bold poppins mb-2">Mahade Hasan</h1>
                        <h1 className="text-base poppins text-blue-500">Wedding 06/02/2022</h1>
                    </div>

                    <div className="bg-white p-8 slider-card">
                        <img src="https://images.unsplash.com/photo-1607434489594-e3f57cc075b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdXBsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="client-img" />
                        <p className="text-xl py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus provident eum sequi amet quas nemo, esse distinctio ea iste ut!</p>
                        <h1 className="text-2xl font-bold poppins mb-2">Rifat Chowdhury</h1>
                        <h1 className="text-base poppins text-blue-500">Wedding 06/02/2022</h1>
                    </div>

                    <div className="bg-white p-8 slider-card">
                        <img src="https://images.unsplash.com/photo-1631208446303-40facec6e391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNvdXBsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="client-img" />
                        <p className="text-xl py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus provident eum sequi amet quas nemo, esse distinctio ea iste ut!</p>
                        <h1 className="text-2xl font-bold poppins mb-2">Mahamudul Hoque</h1>
                        <h1 className="text-base poppins text-blue-500">Wedding 06/02/2022</h1>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="grid grid-cols-3 gap-16 w-9/12 m-auto">
                    <div className="bg-white p-8 slider-card">
                        <img src="https://images.unsplash.com/photo-1589544421314-2d8297a767a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvdXBsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="client-img" />
                        <p className="text-xl py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus provident eum sequi amet quas nemo, esse distinctio ea iste ut!</p>
                        <h1 className="text-2xl font-bold poppins mb-2">Mahade Hasan</h1>
                        <h1 className="text-base poppins text-blue-500">Wedding 06/02/2022</h1>
                    </div>

                    <div className="bg-white p-8 slider-card">
                        <img src="https://images.unsplash.com/flagged/photo-1595542767876-715090b35fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGNvdXBsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="client-img" />
                        <p className="text-xl py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus provident eum sequi amet quas nemo, esse distinctio ea iste ut!</p>
                        <h1 className="text-2xl font-bold poppins mb-2">Rifat Chowdhury</h1>
                        <h1 className="text-base poppins text-blue-500">Wedding 06/02/2022</h1>
                    </div>

                    <div className="bg-white p-8 slider-card">
                        <img src="https://images.unsplash.com/photo-1604420504944-faf557a48b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGNvdXBsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="client-img" />
                        <p className="text-xl py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus provident eum sequi amet quas nemo, esse distinctio ea iste ut!</p>
                        <h1 className="text-2xl font-bold poppins mb-2">Mahamudul Hoque</h1>
                        <h1 className="text-base poppins text-blue-500">Wedding 06/02/2022</h1>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;