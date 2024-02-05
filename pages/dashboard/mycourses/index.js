import { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import MyCourseCard from "../../../components/Dashboard/MyCourseCard";
import imgWebPoster from "../../../public/web-poster.webp";
import imgAppPoster from "../../../public/app-dev.jpeg";
import imgReduxPoster from "../../../public/react-redux-poster.png";

export default function Mycourses() {
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
        <h2 className="text-4xl font-bold text-center py-8 text-white">
          Enrolled Course
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <MyCourseCard
            img={imgWebPoster}
            title="Web Development"
            progress="67"
            instructor="Sumit Saha"
          />
          <MyCourseCard
            img={imgAppPoster}
            title="App Development"
            progress="23"
            instructor="Programming Hero"
          />
          <MyCourseCard
            img={imgReduxPoster}
            title="React Js Development"
            progress="46"
            instructor="Sumit Saha"
          />
        </div>
      </div>
    </div>
  );
}
