import CourseCard from "../../../components/Category/CourseCard";
import HiredCarousel from "../../../components/Category/HiredCarousel";
import InstructorsCarousel from "../../../components/Category/InstructorsCarousel";
import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import styles from "../../../styles/Category.module.css";

export default function CategoryDetails() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.categoryBanner} h-52 md:h-80`}>
        <div className={`${styles.overlay}`}>
          <h1 className="text-white text-xl md:text-5xl font-bold text-center">
            LEARN WEB DEVELOPMENT
          </h1>
        </div>
      </div>
      <div className={`${styles.coursesBg} text-white px-12 md:px-24 py-20`}>
        <h3 className="text-2xl mb-10">Live Courses And Workshops</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <CourseCard />
        </div>
      </div>
      <div
        style={{ backgroundColor: "#0F969C" }}
        className="text-center px-12 md:px-24 py-20 text-white"
      >
        <h3 className="text-2xl font-bold">
          INDUSTRY EXPERTS TO BUILD A CAREER
        </h3>
        <p className="text-lg">
          Develop skills with the best instructors in the country, click the
          button below.
        </p>
        <InstructorsCarousel />
      </div>
      <div
        className={`${styles.hiredBg} text-white text-center py-20`}
      >
        <h2 className="text-2xl font-bold">Who Got Hired</h2>
        <HiredCarousel />
      </div>
      <Footer />
    </div>
  );
}
