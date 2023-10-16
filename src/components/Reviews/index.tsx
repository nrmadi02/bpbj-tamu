'use client'

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

const Reviews = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="h-[300px] w-[300px]"
    >
      <SwiperSlide>
        <div className="flex flex-col w-full items-center">
          <p className="text-neutral-700 font-bold px-3">Testimoni 1</p>
          <Image
            alt="testimoni"
            className="w-[100px] mt-3 h-[100px] rounded-full"
            width={100}
            height={100}
            src={"/images/testimoni.jpg"}
          />
        </div>
        <p className="text-center text-neutral-500">
          Deskripsi dari testimoni 1
        </p>
        <p className="font-bold text-center mt-2 text-sm">- User 1</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col w-full items-center">
          <p className="text-neutral-700 font-bold px-3">Testimoni 2</p>
          <Image
            alt="testimoni"
            className="w-[100px] mt-3 h-[100px] rounded-full"
            width={100}
            height={100}
            src={"/images/testimoni.jpg"}
          />
        </div>
        <p className="text-center text-neutral-500">
          Deskripsi dari testimoni 2
        </p>
        <p className="font-bold text-center mt-2 text-sm">- User 2</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col w-full items-center">
          <p className="text-neutral-700 font-bold px-3">Testimoni 3</p>
          <Image
            alt="testimoni"
            className="w-[100px] mt-3 h-[100px] rounded-full"
            width={100}
            height={100}
            src={"/images/testimoni.jpg"}
          />
        </div>
        <p className="text-center text-neutral-500">
          Deskripsi dari testimoni 3
        </p>
        <p className="font-bold text-center mt-2 text-sm">- User 3</p>
      </SwiperSlide>
    </Swiper>
  );
}

export default Reviews