import { useRef, useState } from "react";
import CourseBanner from "../../../components/Course/CourseBanner";
import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import styles from "../../../styles/Course.module.css";
import StudyPlan from "../../../components/Course/StudyPlan";
import Instructor from "../../../components/Course/Instructor";
import Requirements from "../../../components/Course/Requirements";
import Help from "../../../components/Course/Help";
import Payment from "../../../components/Course/Payment";

export default function CourseDetails() {
  const studyRef = useRef();
  const instructorRef = useRef();
  const requirementsRef = useRef();
  const helpRef = useRef();
  const [details, setDetails] = useState("study");

  const handleDetails = (dt) => {
    setDetails(dt);
    switch (dt) {
      case "study":
        studyRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "instructor":
        instructorRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "requirements":
        requirementsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "help":
        helpRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar />
      <div className={`${styles.courseBg} px-12 md:px-24 py-20`}>
        <CourseBanner />
        <div
          style={{ borderBottom: "2px #0F969C solid" }}
          className="flex flex-col md:flex-row md:items-center gap-4 mt-12 pb-4"
        >
          <button
            className={
              details === "study"
                ? `${styles.skyBg} btn border-0`
                : `${styles.btnBorder} btn text-white bg-transparent`
            }
            onClick={() => handleDetails("study")}
          >
            Study Plan
          </button>
          <button
            className={
              details === "instructor"
                ? `${styles.skyBg} btn border-0`
                : `${styles.btnBorder} btn text-white bg-transparent`
            }
            onClick={() => handleDetails("instructor")}
          >
            Instructor
          </button>
          <button
            className={
              details === "requirements"
                ? `${styles.skyBg} btn border-0`
                : `${styles.btnBorder} btn text-white bg-transparent`
            }
            onClick={() => handleDetails("requirements")}
          >
            Requirements
          </button>
          <button
            className={
              details === "help"
                ? `${styles.skyBg} btn border-0`
                : `${styles.btnBorder} btn text-white bg-transparent`
            }
            onClick={() => handleDetails("help")}
          >
            Help
          </button>
        </div>
        <div ref={studyRef}>
          <StudyPlan />
        </div>
        <div ref={instructorRef}>
          <Instructor />
        </div>
        <div ref={requirementsRef}>
          <Requirements />
        </div>
        <div ref={helpRef}>
          <Help />
        </div>
        <Payment />
      </div>
      <Footer />
    </div>
  );
}
