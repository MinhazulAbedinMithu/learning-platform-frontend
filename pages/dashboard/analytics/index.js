import { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import styles from "../../../styles/Dashboard.module.css";

export default function Analytics() {
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
        } transition-all flex-grow p-4 md:h-screen`}
      >
        <div className="text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 w-full">
            <div
              className={`${styles.skyBlueBg} mb-2 rounded-md text-center p-6`}
            >
              <p className="text-lg font-semibold">Average Score:</p>
              <p className="text-9xl font-bold">85</p>
            </div>
            <div
              className={`${styles.skyBlueBg} mb-2 rounded-md text-center p-6`}
            >
              <p className="text-lg font-semibold">Total Students:</p>
              <p className="text-9xl font-bold">120</p>
            </div>
            <div
              className={`${styles.skyBlueBg} mb-2 rounded-md text-center p-6`}
            >
              <p className="text-lg font-semibold mb-4">Average Pass Rate:</p>
              <div
                className="radial-progress font-bold text-xl"
                style={{
                  "--value": "90",
                  "--size": "12rem",
                  "--thickness": "2px",
                }}
              >90%
              </div>
            </div>
            <div
              className={`${styles.skyBlueBg} mb-2 rounded-md text-center p-6`}
            >
              <p className="text-lg font-semibold mb-4">Course Completion Rate:</p>
              <div
                className="radial-progress font-bold text-xl"
                style={{
                  "--value": "80",
                  "--size": "12rem",
                  "--thickness": "2px",
                }}
              >80%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
