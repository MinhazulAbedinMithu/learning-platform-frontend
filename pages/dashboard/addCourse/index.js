import { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import styles from "../../../styles/Dashboard.module.css";
import AddCourseForm from "../../../components/Dashboard/addCourse/AddCourseForm";

export default function AddCourse() {
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
        <h4 className="text-xl font-semibold text-white">Add new course</h4>
        <div className={`${styles.skyBlueBg} my-4 rounded-lg`}>
          <h3 className="text-white text-xl font-semibold p-4">
              Course Details
          </h3>
        </div>
        <div>
          <AddCourseForm />
        </div>
      </div>
    </div>
  );
}
