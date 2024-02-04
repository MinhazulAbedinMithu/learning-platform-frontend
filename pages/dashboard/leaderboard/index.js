import { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import LeaderBoardTable from "../../../components/Dashboard/LeaderBoardTable";

export default function Leaderboard() {
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
        <LeaderBoardTable />
      </div>
    </div>
  );
}
