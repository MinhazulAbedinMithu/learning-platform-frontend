import { MdClose } from "react-icons/md";
import styles from "../../../styles/Dashboard.module.css";

export default function InstructorDetails({
  register,
  handleAddInstructor,
  handleRemoveInstructor,
  handleInstructorChange,
  instructors,
}) {
  return (
    <div className={`${styles.skyBlueBg} my-4 rounded-lg px-4`}>
      {instructors.map((instructor, index) => (
        <div key={index} className="py-4 flex gap-4 items-center">
          <div className="w-full">
            <input
              type="text"
              placeholder="Instructor photo"
              className={`${styles.tealBg} input w-full mb-4 text-white`}
              {...register(`instructors[${index}].photo`, {
                value: instructor.photo,
              })}
              onChange={(e) =>
                handleInstructorChange(index, "photo", e.target.value)
              }
            />
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                className={`${styles.tealBg} input w-full text-white`}
                {...register(`instructors[${index}].name`, {
                  value: instructor.name,
                })}
                onChange={(e) =>
                  handleInstructorChange(index, "name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Designation"
                className={`${styles.tealBg} input w-full text-white`}
                {...register(`instructors[${index}].designation`, {
                  value: instructor.designation,
                })}
                onChange={(e) =>
                  handleInstructorChange(index, "designation", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Organization"
                className={`${styles.tealBg} input w-full text-white`}
                {...register(`instructors[${index}].organization`, {
                  value: instructor.organization,
                })}
                onChange={(e) =>
                  handleInstructorChange(index, "organization", e.target.value)
                }
              />
            </div>
          </div>
          <button
            className={`bg-rose-800 p-4 rounded-full text-white`}
            type="button"
            onClick={() => handleRemoveInstructor(index)}
          >
            <MdClose />
          </button>
        </div>
      ))}
      <button
        className={`${styles.tealBg} p-3 rounded-md text-white my-4`}
        type="button"
        onClick={handleAddInstructor}
      >
        Add Instructor
      </button>
    </div>
  );
}
