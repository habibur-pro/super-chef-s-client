import React from 'react';
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";


const Reviews = ({ reviews }) => {
    console.log('reviews', reviews)
    return (
        <div className='my-container'>

            <h1 className='text-3xl text-gray-600 text-center font-extrabold'>Flavor Feedback</h1>
            <p className='text-center mt-2 mb-12 md:w-1/2 mx-auto'>
                In our journey we have met many customers and tried to serve them as best we can. Today we are so far in their love
            </p>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'> */}
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    }
                }}


                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}


                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide> <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard></SwiperSlide>)
                }
            </Swiper>
            {/* </div> */}
        </div>
    );
};

export default Reviews;