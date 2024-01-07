import styles from "../../styles/Home.module.css";
import Image from "next/image";

export default function CareerCard({ title, available, image }) {
  return (
    <div className={`${styles.transparentTealBg} card shadow-xl`}>
      <div className="card-body">
        <div className="flex flex-col w-full lg:flex-row md:mb-4">
          <div className="flex justify-center">
            <Image src={image} width={80} height={80} alt={title} />
          </div>
          <div
            style={{ border: "2px #0F969C solid" }}
            className="mx-2 my-2 md:my-0"
          ></div>
          <p className="flex text-sm items-center justify-center">
            {available} Course Available
          </p>
        </div>
        <h2 className="card-title md:text-start">{title}</h2>
      </div>
    </div>
  );
}
