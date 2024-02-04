import Image from "next/image";
import courseImg from "../../public/Rectangle 117.png";
import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import styles from "../../styles/Course.module.css";
import Link from "next/link";

export default function CourseBanner({ singleCourse }) {
  const [promoCode, setPromoCode] = useState(false);

  const handlePromo = () => {
    setPromoCode(true);
  };
  const closePromo = () => {
    setPromoCode(false);
  };

  const startDate = new Date(singleCourse?.startDate);
  const endDate = new Date(singleCourse?.endDate);
  let daysLeft;

  if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
    const timeDifference = endDate.getTime() - startDate.getTime();
    daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  } else {
    console.error("Invalid startDate or endDate");
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-10 text-white">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          {singleCourse?.title}
        </h1>
        <p className="text-base mb-10">{singleCourse?.details?.description}</p>
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <div className="mb-3 md:mb-0">
            <p style={{ color: "#0F969C" }} className="font-semibold">
              Starting Date
            </p>
            <p className="text-sm">{singleCourse?.startDate}</p>
          </div>
          <div>
            <p style={{ color: "#0F969C" }} className="font-semibold">
              Class Schedule
            </p>
            <p className="text-sm">Monday, Thursday ( 9:00 PM - 10:30 Pm )</p>
          </div>
        </div>
        <div style={{ backgroundColor: "#6DA5C0" }} className="rounded-xl p-5">
          <div className="relative flex items-center">
            <span className="flex-shrink text-xl text-white font-bold mr-3">
              This Course Offers
            </span>
            <div className="flex-grow border-t border-white"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 my-10">
            <div className="relative flex items-center">
              <div
                style={{ backgroundColor: "#0F969C" }}
                className="badge badge-lg relative -mr-3 border-0"
              ></div>
              <div className={`${styles.tealBg} p-4 rounded-md w-full`}>
                Evaluation Test
              </div>
            </div>
            <div className="relative flex items-center">
              <div
                style={{ backgroundColor: "#0F969C" }}
                className="badge badge-lg relative -mr-3 border-0"
              ></div>
              <div className={`${styles.tealBg} p-4 rounded-md w-full`}>
                Support Class
              </div>
            </div>
            <div className="relative flex items-center">
              <div
                style={{ backgroundColor: "#0F969C" }}
                className="badge badge-lg relative -mr-3 border-0"
              ></div>
              <div className={`${styles.tealBg} p-4 rounded-md w-full`}>
                Tracing Daily Performance
              </div>
            </div>
            <div className="relative flex items-center">
              <div
                style={{ backgroundColor: "#0F969C" }}
                className="badge badge-lg relative -mr-3 border-0"
              ></div>
              <div className={`${styles.tealBg} p-4 rounded-md w-full`}>
                Real Life Projects
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card shadow-md">
          <figure>
            <Image
              width={350}
              height={200}
              src={singleCourse?.thumbnail}
              alt={singleCourse?.title}
            />
          </figure>
          <div
            style={{ border: "2px #0F969C solid" }}
            className={`${styles.darkTealBg} card-body rounded-b-xl p-0 mt-2`}
          >
            <div
              style={{ borderBottom: "2px #0F969C solid" }}
              className="flex items-center justify-center gap-4 py-4"
            >
              <button
                style={{ backgroundColor: "#0f959c91" }}
                className="btn-sm md:btn border-0 text-white"
              >
                {daysLeft >= 0 ? `${daysLeft} Days Left` : "Course Expired"}
              </button>
              <button
                style={{ backgroundColor: "#0f959c91" }}
                className="btn-sm md:btn border-0 text-white"
              >
                {singleCourse?.sits} Seats Left
              </button>
            </div>
            <div style={{ borderBottom: "2px #0F969C solid" }} className="p-5">
              <div className="card-actions justify-between items-center mb-4">
                <h3 className="text-2xl">{singleCourse?.price}/-</h3>
                <button
                  style={{ color: "#0F969C" }}
                  className="border-0 text-white"
                  onClick={() => handlePromo()}
                >
                  Apply Promo Code
                </button>
              </div>
              {promoCode && (
                <div className="flex items-center w-full gap-2 md:gap-5 my-4">
                  <button
                    onClick={() => closePromo()}
                    style={{ backgroundColor: "#0F969C" }}
                    className="btn-xs md:btn border-0 md:border-0 text-white"
                  >
                    X
                  </button>
                  <input
                    type="text"
                    placeholder="Enter Your Promo Code"
                    className={`${styles.tealBg} ${styles.btnBorder} input w-full`}
                  />
                  <button
                    style={{ backgroundColor: "#0F969C" }}
                    className="btn border-0 text-white"
                  >
                    Apply Now
                  </button>
                </div>
              )}
              <Link
                href={`/payment`}
                style={{ backgroundColor: "#0F969C" }}
                className="btn border-0 w-full"
              >
                JOIN THIS COURSE
              </Link>
            </div>
            <div className="p-5">
              <p className="text-lg mb-3">In This Course You Will Get</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                {singleCourse?.benifits?.map((benifit) => (
                  <div key={benifit} className="flex items-center gap-1 text-sm">
                    <FiCheckCircle />
                    <p>{benifit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
