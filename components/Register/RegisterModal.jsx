import styles from "../../styles/Register.module.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import LoginModal from "./LoginModal";
import { login, setLogin } from "../../store/slices/auth";
import { AUTH } from "../../store/apiConfig";
import axios from "axios";

export default function RegisterModal({
  setRegisterModalOpen,
  loginModalOpen,
  setLoginModalOpen,
}) {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().required("Email is required").email("Email is Invalid"),
    username: Yup.string().required(),
    phone: Yup.string().required(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = (data) => {
    try {
      axios
        .post(`${AUTH.REGISTER_API}`, data)
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            const { username, password } = data;
            // dispatch(login({ email, password }))

            axios
              .post(`${AUTH.LOGIN_API}`, { username, password })
              .then((res) => {
                dispatch(setLogin(res.data));

                router.replace("/");
                setRegisterModalOpen(false);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => {
    router.push("/");
    setRegisterModalOpen(false);
  };

  const handleLoginModal = (id) => {
    if (!loginModalOpen) {
      router.push({ pathname: "/", query: { modal: "login" } });
      setLoginModalOpen(true);
      setRegisterModalOpen(false);
      setTimeout(() => {
        const modal = document.getElementById(id);
        if (modal) {
          modal.showModal();
        }
      }, 0);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box flex flex-col md:flex-row md:items-center text-black p-0 h-full w-11/12 max-w-4xl">
        <div
          className={`${styles.registerBg} h-full px-10 text-white text-center flex flex-col justify-center py-16 md:py-0`}
        >
          <h2 className="text-4xl font-bold">Welcome!</h2>
          <p className="text-lg mt-2">
            To keep connected with us <br /> please sign up here
          </p>
        </div>
        <div
          style={{ backgroundColor: "#0F969C" }}
          className="flex flex-col items-center flex-grow h-full text-white px-8"
        >
          <h1 className="text-4xl font-bold py-12">Create an account!</h1>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name...."
              className={`${styles.tealBg} input w-full mb-4`}
              {...register("fullName")}
            />
            <input
              type="email"
              placeholder="Email Address...."
              className={`${styles.tealBg} input w-full mb-4`}
              {...register("email")}
            />
            <div className="flex w-full mb-4">
              <input
                type="text"
                placeholder="User Name....."
                className={`${styles.tealBg} input w-full mr-4`}
                {...register("username")}
              />
              <input
                type="number"
                placeholder="Phone Number...."
                className={`${styles.tealBg} input w-full`}
                {...register("phone")}
              />
            </div>
            <div className="flex w-full mb-4">
              <input
                type="password"
                placeholder="Password...."
                className={`${styles.tealBg} input w-full mr-4`}
                {...register("password")}
              />
              <input
                type="password"
                placeholder="Confirm Password...."
                className={`${styles.tealBg} input w-full`}
                {...register("confirmPassword")}
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="submit"
                value="Sign Up"
                className={`${styles.tealBg} btn text-white border-0 hover:bg-gray-800/80 w-80 mx-auto mt-8 mb-4`}
              />
            </div>
          </form>
          <div className="pb-12 md:pb-0">
            Have an account? Please{" "}
            <button
              className="text-black font-semibold"
              onClick={() => handleLoginModal("my_modal_1")}
            >
              Sign In
            </button>
            {loginModalOpen && (
              <LoginModal setLoginModalOpen={setLoginModalOpen} />
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
