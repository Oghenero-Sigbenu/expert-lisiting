import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const InflowCard = ({ title, amount, color, value }) => {
  return (
    <div className="border w-[48%] border-blue-200 rounded-lg p-2 bg-blue-50 h-[73px]">
      <p className={`text-[19px] font-bold ${color}`}>{amount}</p>
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-[#3d3d3d] font-[500] ">{title}</span>
        <span
          className={`flex items-center gap-1 text-[12px] md:text-[19px] ${
            value > 1 ? "text-green-600" : "text-[#F04438]"
          }`}
        >
          {value > 1 ? (
            <FaArrowUp className=" bg-[#12b76a] text-white rounded-[50%] p-1 w-[14px] h-[14px]" />
          ) : (
            <FaArrowDown className=" bg-[#F04438] text-white rounded-[50%] p-1 w-[14px] h-[14px]" />
          )}
          {value}%
        </span>
      </div>
    </div>
  );
};

export default InflowCard;
