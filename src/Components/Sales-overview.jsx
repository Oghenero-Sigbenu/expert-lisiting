import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { salesData } from "../Utils/data";
import InflowCard from "./InflowCard";

const SalesOverview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1 Year");

  return (
    <div className="lg:col-span-2 py-4 bg-white rounded-[16px] shadow-sm pt-3 border border-[#e4e4e4] lg:h-[325px]">
      <div className="flex flex-col sm:flex-row px-4 sm:px-6 justify-between items-start sm:items-center  gap-4">
        <div>
          <h3 className="text-[18px] sm:text-[20px] font-[600] text-primary-50">
            Sales Overview
          </h3>
          <span className="text-[12px] font-extralight text-[#606060]">
            Showing overview Jan 2022 - Sep 2022
          </span>
        </div>
        <button className="px-5 sm:px-8 py-[10px] sm:py-[10px] border border-gray-300 rounded-[25px] text-[#191919] font-[500] text-[12px] hover:bg-gray-50">
          View Transactions
        </button>
      </div>
      {/* Period Selector */}
      <div className="flex gap-2 sm:gap-4 mb-2 px-2 sm:px-4 justify-end">
        {["1 Week", "1 Month", "1 Year"].map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-4 py-2 text-sm h-[33px] rounded-lg transition-colors ${
              selectedPeriod === period
                ? "bg-[#f5f5f5] text-[#191919] font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {period}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 border-t-[1px] border-[#E4E4E4] pt-4 px-2 sm:px-4">
        {/* Chart */}
        <div className=" relative h-[200px] md:h-[180px] w-full md:w-[49%] ">
          <div className="overflow-x-auto w-full h-full">
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 h-full">
              <span>50m</span>
              <span>40m</span>
              <span>30m</span>
              <span>20m</span>
              <span>10m</span>
              <span>0</span>
            </div>
            <div className="ml-8 h-full flex items-end justify-between gap-1 sm:gap-2">
              {salesData.map((data, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-1"
                >
                  <div
                    className="w-full flex gap-0.5 sm:gap-1 items-end"
                    style={{ height: "240px" }}
                  >
                    <div
                      className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t"
                      style={{ height: `${data.value1}%` }}
                    />
                    <div
                      className="flex-1 bg-gradient-to-t from-red-500 to-red-400 rounded-t"
                      style={{ height: `${data.value2}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex w-full flex-wrap gap-3 md:w-[49%] mt-2 ">
          <InflowCard title="t" amount="0" date="h" description="kk" />
          <div className="border w-[48%] border-blue-200 rounded-lg p-2 bg-blue-50 h-[73px]">
            <p className="text-[19px] font-bold text-blue-600">
              ₦120,000,000.00
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#3d3d3d] font-[500] ">
                MRR
              </span>
              <span className="flex items-center gap-1 text-xs text-green-600">
                <FaArrowUp className=" bg-[#12b76a] text-white rounded-[50%] p-1 w-[14px] h-[14px]" />{" "}
                2.5%
              </span>
            </div>
          </div>
          <div className="border w-[48%] border-blue-200 rounded-lg p-2 bg-blue-50 h-[73px]">
            <p className="text-[19px] font-bold text-blue-600">
              ₦120,000,000.00
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#3d3d3d] font-[500] ">
                Total Inflow
              </span>
              <span className="flex items-center gap-1 text-xs text-green-600">
                <FaArrowUp className=" bg-[#12b76a] text-white rounded-[50%] p-1 w-[14px] h-[14px]" />{" "}
                2.5%
              </span>
            </div>
          </div>
          <div className="border w-[48%] border-blue-200 rounded-lg p-2 bg-blue-50 h-[73px]">
            <p className="text-[19px] font-bold text-blue-600">
              ₦120,000,000.00
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#3d3d3d] font-[500] ">
                Total Inflow
              </span>
              <span className="flex items-center gap-1 text-xs text-green-600">
                <FaArrowUp className=" bg-[#12b76a] text-white rounded-[50%] p-1 w-[14px] h-[14px]" />{" "}
                2.5%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
