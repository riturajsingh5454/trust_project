import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const images = [
    "./images/gal1.jpeg",
    "./images/gal2.jpeg",
    "./images/gal3.jpeg",
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-center m-screen bg-gray-100 px-6 md:px-16">
      <div className="w-3/5 md:w-1/2">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-sm shadow-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-2/5 md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="./images/right-image.jpeg"
          alt="Static"
          className="rounded-sm shadow-lg h-[500px] "
        />
      </div>
    </section>
  );
};

export default Hero;
