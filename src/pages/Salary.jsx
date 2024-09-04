import React from "react";
import { IoTriangleSharp } from "react-icons/io5";

const Salary = () => {
  return (
    <div className="salary-container flex items-center bg-blue-400 h-screen-minus-72 px-16">
      <div className="grid w-screen h-min gap-x-10 gap-y-10 grid-cols-3 grid-rows-3">
        <div className="plan-item col-span-3 flex flex-col items-center">
          <p className="text-white uppercase font-semibold mb-1">Daily</p>
          <div className="plan-price flex items-center justify-center gap-3 bg-blue-300 w-1/3 rounded-3xl py-5">
            <IoTriangleSharp className="fill-current text-lime-green text-4xl" />
            <span className="text-white text-3xl font-bold">$1.000000</span>
          </div>
        </div>
        <div className="plan-item flex flex-col items-center">
          <p className="text-white uppercase font-semibold mb-1">Live-Stock</p>
          <div className="plan-price flex items-center justify-center gap-3 bg-blue-300 w-full rounded-3xl py-5">
            <IoTriangleSharp className="fill-current text-lime-green text-4xl" />
            <span className="text-white text-3xl font-bold">$1.000000</span>
          </div>
        </div>
        <div className="plan-item flex flex-col items-center">
          <p className="text-white uppercase font-semibold mb-1">Weekly</p>
          <div className="plan-price flex items-center justify-center gap-3 bg-blue-300 w-full rounded-3xl py-5">
            <IoTriangleSharp className="fill-current text-lime-green text-4xl" />
            <span className="text-white text-3xl font-bold">$1.000000</span>
          </div>
        </div>
        <div className="plan-item flex flex-col items-center">
          <p className="text-white uppercase font-semibold mb-1">
            Pending-Profit
          </p>
          <div className="plan-price flex items-center justify-center gap-3 bg-blue-300 w-full rounded-3xl py-5">
            <IoTriangleSharp className="fill-current text-lime-green text-4xl" />
            <span className="text-white text-3xl font-bold">$1.000000</span>
          </div>
        </div>
        <div className="plan-item col-span-3 flex flex-col items-center">
          <p className="text-white uppercase font-semibold mb-1">Monthly</p>
          <div className="plan-price flex items-center justify-center gap-3 bg-blue-300 w-1/3 rounded-3xl py-5">
            <IoTriangleSharp className="fill-current text-lime-green text-4xl" />
            <span className="text-white text-3xl font-bold">$1.000000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
