import React, { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import SelectCourse from "../../../components/Dashboard/SelectCourse";

const CreateAssignment = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex">
      <DashboardNavbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div
        style={{ backgroundColor: "#03353C" }}
        className={`${
          isSidebarOpen ? "ml-64" : "ml-12"
        } transition-all flex-grow p-4 min-h-screen`}
      >
        <h4 className="text-xl font-semibold text-white">Create Assignment</h4>
        <div className=" w-full mt-6">
          <SelectCourse />
          <form action="">
            <div>
              <label htmlFor="question1" className="text-xl text-white pb-2">
                What is Web?
              </label>
              <textarea
                name="question1"
                id="question1"
                cols="50"
                rows="7"
                className="block bg-transparent border border-white rounded-md w-full"
              ></textarea>
            </div>
            <div className="py-4">
              <label
                htmlFor="question1"
                className="text-xl text-white mb-2 block"
              >
                What is HTML?
              </label>
              <textarea
                name="question1"
                id="question1"
                cols="50"
                rows="4"
                className="block bg-transparent border border-white rounded-md w-full"
              ></textarea>
            </div>
            <div className="py-4">
              <label
                htmlFor="question1"
                className="text-xl text-white mb-2 block"
              >
                What is DOM?
              </label>
              <label htmlFor="dom" className="text-lg text-white block">
                <input
                  type="checkbox"
                  name="dom"
                  id="dom"
                  value="Document Object Model"
                />
                Document Object Model
              </label>
              <label htmlFor="dom" className="text-lg text-white block">
                <input
                  type="checkbox"
                  name="dom"
                  id="dom"
                  value="Document Object Mod"
                />
                Document Object Model
              </label>
              <label htmlFor="dom" className="text-lg text-white block">
                <input
                  type="checkbox"
                  name="dom"
                  id="dom"
                  value="Doc Orgin Model"
                />
                Doc Origin Model
              </label>
              <label htmlFor="dom" className="text-lg text-white block">
                <input
                  type="checkbox"
                  name="dom"
                  id="dom"
                  value="Document Object Mod"
                />
                Document origin Morocco
              </label>
            </div>
            <div className="py-4">
              <label
                htmlFor="question1"
                className="text-xl text-white mb-2 block"
              >
                What is Box Model?
              </label>
              <textarea
                name="question1"
                id="question1"
                cols="50"
                rows="4"
                className="block bg-transparent border border-white rounded-md w-full"
              ></textarea>
            </div>
            <div className="py-4">
              <label
                htmlFor="question1"
                className="text-xl text-white mb-2 block"
              >
                What is CSS?
              </label>
              <label htmlFor="dom" className="text-lg text-white block">
                <input
                  type="checkbox"
                  name="dom"
                  id="dom"
                  value="Document Object Model"
                />
                chase shape style
              </label>
              <label htmlFor="dom" className="text-lg text-white block">
                <input
                  type="checkbox"
                  name="dom"
                  id="dom"
                  value="Document Object Model"
                />
                case sheet style
              </label>
              <label htmlFor="dom" className="text-lg text-white block">
                <input
                  type="checkbox"
                  name="dom"
                  id="dom"
                  value="Doc Orgin Model"
                />
                Consumer super shop
              </label>
              <label htmlFor="dom" className="text-lg text-white block">
                <input
                  type="checkbox"
                  name="dom"
                  id="dom"
                  value="Document Object Model"
                />
                cascading style sheet
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
              >
                Create Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
