import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/get/everyData")
      .then((response) => {
        setTodayIncome(response.data.todayIncome);
        setTodayExpense(response.data.todayExpense);
        setMonthlyIcome(response.data.monthlyIncome);
        setMonthlyExpense(response.data.MonthlyExpense);
        setBalance(response.data.balance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [balance, setBalance] = useState(0);
  const [todayIncome, setTodayIncome] = useState(0);
  const [monthlyIcome, setMonthlyIcome] = useState(0);
  const [todayExpense, setTodayExpense] = useState(0);
  const [monthlyExpense, setMonthlyExpense] = useState(0);

  const [inputTodayIncome, setInputTodayIncome] = useState(0);
  const [xInputTodayIncome, setXInputTodayIncome] = useState(0);

  const [inputTodayExpense, setInputTodayExpense] = useState(0);
  const [xInputTodayExpense, setXInputTodayExpense] = useState(0);

  const [inputDate, setInputDate] = useState("");
  const [xInputDate, setXInputDate] = useState("");

  const [inputMonth, setInputMonth] = useState("");
  const [xInputMonth, setXInputMonth] = useState("");

  return (
    <div className=" bg-violet-100 h-screen flex flex-col">
      <div className="flex flex-row flex-1">
        <div className="flex flex-1 items-center justify-center">
          <div className="  bg-gray-100 h-40 w-100 border-gray-600 border-3 rounded-xl flex flex-col items-center justify-center">
            <p className="text-2xl">Current Balance</p>

            <p className=" text-5xl">{balance}</p>
          </div>
        </div>
        <div className="flex-1/5 grid grid-cols-2 grid-rows-2 place-items-center ">
          <div className="  bg-green-100 h-25 w-80 ml-2 border-green-600 border-3 rounded-xl flex flex-col items-center justify-center">
            <div>
              <p className="text-xl">Monthly income</p>
            </div>
            <p className=" text-3xl">{monthlyIcome}</p>
          </div>
          <div className="  bg-red-100 h-25 w-80 ml-2 border-red-600 border-3 rounded-xl flex flex-col items-center justify-center">
            <div>
              <p className="text-xl">Monthly Expense</p>
            </div>
            <p className=" text-3xl">{monthlyExpense}</p>
          </div>
          <div className="  bg-green-100 h-25 w-80 ml-2 border-green-600 border-3 rounded-xl flex flex-col items-center justify-center">
            <div>
              <p className="text-xl">Today income</p>
            </div>
            <p className=" text-3xl">{todayIncome}</p>
          </div>
          <div className="  bg-red-100 h-25 w-80 ml-2 border-red-600 border-3 rounded-xl flex flex-col items-center justify-center">
            <div>
              <p className="text-xl">Today expense</p>
            </div>
            <p className=" text-3xl">{todayExpense}</p>
          </div>
        </div>
      </div>
      <div className="flex-2 w-screen grid grid-cols-2 grid-row-3 place-items-center">
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p>Todays Income :</p>
          <input
            className="h-13 w-50 0 border-gray-600 border-2 rounded-sm pl-10"
            type="text"
            onChange={(event) =>
              setInputTodayIncome(Number(event.target.value))
            }
          ></input>
          <button
            className="border h-10 w-20"
            onClick={() => {
              setXInputTodayIncome(Number(inputTodayIncome));
              console.log({ xInputTodayIncome });
            }}
          >
            send
          </button>
        </div>
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p> Enter Date :</p>
          <input
            className="h-13 w-50 0 border-gray-600 border-2 rounded-sm pl-10"
            type="date"
            onChange={(event) => setInputDate(event.target.value)}
          ></input>
          <button
            className="border h-10 w-20"
            onClick={() => {
              setXInputDate(inputDate);
              console.log({ xInputDate });
            }}
          >
            send
          </button>
        </div>
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p>Todays Expense :</p>
          <input
            className="h-13 w-50 0 border-gray-600 border-2 rounded-sm pl-10"
            type="text"
            onChange={(event) =>
              setInputTodayExpense(Number(event.target.value))
            }
          ></input>
          <button
            className="border h-10 w-20"
            onClick={() => {
              setXInputTodayExpense(Number(inputTodayExpense));
              console.log({ xInputTodayExpense });
            }}
          >
            send
          </button>
        </div>
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p>Enter Month :</p>
          <input
            className="h-13 w-50 0 border-gray-600 border-2 rounded-sm pl-10"
            type="month"
            onChange={(event) => setInputMonth(event.target.value)}
          ></input>
          <button
            className="border h-10 w-20"
            onClick={() => {
              setXInputMonth(inputMonth);
              console.log({ xInputMonth });
            }}
          >
            send
          </button>
        </div>
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p>Other :</p>
          <input
            className="h-13 w-50 0 border-gray-600 border-2 rounded-sm pl-10"
            type="text"
            onChange={(event) =>
              setInputTodayIncome(Number(event.target.value))
            }
          ></input>
          <button
            className="border h-10 w-20"
            onClick={() => {
              setXInputTodayIncome(Number(inputTodayIncome));
              console.log({ xInputTodayIncome });
            }}
          >
            send
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePage;
