import Image from "next/image";
import courseImg from "../../public/Rectangle 117.png";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import styles from "../../styles/Course.module.css";
import Link from "next/link";

export default function CourseBanner() {
  const [promoCode, setPromoCode] = useState(false);

  const handlePromo = () => {
    setPromoCode(true);
  };
  const closePromo = () => {
    setPromoCode(false);
  };
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-10 text-white">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Web Development with PHP & Laravel
        </h1>
        <p className="text-base mb-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <div className="mb-3 md:mb-0">
            <p style={{ color: "#0F969C" }} className="font-semibold">
              Starting Date
            </p>
            <p className="text-sm">Monday 1 Jan </p>
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
            <Image width={500} src={courseImg} alt="course title" />
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
                100 Days Left
              </button>
              <button
                style={{ backgroundColor: "#0f959c91" }}
                className="btn-sm md:btn border-0 text-white"
              >
                100 Seats Left
              </button>
            </div>
            <div style={{ borderBottom: "2px #0F969C solid" }} className="p-5">
              <div className="card-actions justify-between items-center mb-4">
                <h3 className="text-2xl">10,000/-</h3>
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
                <div className="flex items-center gap-1 text-sm">
                  <FiCheckCircle />
                  <p>4 Months Study Plan</p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <FiCheckCircle />
                  <p>15th Module</p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <FiCheckCircle />
                  <p>30 Live Classes</p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <FiCheckCircle />
                  <p>Assignment</p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <FiCheckCircle />
                  <p>6th Live Projects</p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <FiCheckCircle />
                  <p>Job Market Guideline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
