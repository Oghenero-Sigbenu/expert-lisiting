import React from "react";
import { FaArrowUp } from "react-icons/fa";

const InflowCard = ({ title, amount, date, description }) => {
  return (
    <div className="border w-[48%] border-blue-200 rounded-lg p-2 bg-blue-50 h-[73px]">
      <p className="text-[19px] font-bold text-blue-600">₦120,000,000.00</p>
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
  );
};

export default InflowCard;
