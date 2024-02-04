import { MdClose, MdDelete } from "react-icons/md";
import styles from "../../../styles/Dashboard.module.css";

export default function StudyPlan({
  studyPlan,
  handleStudyPlanChange,
  handleModuleChange,
  handleRemoveModule,
  handleAddModule,
  handleRemoveStudyPlan,
  handleAddStudyPlan,
  handleModuleTypeChange,
}) {
  return (
    <div className={`${styles.skyBlueBg} my-4 rounded-lg p-4`}>
      {studyPlan.map((plan, planIndex) => (
        <div key={planIndex} className="mb-4">
          <input
            type="text"
            placeholder="Week Title"
            className={`${styles.tealBg} input w-full mb-2 text-white`}
            value={plan.title}
            onChange={(e) =>
              handleStudyPlanChange(planIndex, "title", e.target.value)
            }
          />
          {plan.modules.map((module, moduleIndex) => (
            <div key={moduleIndex} className="flex gap-4 items-center">
              <div className="grid md:grid-cols-3 gap-4 w-full">
                <input
                  type="text"
                  placeholder="Module Title"
                  className={`${styles.tealBg} input w-full mb-2 text-white`}
                  value={module.title}
                  onChange={(e) =>
                    handleModuleChange(
                      planIndex,
                      moduleIndex,
                      "title",
                      e.target.value
                    )
                  }
                />
                <select
                  value={module.type}
                  onChange={(e) =>
                    handleModuleTypeChange(
                      planIndex,
                      moduleIndex,
                      e.target.value
                    )
                  }
                  className={`${styles.tealBg} select w-full max-w-xs text-white`}
                >
                  <option disabled value="">
                    Pick module type
                  </option>
                  <option value="Live Class">Live Class</option>
                  <option value="Assignment">Assignment</option>
                  <option value="Test">Test</option>
                  <option value="Support Class">Support Class</option>
                </select>
                <input
                  type="text"
                  placeholder="Module Source"
                  className={`${styles.tealBg} input w-full mb-2 text-white`}
                  value={module.src}
                  onChange={(e) =>
                    handleModuleChange(
                      planIndex,
                      moduleIndex,
                      "src",
                      e.target.value
                    )
                  }
                />
              </div>
              <button
                className={`bg-rose-800 p-4 rounded-full text-white`}
                type="button"
                onClick={() => handleRemoveModule(planIndex, moduleIndex)}
              >
                <MdClose />
              </button>
            </div>
          ))}
          <div className="flex items-center gap-4">
            <button
              className={`${styles.tealBg} p-2 rounded-md text-white`}
              type="button"
              onClick={() => handleAddModule(planIndex)}
            >
              Add Module
            </button>
            <button
              className={`bg-rose-800 p-3 rounded-md text-white`}
              type="button"
              onClick={() => handleRemoveStudyPlan(planIndex)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
      <button
        className={`${styles.tealBg} p-3 rounded-md text-white`}
        type="button"
        onClick={handleAddStudyPlan}
      >
        Add Study Plan
      </button>
    </div>
  );
}
