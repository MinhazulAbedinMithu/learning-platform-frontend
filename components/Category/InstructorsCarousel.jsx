import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import hasin from "../../public/hasin 1.png";
import sumit from "../../public/sumit 1.png";
import rabbil from "../../public/rabbil 1.png";
import momin from "../../public/Group 71.png";
import styles from "../../styles/Category.module.css";

export default function InstructorsCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768:{
          slidesPerView: 4,
          spaceBetween: 50,
        }
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="my-8"
    >
      <SwiperSlide>
        <div
          className={`${styles.tealBg} card bg-base-100 shadow-xl rounded-3xl`}
        >
          <figure>
            <Image src={hasin} alt="Hasin" />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Hasin Hayder</h2>
            <p>Founder at Learn with Hasin Hayder</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} card bg-base-100 shadow-xl rounded-3xl`}
        >
          <figure>
            <Image src={sumit} alt="Sumit" />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Sumit Saha</h2>
            <p>Founder at Learn with Sumit</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} card bg-base-100 shadow-xl rounded-3xl`}
        >
          <figure>
            <Image src={rabbil} alt="Rabbil" />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Rabbil Hasan</h2>
            <p>Founder at Learn with Rabbil</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} card bg-base-100 shadow-xl rounded-3xl`}
        >
          <figure>
            <Image src={momin} alt="Momin" />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Momin Khan</h2>
            <p>Founder at Learn with Momin Khan</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} card bg-base-100 shadow-xl rounded-3xl`}
        >
          <figure>
            <Image src={hasin} alt="Hasin" />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Hasin Hayder</h2>
            <p>Founder at Learn with Hasin Hayder</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} card bg-base-100 shadow-xl rounded-3xl`}
        >
          <figure>
            <Image src={sumit} alt="Sumit" />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Sumit Saha</h2>
            <p>Founder at Learn with Sumit</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} card bg-base-100 shadow-xl rounded-3xl`}
        >
          <figure>
            <Image src={rabbil} alt="Rabbil" />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Rabbil Hasan</h2>
            <p>Founder at Learn with Rabbil</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`${styles.tealBg} card bg-base-100 shadow-xl rounded-3xl`}
        >
          <figure>
            <Image src={momin} alt="Momin" />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Momin Khan</h2>
            <p>Founder at Learn with Momin Khan</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
