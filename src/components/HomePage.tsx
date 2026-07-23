import React from "react";

const HomePage = () => {
  return (
    <div className=" bg-violet-100 h-screen flex flex-col">
      <div className="flex flex-row flex-1">
        <div className="flex flex-1 items-center justify-center">
          <div className="  bg-gray-100 h-40 w-100 border-gray-600 border-3 rounded-xl flex flex-col items-center justify-center">
            <div className="w-78 ">
              <p className="text-2xl">Current Balace</p>
            </div>
            <p className=" text-5xl">000,000,000.00</p>
          </div>
        </div>
        <div className="flex-1/5 grid grid-cols-2 grid-rows-2 place-items-center ">
          <div className="  bg-green-100 h-25 w-80 ml-2 border-green-600 border-3 rounded-xl flex flex-col items-center justify-center">
            <div>
              <p className="text-xl">Monthly income</p>
            </div>
            <p className=" text-3xl">000,000,000.00</p>
          </div>
          <div className="  bg-red-100 h-25 w-80 ml-2 border-red-600 border-3 rounded-xl flex flex-col items-center justify-center">
            <div>
              <p className="text-xl">Monthly income</p>
            </div>
            <p className=" text-3xl">000,000,000.00</p>
          </div><div className="  bg-green-100 h-25 w-80 ml-2 border-green-600 border-3 rounded-xl flex flex-col items-center justify-center">
            <div>
              <p className="text-xl">Monthly income</p>
            </div>
            <p className=" text-3xl">000,000,000.00</p>
          </div><div className="  bg-red-100 h-25 w-80 ml-2 border-red-600 border-3 rounded-xl flex flex-col items-center justify-center">
            <div>
              <p className="text-xl">Monthly income</p>
            </div>
            <p className=" text-3xl">000,000,000.00</p>
          </div></div>
      </div>
      <div className="flex-2 w-screen grid grid-cols-2 grid-row-3 place-items-center">
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p>Todays Income :</p>
          <input className="h-13 w-70 border-gray-600 border-2 rounded-sm pl-10"></input>
        </div>
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p> Enter Date :</p>
          <input className="h-13 w-70 border-gray-600 border-2 rounded-sm pl-10"></input>
        </div>
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p>Todays Expense :</p>
          <input className="h-13 w-70 border-gray-600 border-2 rounded-sm pl-10"></input>
        </div>
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p>Enter Month :</p>
          <input className="h-13 w-70 border-gray-600 border-2 rounded-sm pl-10"></input>
        </div>
        <div className="   h-25 w-120   bg-white border-gray-600 border-3 rounded-xl flex items-center justify-around">
          <p>Other :</p>
          <input className="h-13 w-70 border-gray-600 border-2 rounded-sm pl-10"></input>
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePage;
