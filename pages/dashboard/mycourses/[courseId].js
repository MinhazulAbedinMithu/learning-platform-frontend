import React, { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import imgWebPoster from "../../../public/web-poster.webp";
import Image from "next/image";

const CourseDetailsPage = () => {
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
        <div className="coverphoto h-[260px] w-full relative rounded-lg">
          <Image
            src={imgWebPoster}
            alt="background"
            className="w-full h-full bg-cover rounded-lg"
          />
          <div className="z-10 absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/25 via-violet-400/75 to-lime-300/50 rounded-lg p-4 flex flex-col justify-end">
            <h2 className="text-3xl text-green-300 font-bold">
              Web Development
            </h2>
            <p className="text-white text-xl py-2 font-bold">Sumit Saha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
