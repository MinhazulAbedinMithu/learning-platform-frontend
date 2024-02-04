import Link from "next/link";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsBell,
} from "react-icons/bs";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdLeaderboard, MdAssignmentAdd, MdAddCircleOutline } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { VscOutput } from "react-icons/vsc";
import { SlCamrecorder } from "react-icons/sl";
import { PiCertificate } from "react-icons/pi";
import { useEffect, useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import Image from "next/image";
import profilePic from "../../public/Mask group.png";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function DashboardNavbar({ isSidebarOpen, toggleSidebar }) {
  const { user } = useSelector((state) => state.auth);
  const [selectedNav, setSelectedNav] = useState("");
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("/dashboard")) setSelectedNav("dashboard");
  }, [router.asPath]);

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("/dashboard/addCourse")) setSelectedNav("addCourse");
  }, [router.asPath]);

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("/dashboard/analytics")) setSelectedNav("analytics");
  }, [router.asPath]);

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("/dashboard/leaderboard")) setSelectedNav("leaderboard");
  }, [router.asPath]);

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("/dashboard/classjoining")) setSelectedNav("classjoin");
  }, [router.asPath]);

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("/dashboard/mycourses")) setSelectedNav("mycourses");
  }, [router.asPath]);

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("/dashboard/recordings")) setSelectedNav("recording");
  }, [router.asPath]);

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("/dashboard/assignment")) setSelectedNav("assignment");
  }, [router.asPath]);

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("/dashboard/certificate")) setSelectedNav("certificate");
  }, [router.asPath]);

  return (
    <aside
      style={{ backgroundColor: "#0F969C" }}
      className={`text-white w-64 h-screen fixed top-0 left-0 flex flex-col justify-between transition-all ${
        isSidebarOpen ? "ml-0" : "-ml-52"
      }`}
    >
      <div>
        <ul className={`py-4`}>
          <li className="mb-4 flex justify-between items-center px-4">
            <Link href="/">Online Learning Platform</Link>
            <button className={`hover:text-teal-900`} onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <BsFillArrowLeftCircleFill />
              ) : (
                <BsFillArrowRightCircleFill />
              )}
            </button>
          </li>
          <Link href="/dashboard">
            <li
              className={`${selectedNav === "dashboard" ? styles.tealBg : ""} ${
                styles.tealBgHover
              } mb-2 p-4`}
              onClick={() => setSelectedNav("dashboard")}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Image width={50} src={profilePic} alt="Profile Picture" />
                  <div>
                    <p className="text-sm">Welcome</p>
                    <p className="text-base">Md. Momin Khan</p>
                  </div>
                </div>
                <BsBell />
              </div>
            </li>
          </Link>
          {
            user?.role==='admin' && (
              <Link href="/dashboard/addCourse">
                <li
                  className={`${
                    selectedNav === "addCourse" ? styles.tealBg : ""
                  } ${
                    styles.tealBgHover
                  } mb-2 p-4 flex justify-between items-center`}
                  onClick={() => setSelectedNav("addCourse")}
                >
                  <p>Add Course</p>
                  <MdAddCircleOutline />
                </li>
              </Link>
            )
          }
          {user?.role !== "admin" && (
            <>
              <Link href="/dashboard/analytics">
                <li
                  className={`${
                    selectedNav === "analytics" ? styles.tealBg : ""
                  } ${
                    styles.tealBgHover
                  } mb-2 p-4 flex justify-between items-center`}
                  onClick={() => setSelectedNav("analytics")}
                >
                  <p>Student Analytics</p>
                  <IoAnalyticsOutline />
                </li>
              </Link>
              <Link href="/dashboard/leaderboard">
                <li
                  className={`${
                    selectedNav === "leaderboard" ? styles.tealBg : ""
                  } ${
                    styles.tealBgHover
                  } mb-2 p-4 flex justify-between items-center`}
                  onClick={() => setSelectedNav("leaderboard")}
                >
                  <p>Leader Board</p>
                  <MdLeaderboard />
                </li>
              </Link>
              <Link href="/dashboard/classjoining">
                <li
                  className={`${
                    selectedNav === "classjoin" ? styles.tealBg : ""
                  } ${
                    styles.tealBgHover
                  } mb-2 p-4 flex justify-between items-center`}
                  onClick={() => setSelectedNav("classjoin")}
                >
                  <p>Class Joining</p>
                  <SiGoogleclassroom />
                </li>
              </Link>
              <Link href="/dashboard/mycourses">
                <li
                  className={`${
                    selectedNav === "mycourses" ? styles.tealBg : ""
                  } ${
                    styles.tealBgHover
                  } mb-2 p-4 flex justify-between items-center`}
                  onClick={() => setSelectedNav("mycourses")}
                >
                  <p>My Courses</p>
                  <VscOutput />
                </li>
              </Link>
              <Link href="/dashboard/recordings">
                <li
                  className={`${
                    selectedNav === "recording" ? styles.tealBg : ""
                  } ${
                    styles.tealBgHover
                  } mb-2 p-4 flex justify-between items-center`}
                  onClick={() => setSelectedNav("recording")}
                >
                  <p>Class Recording</p>
                  <SlCamrecorder />
                </li>
              </Link>
              <Link href="/dashboard/assignment">
                <li
                  className={`${
                    selectedNav === "assignment" ? styles.tealBg : ""
                  } ${
                    styles.tealBgHover
                  } mb-2 p-4 flex justify-between items-center`}
                  onClick={() => setSelectedNav("assignment")}
                >
                  <p>Assignment</p>
                  <MdAssignmentAdd />
                </li>
              </Link>
              <Link href="/dashboard/certificate">
                <li
                  className={`${
                    selectedNav === "certificate" ? styles.tealBg : ""
                  } ${
                    styles.tealBgHover
                  } mb-2 p-4 flex justify-between items-center`}
                  onClick={() => setSelectedNav("certificate")}
                >
                  <p>Certificate</p>
                  <PiCertificate />
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </aside>
  );
}
