import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import teacher from "../../public/instructor.png";
import Image from "next/image";
import styles from "../../styles/Category.module.css";

export default function HiredCarousel() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      centeredSlides={true}
      className="mySwiper mt-12"
    >
      <SwiperSlide>
        <div
          className={`${styles.tealBg} flex flex-col items-center p-6 rounded-xl`}
        >
          <h4 className="font-bold text-lg">Md. Momin Khan</h4>
          <Image className="py-4" src={teacher} alt="instructor" />
          <p className="font-semibold">Product Designer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} flex flex-col items-center p-6 rounded-xl`}
        >
          <h4 className="font-bold text-lg">Md. Momin Khan</h4>
          <Image className="py-4" src={teacher} alt="instructor" />
          <p className="font-semibold">Product Designer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} flex flex-col items-center p-6 rounded-xl`}
        >
          <h4 className="font-bold text-lg">Md. Momin Khan</h4>
          <Image className="py-4" src={teacher} alt="instructor" />
          <p className="font-semibold">Product Designer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} flex flex-col items-center p-6 rounded-xl`}
        >
          <h4 className="font-bold text-lg">Md. Momin Khan</h4>
          <Image className="py-4" src={teacher} alt="instructor" />
          <p className="font-semibold">Product Designer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} flex flex-col items-center p-6 rounded-xl`}
        >
          <h4 className="font-bold text-lg">Md. Momin Khan</h4>
          <Image className="py-4" src={teacher} alt="instructor" />
          <p className="font-semibold">Product Designer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} flex flex-col items-center p-6 rounded-xl`}
        >
          <h4 className="font-bold text-lg">Md. Momin Khan</h4>
          <Image className="py-4" src={teacher} alt="instructor" />
          <p className="font-semibold">Product Designer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} flex flex-col items-center p-6 rounded-xl`}
        >
          <h4 className="font-bold text-lg">Md. Momin Khan</h4>
          <Image className="py-4" src={teacher} alt="instructor" />
          <p className="font-semibold">Product Designer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} flex flex-col items-center p-6 rounded-xl`}
        >
          <h4 className="font-bold text-lg">Md. Momin Khan</h4>
          <Image className="py-4" src={teacher} alt="instructor" />
          <p className="font-semibold">Product Designer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} flex flex-col items-center p-6 rounded-xl`}
        >
          <h4 className="font-bold text-lg">Md. Momin Khan</h4>
          <Image className="py-4" src={teacher} alt="instructor" />
          <p className="font-semibold">Product Designer</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
