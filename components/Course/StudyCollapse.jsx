import styles from "../../styles/Course.module.css";

export default function StudyCollapse() {
  return (
    <div>
      <div className={`${styles.skyBg} collapse bg-base-200 mb-4`}>
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title flex flex-col md:flex-row items-center gap-2 text-xl font-medium">
          <p className={`${styles.tealBg} text-lg p-3 rounded-md`}>Module 1</p>
          <div className="flex flex-col">
            <h3 className="font-bold">Write Down Heading On Your Module Title</h3>
            <div className="flex text-sm gap-5">
              <p>2 Live Class</p>
              <p>1 Assignment</p>
              <p>2 Test</p>
              <p>2 Support Class</p>
            </div>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className={`${styles.skyBg} collapse bg-base-200 mb-4`}>
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title flex flex-col md:flex-row items-center gap-2 text-xl font-medium">
          <p className={`${styles.tealBg} text-lg p-3 rounded-md`}>Module 1</p>
          <div className="flex flex-col">
            <h3 className="font-bold">Write Down Heading On Your Module Title</h3>
            <div className="flex text-sm gap-5">
              <p>2 Live Class</p>
              <p>1 Assignment</p>
              <p>2 Test</p>
              <p>2 Support Class</p>
            </div>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className={`${styles.skyBg} collapse bg-base-200 mb-4`}>
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title flex flex-col md:flex-row items-center gap-2 text-xl font-medium">
          <p className={`${styles.tealBg} text-lg p-3 rounded-md`}>Module 1</p>
          <div className="flex flex-col">
            <h3 className="font-bold">Write Down Heading On Your Module Title</h3>
            <div className="flex text-sm gap-5">
              <p>2 Live Class</p>
              <p>1 Assignment</p>
              <p>2 Test</p>
              <p>2 Support Class</p>
            </div>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
