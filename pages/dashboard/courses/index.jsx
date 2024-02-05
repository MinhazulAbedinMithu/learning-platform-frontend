import React, { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import styles from "../../../styles/Dashboard.module.css";

const Courses = () => {
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
        <h4 className="text-xl font-semibold text-white">Courses</h4>
        <div className="overflow-x-auto mt-6">
          <table className="table">
            {/* head */}
            <thead
              className={`${styles.skyBlueBg} text-white text-lg font-semibold`}
            >
              <tr className="font-bold">
                <th>No.</th>
                <th>Title</th>
                <th>Instructor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody
              className={`${styles.skyBlueBg} text-lg font-semibold text-white`}
            >
              <tr className="bg-base-200">
                <th>1</th>
                <td>Web Development</td>
                <td>Sumit Saha</td>
                <td className="flex items-center justify-start gap-x-4">
                  <button className="bg-cyan-700 px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-600 px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="bg-base-200">
                <th>2</th>
                <td>App Development</td>
                <td>Momin Khan</td>
                <td className="flex items-center justify-start gap-x-4">
                  <button className="bg-cyan-700 px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-600 px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="bg-base-200">
                <th>3</th>
                <td>Digital Marketing</td>
                <td>Shamim Hossain</td>
                <td className="flex items-center justify-start gap-x-4">
                  <button className="bg-cyan-700 px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-600 px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="bg-base-200">
                <th>4</th>
                <td>Graphics Design</td>
                <td>Momin khan</td>
                <td className="flex items-center justify-start gap-x-4">
                  <button className="bg-cyan-700 px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-600 px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-base-200">
                <th>5</th>
                <td>Data structure and Algorithm</td>
                <td>Shahriar Shubin</td>
                <td className="flex items-center justify-start gap-x-4">
                  <button className="bg-cyan-700 px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-600 px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="bg-base-200">
                <th>6</th>
                <td>Full stack Army</td>
                <td>HM Nayeem</td>
                <td className="flex items-center justify-start gap-x-4">
                  <button className="bg-cyan-700 px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-600 px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-base-200">
                <th>7</th>
                <td>Laravel Expert</td>
                <td>Hasin Hayder</td>
                <td className="flex items-center justify-start gap-x-4">
                  <button className="bg-cyan-700 px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-600 px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Courses;
