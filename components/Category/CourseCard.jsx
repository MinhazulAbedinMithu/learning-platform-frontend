import Image from "next/image";
import courseImg from "../../public/card.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "../../styles/Category.module.css";
import Link from "next/link";

export default function CourseCard() {
  return (
    <div style={{ border: "2px #0F969C solid" }} className="card shadow-md">
      <figure>
        <Image width={500} src={courseImg} alt="course title" />
      </figure>
      <div className={`${styles.darkTealBg} card-body rounded-b-xl p-4`}>
        <h2 className="card-title text-start text-2xl mt-4">
          Web Development With PHP & Laravel
        </h2>
        <div className="card-actions justify-between items-center">
          <h3 className="text-2xl">10,000</h3>
          <Link
            href={`/course/web`}
            style={{ backgroundColor: "#0F969C" }}
            className="btn border-0 text-white"
          >
            See Details <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
