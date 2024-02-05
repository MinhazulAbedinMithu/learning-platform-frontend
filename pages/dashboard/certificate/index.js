import { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import SelectCourse from "../../../components/Dashboard/SelectCourse";

export default function Certificate() {
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
        <div className="flex items-center justify-center pt-10">
          <button className="border px-4 py-2 text-3xl text-white rounded-lg">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
