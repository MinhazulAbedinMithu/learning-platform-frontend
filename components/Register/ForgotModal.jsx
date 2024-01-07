import { useRouter } from "next/navigation";
import styles from "../../styles/Register.module.css";

export default function ForgotModal({ setForgotModalOpen, setLoginModalOpen }) {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
    setForgotModalOpen(false);
    setLoginModalOpen(false);
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box flex flex-col md:flex-row md:items-center text-black p-0 h-full w-11/12 max-w-4xl">
        <div
          className={`${styles.registerBg} h-full px-10 text-white text-center flex flex-col justify-center py-16 md:py-0`}
        >
          <h2 className="text-4xl font-bold">Hello There!</h2>
          <p className="text-lg mt-2">
            Create a strong password and
            <br /> keep it secret
          </p>
        </div>
        <div
          style={{ backgroundColor: "#0F969C" }}
          className="flex flex-col items-center flex-grow h-full text-white px-8"
        >
          <h1 className="text-4xl font-bold pt-12">Reset Password</h1>
          <p className="text-center text-lg mt-6 mb-12">
            Enter your email address and we will send a verification <br />
            link to reset your password
          </p>
          <input
            type="email"
            placeholder="Your Email Address"
            className={`${styles.tealBg} input w-full mb-4`}
          />
          <div className="flex items-center justify-around w-full mt-12 pb-12 md:pb-0">
            <button
              onClick={() => handleClose()}
              className={`${styles.tealBg} btn text-white border-0 hover:bg-gray-800/80 px-12`}
            >
              Cancel
            </button>
            <button
              className={`${styles.tealBg} btn text-white border-0 hover:bg-gray-800/80 px-12`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => handleClose()}>close</button>
      </form>
    </dialog>
  );
}
