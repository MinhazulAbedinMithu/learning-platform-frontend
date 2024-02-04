import Image from "next/image";
import img1 from "../../public/384554719_823550176120426_4245361704016428055_n.png";
import img2 from "../../public/386866336_300150716058850_1125358074596001859_n.png";
import styles from "../../styles/Home.module.css";

export default function About() {
  return (
    <div
      className={`${styles.courseBg} flex flex-col justify-center items-center text-center text-white px-12 md:px-24 py-20`}
    >
      <h2 className="text-4xl m-3">Know why we are best</h2>
      <p className="text-xl mt-4">Creating a Better Future for you</p>
      <Image className="my-8" width={500} src={img1} alt="design" />
      <div className="flex flex-col md:flex-row items-center md:items-start justify-around my-5">
        <div className="text-start">
          <h3 className="text-3xl">
            The Prodigious eLearning Courses <br /> for you
          </h3>
          <div
            style={{ border: "2px #6DA5C0 solid" }}
            className="w-40 my-3"
          ></div>
          <p className="my-8">
            Revolutionize your learning experience and unlock your potential
            with our innovative <br />
            online teaching and learning platform. Discover a world of knowledge
            at your fingertips <br />
            and join the future of education with our dynamic and accessible
            platform.
          </p>
          <ul>
            <li className="flex items-center my-4">
              <div className="badge bg-teal-600 border-0 badge-lg ring-4 ring-teal-700"></div>
              <p className="ml-4">Creative Study Pattern</p>
            </li>
            <li className="flex items-center my-4">
              <div className="badge bg-teal-600 border-0 badge-lg ring-4 ring-teal-700"></div>{" "}
              <p className="ml-4">Quick Crash Courses</p>
            </li>
            <li className="flex items-center my-4">
              <div className="badge bg-teal-600 border-0 badge-lg ring-4 ring-teal-700"></div>{" "}
              <p className="ml-4">Provided with Experimental Examples</p>
            </li>
            <li className="flex items-center my-4">
              <div className="badge bg-teal-600 border-0 badge-lg ring-4 ring-teal-700"></div>{" "}
              <p className="ml-4">Certification Awarded</p>
            </li>
          </ul>
          <button
            style={{ backgroundColor: "#0F969C" }}
            className="btn rounded-ss-2xl rounded-sm border-0 text-white px-10 mt-8"
          >
            Buy Courses
          </button>
        </div>
        <div>
          <Image
            className="mt-4 md:mt-0"
            width={500}
            src={img2}
            alt="best courses"
          />
        </div>
      </div>
    </div>
  );
}
