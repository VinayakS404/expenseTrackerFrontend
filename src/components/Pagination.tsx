import { useState, useEffect } from "react";
import axios from "axios";

interface Transaction {
  id: number;
  eventDateTime: string;
  transactionType: string;
  amount: number;
}

export default function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const [arr, setArr] = useState<Transaction[]>([]);

  const pageSize = 10;
  const sortBy = "eventDateTime";
  const sortDir = "ASC";

  useEffect(() => {
    loadData();
  }, [currentPage]);

  async function loadData() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/get/findAll",
        {
          params: {
            pageNo: currentPage,
            pageSize: pageSize,
            sortBy: sortBy,
            sortDir: sortDir,
          },
        },
      );

      console.log("API response:", response.data);

      setArr(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold">Pagination test page</h1>

      <div className="w-full p-5">
        {arr.map((item) => (
          <div key={item.id} className="border p-3 mb-2">
            <p>Date: {item.eventDateTime}</p>

            <p>Type: {item.transactionType}</p>

            <p>Amount: {item.amount}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="bg-white border px-3"
        >
          Previous
        </button>

        <p>Page {currentPage}</p>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-white border px-3"
        >
          Next
        </button>
      </div>
    </div>
  );
}
