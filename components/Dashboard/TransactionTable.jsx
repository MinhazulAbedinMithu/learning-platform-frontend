import { useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import styles from "../../styles/Dashboard.module.css";

export default function TransactionTable({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="overflow-x-auto bg-slate-200 rounded-lg">
      <table className="table table-zebra">
        <thead className={`${styles.skyBlueBg} text-white text-lg font-semibold`}>
          <tr>
            <th>Course Name</th>
            <th>Time</th>
            <th>Status</th>
            <th>Payment Media</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={startIndex + index}>
              <td>{item.name}</td>
              <td>{item.time}</td>
              <td>{item.status}</td>
              <td>{item.payMethod}</td>
              <td>{item.amount.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination text-center mt-12 mb-6">
        <button
          className={`${
            currentPage === 1
              ? "bg-gray-200"
              : "bg-teal-300 text-white rounded-full"
          } p-3 m-1 rounded-full cursor-pointer`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <FcPrevious />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`${
              i + 1 === currentPage ? "bg-teal-600 text-white" : "bg-gray-300"
            } px-3 py-2 m-1 rounded-md cursor-pointer`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={`${
            currentPage === totalPages
              ? "bg-gray-200"
              : "bg-teal-300 text-white rounded-full"
          } p-3 m-1 rounded-full cursor-pointer`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <FcNext />
        </button>
      </div>
    </div>
  );
}
