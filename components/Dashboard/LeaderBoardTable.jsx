import styles from "../../styles/Dashboard.module.css";
import SelectCourse from "./SelectCourse";

export default function LeaderBoardTable() {
  return (
    <div className="mt-4">
      <SelectCourse />
      <div className="overflow-x-auto mt-6">
        <table className="table">
          {/* head */}
          <thead
            className={`${styles.skyBlueBg} text-white text-lg font-semibold`}
          >
            <tr className="font-bold">
              <th>Ranking</th>
              <th>Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody
            className={`${styles.skyBlueBg} text-lg font-semibold text-white`}
          >
            <tr className="bg-base-200">
              <th>1</th>
              <td>Md. Momin khan</td>
              <td>86%</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Abir</td>
              <td>84%</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Alamin</td>
              <td>76%</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Soikot</td>
              <td>72%</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Minhaz</td>
              <td>70%</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Khan Momin</td>
              <td>69%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
