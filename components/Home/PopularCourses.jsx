import CoursesCard from "./CoursesCard";
import styles from "../../styles/Home.module.css";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import img from "../../public/384554719_823550176120426_4245361704016428055_n.png";
import { useSelector } from "react-redux";

// const courses = [
//   {
//     title: "React Development With Projects",
//     teacher: "Md. Momin Khan",
//     price: 50,
//     ratings: 120,
//   },
//   {
//     title: "Unique T-Shirt Design Master Class",
//     teacher: "Sumaya Bintay Eshak",
//     price: 50,
//     ratings: 100,
//   },
//   {
//     title: "Become a Wordpress Pro with Projects",
//     teacher: "Fahim Wahid Rafi",
//     price: 50,
//     ratings: 60,
//   },
//   {
//     title: "Graphics Design And Freelancing",
//     teacher: "Md. Momin Khan",
//     price: 50,
//     ratings: 150,
//   },
//   {
//     title: "Become a Wordpress Pro with Projects",
//     teacher: "Fahim Wahid Rafi",
//     price: 50,
//     ratings: 60,
//   },
//   {
//     title: "Graphics Design And Freelancing",
//     teacher: "Md. Momin Khan",
//     price: 50,
//     ratings: 150,
//   },
// ];

export default function PopularCourses() {
  const { courses } = useSelector((state) => state.course);
  return (
    <div
      className={`${styles.bannerBg} text-center text-white px-12 md:px-24 py-20`}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl">Popular Courses</h2>
        <Image className="my-8" width={500} src={img} alt="design" />
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="my-8"
      >
        {courses?.map((course, index) => (
          <SwiperSlide key={index}>
            <CoursesCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
