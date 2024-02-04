import Image from "next/image";
import courseImg from "../../public/card.png";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineShareAlt,
  AiFillStar,
} from "react-icons/ai";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function CoursesCard({ course }) {
  // const { title, teacher, ratings, price } = course;
  const { title, _id: courseId, instructor, ratings, price } = course;

  return (
    <div
      style={{ border: "2px #0F969C solid" }}
      className="card mx-2 shadow-md"
    >
      <figure>
        <Image width={500} src={courseImg} alt={title} />
      </figure>
      <div className={`${styles.darkTealBg} card-body rounded-b-xl p-4`}>
        <div className="card-actions justify-between items-center">
          <h3 className="text-sm">{instructor && instructor[0]?.name}</h3>
          <div className="flex" style={{ color: "#0F969C" }}>
            <AiOutlineShoppingCart />
            <AiOutlineHeart />
            <AiOutlineStar />
            <AiOutlineShareAlt />
          </div>
        </div>
        <Link href={`/course/${courseId}`}>
          <h2 className="card-title text-start text-[15px] mt-4">{title}</h2>
        </Link>
        <div className="flex items-center" style={{ color: "#0F969C" }}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <span className="text-white">({ratings})</span>
        </div>
        <div className="card-actions justify-between items-center">
          <h3 className="text-2xl">${price}</h3>
          <button
            style={{ backgroundColor: "#0F969C" }}
            className="btn border-0 text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
