import Image from "next/image";
import teacherImg from "../../public/instructor.png";

export default function Instructor({ instructors }) {
  return (
    <div
      style={{ backgroundColor: "#6DA5C0" }}
      className="text-white rounded-md p-8"
    >
      <h2 className="text-2xl font-bold text-center md:text-start">
        This Course Instructor
      </h2>
      {instructors?.map((instructor) => (
        <div
          key={instructor._id}
          style={{ backgroundColor: "#D9D9D9" }}
          className="flex flex-col md:flex-row items-center gap-4 text-black rounded-lg p-4 my-5"
        >
          <Image width={80} height={80} src={instructor.photo} alt={instructor.name} />
          <div>
            <h4 className="text-xl font-bold">{instructor.name}</h4>
            <p className="font-semibold">{instructor.designation}, {instructor.organization}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
