import styles from "../../styles/Home.module.css";
import StatsCard from "./StatsCard";

const stats = [
  {
    title: "USERS",
    total: 64279,
  },
  {
    title: "INSTRUCTORS",
    total: 250,
  },
  {
    title: "LEARNERS",
    total: 31152,
  },
  {
    title: "ENROLLMENT",
    total: 120000,
  },
  {
    title: "COURSES",
    total: 343,
  },
];

export default function PlatformStats() {
  return (
    <div
      className={`${styles.courseBg} grid md:grid-cols-5 gap-4 text-white px-12 md:px-24 py-20`}
    >
      {stats.map((stat) => (
        <StatsCard key={stat.title} title={stat.title} total={stat.total} />
      ))}
    </div>
  );
}
