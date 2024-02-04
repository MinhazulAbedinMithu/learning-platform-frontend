import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import styles from "../../styles/Home.module.css";
import { useEffect, useMemo, useState } from "react";
import RegisterModal from "../Register/RegisterModal";
import LoginModal from "../Register/LoginModal";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setClearAuth, setUser } from "../../store/slices/auth";
import { setAllCategories } from "../../store/slices/category";
import { categoryServices } from "../../store/services/categoryService";
import AuthService from "../../store/services/authService";

const categoriesItems = [
  {
    slug: "/",
    title: "Web Development",
    icon: "",
  },
  {
    slug: "/",
    title: "App Development",
    icon: "",
  },
  {
    slug: "/",
    title: "Graphic Design",
    icon: "",
  },
  {
    slug: "/",
    title: "Product Design",
    icon: "",
  },
  {
    slug: "/",
    title: "Wordpress Development",
    icon: "",
  },
  {
    slug: "/",
    title: "Cyber Security",
    icon: "",
  },
  {
    slug: "/",
    title: "Business and Marketing",
    icon: "",
  },
  {
    slug: "/",
    title: "Data Engineering",
    icon: "",
  },
];

export default function Navbar() {
  const router = useRouter();
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const handleRegisterModal = (id) => {
    if (!registerModalOpen) {
      router.push({ pathname: "/", query: { modal: "register" } });
      setRegisterModalOpen(true);
      setTimeout(() => {
        const modal = document.getElementById(id);
        if (modal) {
          modal.showModal();
        }
      }, 0);
    }
  };

  const handleLoginModal = (id) => {
    if (!loginModalOpen) {
      router.push({ pathname: "/", query: { modal: "login" } });
      setLoginModalOpen(true);
      setTimeout(() => {
        const modal = document.getElementById(id);
        if (modal) {
          modal.showModal();
        }
      }, 0);
    }
  };
  useEffect(() => {
    const fetchCat = async () => {
      const categories = await categoryServices.getAllCategories();
      dispatch(setAllCategories(categories.data));
      const token = localStorage.getItem("token");

      // if (token) {
      //   const data = await AuthService.fetchUserDetails(token);
      //   data && dispatch(setUser(data?.data));
      // }
    };
    fetchCat();
  }, [dispatch]);

  return (
    <div
      className={`${styles.darkTealBg} navbar text-white md:px-24`}
      suppressHydrationWarning
    >
      <div className="navbar-start w-full md:w-1/2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            className={`${styles.tealBg} menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52`}
          >
            <li>
              <p className="hover:text-white">Categories</p>
              <div className="flex flex-col p-2 hover:text-white">
                {categories?.map((item, index) => (
                  <p
                    key={index}
                    className={`${styles.darkTealBg} rounded-lg my-2 py-2 w-full text-center`}
                  >
                    <Link
                      href={`/categories/${item.name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      className="hover:text-slate-300 hover:bg-transparent"
                    >
                      {item.name}
                    </Link>
                  </p>
                ))}
              </div>
            </li>
            {user ? (
              <>
                <li className="btn btn-ghost hover:bg-teal-900 hover:text-white w-full">
                  {user.username}
                </li>
                <li className="btn btn-ghost hover:bg-teal-900 hover:text-white w-full">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className="btn btn-ghost hover:bg-teal-900 hover:text-white w-full">
                  <button onClick={() => dispatch(setClearAuth())}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <div className="flex justify-center">
                    <button
                      className="btn btn-ghost hover:bg-teal-900 hover:text-white w-full"
                      onClick={() => handleLoginModal("my_modal_1")}
                    >
                      Sign In
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex justify-center">
                    <button
                      className="btn btn-ghost hover:bg-teal-900 hover:text-white w-full"
                      onClick={() => handleRegisterModal("my_modal_2")}
                    >
                      Get Started
                    </button>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link className="normal-case text-2xl" href="/">
          Online Learning
        </Link>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
          <details style={{ position: 'relative', zIndex: '1' }}>
            <summary className="hover:text-white">Categories</summary>
            <div
              style={{ backgroundColor: "#0f959cbb", position: 'absolute', top: '100%', left: '0', minWidth: '100%' }}
              className="grid grid-cols-2 gap-3 w-96 p-2 rounded-lg"
            >
              {categories?.map((item, index) => (
                <p
                  key={index}
                  className={`${styles.tealTransparentBg} rounded-lg p-2 dropdown-content`}
                >
                  <Link
                    href={`/categories/${item.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                    className="hover:text-slate-300"
                  >
                    {item.name}
                  </Link>
                </p>
              ))}
            </div>
          </details>
        </li>        
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="relative">
          <input
            type="text"
            placeholder="Search your courses...."
            className={`${styles.tealBg} py-1 rounded-full pl-10 w-96`}
          />
          <BiSearch
            className="absolute left-3 top-2 text-gray-500"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        {user ? (
          <div
            className="uppercase font-bold text-xl cursor-pointer hover:bg-slate-400 p-2 rounded-md relative"
            onClick={() => setDropdown(!dropdown)}
          >
            {user.username}

            {dropdown && (
              <div className="absolute top-14 bg-teal-700 px-6 right-2 rounded-md shadow-md py-6 flex flex-col items-start justify-start gap-4">
                <Link
                  className={`${styles.tealBg} btn text-white border-0 rounded-md hover:bg-teal-900 ml-3`}
                  href={`/dashboard`}
                >
                  Dashboard
                </Link>
                <button
                  className={`${styles.tealBg} btn text-white border-0 rounded-md hover:bg-teal-900 ml-3`}
                  onClick={() => dispatch(setClearAuth())}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              className="btn btn-ghost"
              onClick={() => handleLoginModal("my_modal_1")}
            >
              Sign In
            </button>
            <button
              className={`${styles.tealBg} btn text-white border-0 rounded-md hover:bg-teal-900 ml-3`}
              onClick={() => handleRegisterModal("my_modal_2")}
            >
              Get Started
            </button>
          </>
        )}
      </div>
      {loginModalOpen && (
        <LoginModal
          setLoginModalOpen={setLoginModalOpen}
          registerModalOpen={registerModalOpen}
          setRegisterModalOpen={setRegisterModalOpen}
        />
      )}
      {registerModalOpen && (
        <RegisterModal
          setRegisterModalOpen={setRegisterModalOpen}
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
        />
      )}
    </div>
  );
}
