import React from "react";
import { FaComments } from "react-icons/fa";

const PropertyCard = ({ image, title, label, index }) => (
  <div
    key={index}
    className="relative h-[286px] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-[286px] object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-xs text-white/80 font-semibold mb-2">{label}</p>
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <div className="flex gap-1 mt-3">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>
    {index === 2 && (
      <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
        <FaComments className="text-white text-xl" />
      </div>
    )}
  </div>
);

export default PropertyCard;
