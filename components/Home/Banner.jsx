import styles from "../../styles/Home.module.css";

export default function Banner() {
  return (
    <div className={`${styles.bannerBg} text-center md:p-24 p-12 text-white`}>
      <p className="text-base md:text-xl pb-6">
        ONLINE TEACHING MARKETPLACE & E-LEARNING PLATFORM
      </p>
      <h2 className="text-4xl pt-6 pb-10">
        Empower Yourself with Our Dynamic Online Learning Platform
      </h2>
      <p className="text-lg pb-6">
        Experience personalized and interactive education from anywhere in the
        world with our innovative online learning and teaching platform.
      </p>
      {/* <button className={`${styles.darkTealBg} px-6 py-3 rounded md:m-6 m-2 shadow-md`}>Start Teaching</button> */}
      <button
        className={`${styles.tealBg} font-bold text-xl px-8 py-5 rounded md:m-6 m-2 shadow-md`}
      >
        Start Learning
      </button>
    </div>
  );
}
