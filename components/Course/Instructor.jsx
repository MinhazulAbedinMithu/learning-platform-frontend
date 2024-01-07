import Image from "next/image";
import teacherImg from "../../public/instructor.png";

export default function Instructor() {
  return (
    <div
      style={{ backgroundColor: "#6DA5C0" }}
      className="text-white rounded-md p-8"
    >
      <h2 className="text-2xl font-bold text-center md:text-start">This Course Instructor</h2>
      <div
        style={{ backgroundColor: "#D9D9D9" }}
        className="flex flex-col md:flex-row items-center gap-4 text-black rounded-lg p-4 my-5"
      >
        <Image width={80} src={teacherImg} alt="teacher image" />
        <div>
          <h4 className="text-xl font-bold">Instructor Name</h4>
          <p className="font-semibold">Founder, Your Organization name</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#D9D9D9" }}
        className="flex flex-col md:flex-row items-center gap-4 text-black rounded-lg p-4 my-5"
      >
        <Image width={80} src={teacherImg} alt="teacher image" />
        <div>
          <h4 className="text-xl font-bold">Instructor Name</h4>
          <p className="font-semibold">Founder, Your Organization name</p>
        </div>
      </div>
    </div>
  );
}
