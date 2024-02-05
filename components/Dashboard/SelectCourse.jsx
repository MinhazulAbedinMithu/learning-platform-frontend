import React from "react";

const SelectCourse = () => {
  return (
    <div className="flex items-center justify-start gap-4 py-6">
      <h4 className="text-white text-3xl font-bold">Selected Course</h4>
      <select className="text-xl px-4 py-2 rounded-lg bg-cyan-900 text-white border border-cyan-500 font-bold">
        <option value="Web Development" className="" key="1">
          Web Development
        </option>
        <option value="Web Development" className="" key="1">
          App Development
        </option>
        <option value="Web Development" className="" key="1">
          Digital Development
        </option>
      </select>
    </div>
  );
};

export default SelectCourse;
