import styles from "../../styles/Course.module.css";

export default function StudyCollapse({ plans }) {
  return (
    <div>
      {plans?.map((plan) => (
        <div
          key={plan._id}
          className={`${styles.skyBg} collapse bg-base-200 mb-4`}
        >
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title flex flex-col md:flex-row items-center gap-2 text-xl font-medium">
            <p className={`${styles.tealBg} text-lg p-3 rounded-md`}>
              {plan.title}
            </p>
            {plan.modules.map((module) => (
              <div key={module._id} className="flex flex-col">
                <h3 className="font-bold">
                  {module.title}
                </h3>
                <div className="flex text-sm gap-5">
                  <p>{module.type}</p>
                  <p>1 Assignment</p>
                  <p>2 Test</p>
                  <p>2 Support Class</p>
                </div>
              </div>
            ))}
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      ))}
    </div>
  );
}
