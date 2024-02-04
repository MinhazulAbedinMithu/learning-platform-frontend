import { useState } from "react";
import DashboardNavbar from "../../components/Shared/DashboardNavbar";
import { FiLogOut } from "react-icons/fi";
import styles from "../../styles/Dashboard.module.css";
import AccountDetails from "../../components/Dashboard/AccountDetails";
import Transactions from "../../components/Dashboard/Transactions";

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [tabActive, setTabActive] = useState("tab1");

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
        } transition-all flex-grow p-4`}
      >
        <div className="text-white flex items-center justify-between">
          <h4 className="text-xl font-semibold">Profile</h4>
          <button
            className={`${styles.skyBlueBg} btn text-white border-0 hover:bg-teal-700`}
          >
            Logout <FiLogOut />
          </button>
        </div>
        <div className={`${styles.skyBlueBg} my-4 rounded-lg`}>
          <div className="tabs p-4">
            <a
              className={`${
                tabActive === "tab1" ? "tab-active" : ""
              } tab tab-bordered text-white text-lg`}
              onClick={() => setTabActive("tab1")}
            >
              Account Details
            </a>
            <a
              className={`${
                tabActive === "tab2" ? "tab-active" : ""
              } tab tab-bordered text-white text-lg`}
              onClick={() => setTabActive("tab2")}
            >
              All Transactions
            </a>
          </div>
        </div>
        {
          tabActive ==="tab1" && <AccountDetails />
        }
        {
          tabActive ==="tab2" && <Transactions />
        }
      </div>
    </div>
  );
}
