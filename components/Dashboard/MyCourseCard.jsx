import Image from "next/image";
import styles from "../../styles/Dashboard.module.css";

export default function MyCourseCard({ img, title, progress, instructor }) {
  return (
    <div>
      <div className={`w-full bg-cyan-900/50 card shadow-xl cursor-pointer`}>
        <div>
          <Image src={img} alt={title} width="100%" className="rounded-t-lg" />
        </div>
        <div className="w-full card-body">
          <div className="flex w-full md:mb-4">
            <div className="text-white w-full">
              <h2 className="card-title md:text-start text-3xl">{title}</h2>
              <h4 className="text-xl font-bold py-4">
                Instructor: {instructor}
              </h4>
              <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-800">
                <div
                  className="bg-emerald-500 h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
