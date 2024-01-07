import Image from "next/image";
import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import courseImg from "../../public/Rectangle 176.png";
import payment1 from "../../public/payment1.png";
import payment2 from "../../public/payment2.png";
import payment3 from "../../public/payment3.png";
import payment4 from "../../public/payment4.png";
import {AiOutlinePhone} from 'react-icons/ai';
import styles from "../../styles/Payment.module.css";

export default function Payment() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.paymentBg} px-12 md:px-24 py-12`}>
        <div
          style={{ borderBottom: "2px #FFFFFF solid" }}
          className="text-center text-white pb-12"
        >
          <ul className="steps steps-vertical lg:steps-horizontal w-10/12">
            <li data-content="✓" className="step step-info text-white">
              Register
            </li>
            <li data-content="✓" className="step step-info">
              Choose plan
            </li>
            <li className="step step-info opacity-70">Purchase</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between my-4 text-white">
          <div>
            <div
              style={{ backgroundColor: "#0F969C" }}
              className="p-8 rounded-lg"
            >
              <div className="flex flex-col md:flex-row">
                <Image width={150} src={courseImg} alt="course image" />
                <div style={{ borderBottom: "2px #FFFFFF solid" }}>
                  <h3 className="text-xl font-bold md:ml-4">
                    Web Development with Php And Laravel
                  </h3>
                  <p className="text-lg md:ml-4 my-2 md:my-0">
                    Starts on: Friday 19 2024{" "}
                  </p>
                </div>
              </div>
              <h3 className="text-xl my-4 font-bold">Payment Details</h3>
              <div className="flex justify-between">
                <p>Course Price</p>
                <p>৳ 10,000</p>
              </div>
              <div
                style={{ borderBottom: "2px #FFFFFF solid" }}
                className="flex justify-between pb-3"
              >
                <p>Discount</p>
                <p>৳ 0</p>
              </div>
              <div className="flex justify-between pt-3">
                <p>Total</p>
                <p>৳ 10,000</p>
              </div>
            </div>
            <div className="flex items-center gap-2 my-8">
            <AiOutlinePhone style={{backgroundColor:'#0F969C'}} className="text-4xl p-2 rounded-full" />
              <p>For Any Queries, Please Call + 8801793814458</p>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundColor: "#0F969C",
                borderBottom: "1px #FFFFFF solid",
              }}
              className="p-8 rounded-t-lg"
            >
              <h3 className="text-xl font-bold">Payment Medium</h3>
              <div className="flex items-center gap-3 my-4">
                <input type="radio" name="radio-1" className="radio" />
                <div className="rounded-md bg-white py-2 px-16">
                  <Image width={200} src={payment1} alt="bkash" />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <input type="radio" name="radio-1" className="radio" />
                <div className="rounded-md bg-white py-2.5 md:py-4 px-16">
                  <Image width={200} src={payment2} alt="nogod" />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <input type="radio" name="radio-1" className="radio" />
                <div className="rounded-md bg-white py-2 px-16">
                  <Image width={200} src={payment3} alt="india" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="radio-1" className="radio" />
                <div className="rounded-md bg-white py-2.5 md:py-3 px-16">
                  <Image width={200} src={payment4} alt="card" />
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: "#0F969C" }} className="p-8 rounded-b-lg">
              <div className="flex justify-between mb-4">
                <p>Total Payment:</p>
                <p>৳ 10,000</p>
              </div>
              <button style={{backgroundColor: '#072E33'}} className="btn w-full border-0 text-white">Complete Payment</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
