import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [balance, setBalance] = useState(0);
  const [todayIncome, setTodayIncome] = useState(0);
  const [monthlyIcome, setMonthlyIcome] = useState(0);
  const [todayExpense, setTodayExpense] = useState(0);
  const [monthlyExpense, setMonthlyExpense] = useState(0);

  const [inputTodayIncome, setInputTodayIncome] = useState(0);

  const [inputTodayExpense, setInputTodayExpense] = useState(0);

  const [inputMonth, setInputMonth] = useState("");
  const [responseMonthIncome, setResponseMonthIncome] = useState("");
  const [responseMonthExpense, setResponseMonthExpense] = useState("");

  const [inputDate, setInputDate] = useState("");
  const [responseSpecificDayIncome, setResponseSpecificDayIncome] =
    useState("");
  const [responseSpecificDayExpense, setResponseSpecificDayExpense] =
    useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/get/everyData",
      );

      setTodayIncome(response.data.todayIncome);
      setTodayExpense(response.data.todayExpense);
      setMonthlyIcome(response.data.monthlyIncome);
      setMonthlyExpense(response.data.monthlyExpense);
      setBalance(response.data.balance);
    } catch (error) {
      console.error(error);
    }
  }

  async function getMonth(inputMonth: any) {
    const [year, month] = inputMonth.split("-");
    try {
      const response = await axios.get(
        "http://localhost:8080/api/get/monthly/both",
        {
          params: {
            year: year,
            month: month,
          },
        },
      );
      alert(
        `income = ${response.data.income}\nexpense = ${response.data.expense}`,
      );
      setResponseMonthIncome(response.data.income);
      setResponseMonthExpense(response.data.expense);
    } catch (error) {
      console.error(error);
    }
  }

  async function getSpecificDay(inputDate: any) {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/get/request/b",
        {
          params: {
            date: inputDate,
          },
        },
      );
      alert(
        `income = ${response.data.income}\nexpense = ${response.data.expense}`,
      );
      setResponseSpecificDayIncome(response.data.income);
      setResponseSpecificDayExpense(response.data.expense);
    } catch (error) {
      console.log("help")
      console.log(inputDate)
      console.error(error);
    }
  }

  async function addTransaction(mode: number) {
    let type: string = "";
    let amount: number = 0;

    switch (mode) {
      case 1:
        type = "INCOME";
        amount = inputTodayIncome;
        break;

      case 2:
        type = "EXPENSE";
        amount = inputTodayExpense;
        break;

      default:
        console.log("hit default");
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/add/current",
        {
          transactionType: type,
          amount: amount,
        },
      );

      await loadData();

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

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
            type="number"
            onKeyDown={(e) => {
              if (["e", "E", "+", "-", "."].includes(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(event) =>
              setInputTodayIncome(Number(event.target.value))
            }
          ></input>
          <button
            className="border h-10 w-20"
            onClick={() => {
              console.log({ inputTodayIncome });
              addTransaction(1);
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
              console.log({ inputDate });
              getSpecificDay(inputDate);
            }}
          >
            send
          </button>
        </div>
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p>Todays Expense :</p>
          <input
            className="h-13 w-50 0 border-gray-600 border-2 rounded-sm pl-10"
            type="number"
            onKeyDown={(e) => {
              if (["e", "E", "+", "-", "."].includes(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(event) =>
              setInputTodayExpense(Number(event.target.value))
            }
          ></input>
          <button
            className="border h-10 w-20"
            onClick={() => {
              console.log({ inputTodayExpense });
              addTransaction(2);
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
              getMonth(inputMonth);
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
          <button className="border h-10 w-20" onClick={() => {}}>
            send
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePage;
