import { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import SelectCourse from "../../../components/Dashboard/SelectCourse";
import styles from "../../../styles/Dashboard.module.css";

export default function Recordings() {
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
        <div className="overflow-x-auto mt-6">
          <table className="table">
            {/* head */}
            <thead
              className={`${styles.skyBlueBg} text-white text-lg font-semibold`}
            >
              <tr className="font-bold">
                <th>Class No.</th>
                <th>Topic Name</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody className={` text-lg font-semibold text-white`}>
              <tr className="">
                <th>1</th>
                <td>Introduction to Programming</td>
                <td>
                  <button className="bg-teal-600 px-4 py-1 rounded-lg ">
                    Watch
                  </button>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>HTML Basic</td>
                <td>
                  <button className="bg-teal-600 px-4 py-1 rounded-lg">
                    Watch
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Responsive Design with HTML, CSS</td>
                <td>
                  <button className="bg-teal-600 px-4 py-1 rounded-lg">
                    Watch
                  </button>
                </td>
              </tr>
              <tr>
                <th>4</th>
                <td>Dom Manupulation</td>
                <td>
                  <button className="bg-teal-600 px-4 py-1 rounded-lg">
                    Watch
                  </button>
                </td>
              </tr>
              <tr>
                <th>5</th>
                <td>JS - variables, loop, array, object, functions</td>
                <td>
                  <button className="bg-teal-600 px-4 py-1 rounded-lg">
                    Watch
                  </button>
                </td>
              </tr>
              <tr>
                <th>6</th>
                <td>Make Custom Component with HTML, CSS, JS</td>
                <td>
                  <button className="bg-teal-600 px-4 py-1 rounded-lg">
                    Watch
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
