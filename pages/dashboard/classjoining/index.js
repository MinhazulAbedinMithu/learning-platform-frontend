import { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import SelectCourse from "../../../components/Dashboard/SelectCourse";

export default function Classjoining() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
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
        <SelectCourse />

        <div className="border max-w-[500px] border-cyan-800 shadow-lg rounded-lg p-3 text-white text-base">
          <h4 className="text-2xl font-bold w-auto">Web Development</h4>
          <p className="py-1">Sumit Saha</p>
          <p className="pb-2">schedule: Sun, Wed (7-9pm)</p>
          <div className="text-end">
            <button className="bg-cyan-700 text-white font-bold px-6 py-2 text-xl rounded-lg">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
