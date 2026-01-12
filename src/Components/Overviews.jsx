import React from "react";
import { FaChartLine, FaUser } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const Overviews = () => {
  return (
    <div className="flex-col gap-4 md:flex md:gap-4 lg:gap-6 lg:h-[325px] justify-between">
      {/* Listings Overview */}
      <div className="bg-white pb-4 rounded-[16px] h-[152px] shadow-sm mb-2  border border-[#e4e4e4]">
        <div className="flex items-center  rounded-t-[16px] justify-between p-4 mb-4 bg-[#F9FAFB] w-full">
          <div className="flex items-center gap-2 ">
            <FaChartLine className="text-emerald-600" />
            <h3 className="font-bold text-gray-800">Listings Overview</h3>
          </div>
          <button className="text-emerald-600 text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View all <IoMdArrowForward />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4  text-center">
          <div className="text-lef">
            <p className="text-sm text-gray-500 mb-1">Total</p>
            <p className="text-2xl font-bold text-gray-800">1.8k</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Active</p>
            <p className="text-2xl font-bold text-gray-800">80</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Archived</p>
            <p className="text-2xl font-bold text-gray-800">1k</p>
          </div>
        </div>
      </div>

      {/* Users Overview */}
      <div className="bg-white  pb-4 rounded-[16px] shadow-sm  border border-[#e4e4e4]">
        <div className="flex items-center justify-between p-4 mb-4 bg-[#F9FAFB] rounded-t-[16px]">
          <div className="flex items-center gap-2">
            <FaUser className="text-emerald-600" />
            <h3 className="font-bold text-gray-800">Users Overview</h3>
          </div>
          <button className="text-emerald-600 text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View all <IoMdArrowForward />
          </button>
        </div>
        <div className="grid grid-cols-3   gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total</p>
            <p className="text-2xl font-bold text-gray-800">20.7k</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Riders</p>
            <p className="text-2xl font-bold text-gray-800">8.5k</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Subscribers</p>
            <p className="text-2xl font-bold text-gray-800">7.5k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overviews;
