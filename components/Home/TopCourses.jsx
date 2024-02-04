import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/Home.module.css";
import CoursesCard from "./CoursesCard";
import Image from "next/image";
import img from "../../public/384554719_823550176120426_4245361704016428055_n.png";
import { useEffect } from "react";
import axios from "axios";
import { COURSES } from "../../store/apiConfig";
import { useDispatch, useSelector } from "react-redux";
import { setAllCourses } from "../../store/slices/course";

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

export default function TopCourses() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.course);
  useEffect(() => {
    const fetchTopCourse = async () => {
      const response = await axios.get(COURSES.GET_ALL_COURSES);
      dispatch(setAllCourses(response.data.data.result));
    };
    fetchTopCourse();
  }, [dispatch]);
  return (
    <div
      className={`${styles.courseBg} text-center text-white px-12 md:px-24 py-20`}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl">Top Level Courses</h2>
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
