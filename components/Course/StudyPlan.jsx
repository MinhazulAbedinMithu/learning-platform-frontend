import StudyCollapse from "./StudyCollapse";

export default function StudyPlan() {
  return (
    <div className="text-white my-12">
      <div
        style={{ borderBottom: "2px #0F969C solid" }}
        className="flex flex-col md:flex-row justify-between items-center pb-4 mb-4"
      >
        <h2 className="text-3xl">Study Plan</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0">
          <p>16 Modules</p>
          <p>* 30 Live Class</p>
          <p>*15 Assignment</p>
          <p>*30Test</p>
        </div>
      </div>
      <StudyCollapse />
    </div>
  );
}
