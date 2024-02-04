import Image from "next/image";
import profilePic from "../../public/Mask group.png";
import password from "../../public/image 8.png";
import styles from "../../styles/Dashboard.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import AuthService from "../../store/services/authService";

export default function AccountDetails() {
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    const data = async () => await AuthService.fetchUserDetails(token);
  });
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
      <div
        className={`${styles.skyBlueBg} flex flex-col items-center py-4 px-8 rounded-lg text-white md:w-1/2`}
      >
        <h4 className="text-xl font-semibold mb-4">Personal Details</h4>
        <Image width={100} src={profilePic} alt="Profile pic" />
        <form className="w-full">
          <input type="file" id="upload" hidden />
          <label
            for="upload"
            className={`${styles.uploadBtn} ${styles.btnBg} w-full text-center`}
          >
            Upload Your Picture
          </label>
          <div className="my-2">
            <label>Full Name</label>
            <input
              type="name"
              placeholder="Full Name"
              className="input input-ghost w-full border-white"
            />
          </div>
          <div className="my-2">
            <label>Alternative Email</label>
            <input
              type="email"
              placeholder="Alternative Email"
              className="input input-ghost w-full border-white"
            />
          </div>
          <div className="my-2">
            <label>Alternative Number</label>
            <input
              type="number"
              placeholder="Alternative Number"
              className="input input-ghost w-full border-white"
            />
          </div>
          <div className="my-2">
            <label>Primary Number</label>
            <input
              type="number"
              placeholder="Primary Number"
              className="input input-ghost w-full border-white"
            />
          </div>
          <div className="my-2">
            <label>Primary Email</label>
            <input
              type="email"
              placeholder="Primary Email"
              className="input input-ghost w-full border-white"
            />
          </div>
          <div className="flex justify-end w-full mt-6">
            <button
              type="submit"
              className={`${styles.btnBg} btn text-white border-0 px-8 hover:bg-teal-700`}
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div
        className={`${styles.skyBlueBg} flex flex-col items-center py-4 px-8 rounded-lg text-white md:w-1/2`}
      >
        <h4 className="text-xl font-semibold mb-4">Change Your Password</h4>
        <Image className="my-3" src={password} alt="Change Password" />
        <form className="w-full">
          <div className="my-4">
            <label>New Password</label>
            <input
              type="password"
              placeholder="New Password"
              className="input input-ghost w-full border-white"
            />
          </div>
          <div className="my-4">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-ghost w-full border-white"
            />
          </div>
          <button
            className={`${styles.btnBg} btn w-full border-0 text-white hover:bg-teal-700 mt-4`}
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
