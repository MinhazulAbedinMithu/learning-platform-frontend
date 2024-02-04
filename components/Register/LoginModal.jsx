import styles from "../../styles/Register.module.css";
import { useEffect, useState } from "react";
import ForgotModal from "./ForgotModal";
import RegisterModal from "./RegisterModal";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AUTH } from "../../store/apiConfig";
import axios from "axios";
import { setLogin } from "../../store/slices/auth";

export default function LoginModal({
  setLoginModalOpen,
  registerModalOpen,
  setRegisterModalOpen,
}) {
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [formError, setFormError] = useState("");

  const handleClose = () => {
    router.push("/");
    setLoginModalOpen(false);
  };

  const handleRegisterModal = (id) => {
    if (!registerModalOpen) {
      router.push({ pathname: "/", query: { modal: "register" } });
      setRegisterModalOpen(true);
      setLoginModalOpen(false);
      setTimeout(() => {
        const modal = document.getElementById(id);
        if (modal) {
          modal.showModal();
        }
      }, 0);
    }
  };

  const handleForgotModal = (id) => {
    if (!forgotModalOpen) {
      router.push({ pathname: "/", query: { modal: "reset" } });
      setForgotModalOpen(true);
      setTimeout(() => {
        const modal = document.getElementById(id);
        if (modal) {
          modal.showModal();
        }
      }, 0);
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const router = useRouter();

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const redirectDashboard = (user) => {
    if (user !== null) {
      return router.push({
        pathname: "/dashboard",
      });
    }
  };
  useEffect(() => {
    token && redirectDashboard(user);
  }, [user, token]);

  const onSubmit = (data) => {
    const { username, password } = data;
    try {
      axios
        .post(`${AUTH.LOGIN_API}`, { username, password })
        .then((res) => {
          dispatch(setLogin(res.data.data));
          console.log(res.data.data);
          localStorage.setItem("token", res.data?.data?.token);
          router.replace("/");
          setRegisterModalOpen(false);
          setLoginModalOpen(false);
        })
        .catch((error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setFormError(message);
        });
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setFormError(message);
    }
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box flex flex-col md:flex-row md:items-center text-black p-0 h-full w-11/12 max-w-4xl">
        <div
          className={`${styles.registerBg} h-full px-10 text-white text-center flex flex-col justify-center py-16 md:py-0`}
        >
          <h2 className="text-4xl font-bold">Hello There!</h2>
          <p className="text-lg mt-2">
            Enter your personal details and <br /> join with us
          </p>
        </div>
        <div
          style={{ backgroundColor: "#0F969C" }}
          className="flex flex-col items-center flex-grow h-full text-white px-8"
        >
          <h1 className="text-4xl font-bold py-12">Log In</h1>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Username....."
              className={`${styles.tealBg} input w-full mb-4`}
              {...register("username")}
            />
            <input
              type="password"
              placeholder="Password...."
              className={`${styles.tealBg} input w-full`}
              {...register("password")}
            />
            <div className="flex items-center justify-between w-full">
              <div className="form-control">
                <label className="label cursor-pointer px-0">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className="checkbox"
                  />
                  <span className="label-text ml-2 text-white">
                    Remember me
                  </span>
                </label>
              </div>
              <button
                className="text-sm"
                onClick={() => handleForgotModal("my_modal_3")}
              >
                Forgot Password
              </button>
              {forgotModalOpen && (
                <ForgotModal
                  setLoginModalOpen={setLoginModalOpen}
                  setForgotModalOpen={setForgotModalOpen}
                />
              )}
            </div>
            <div className="flex items-center justify-center">
              <input
                type="submit"
                value="Login"
                className={`${styles.tealBg} btn text-white border-0 hover:bg-gray-800/80 w-80 mx-auto mt-8 mb-4`}
              />
            </div>
          </form>
          <div>
            {errors &&
              Object.values(errors).map((err, index) => (
                <p key={index}>
                  <small className="text-red-600">{err?.message}</small>
                </p>
              ))}
            <span className="text-red-600">{formError}</span>
          </div>
          <div className="pb-12 md:pb-0">
            Don’t have an account? Please{" "}
            <button
              className="text-black font-semibold"
              onClick={() => handleRegisterModal("my_modal_2")}
            >
              Sign Up
            </button>
            {registerModalOpen && (
              <RegisterModal setRegisterModalOpen={setRegisterModalOpen} />
            )}
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => handleClose()}>close</button>
      </form>
    </dialog>
  );
}
