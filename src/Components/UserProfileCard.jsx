import { useState } from "react";
import {
  FiUsers,
  FiFileText,
  FiMessageCircle,
  FiMapPin,
  FiLock,
  FiLogOut,
} from "react-icons/fi";

export default function UserProfileDropdown({ isOpen, setIsOpen }) {
  const menuItems = [
    {
      id: "teams",
      icon: <FiUsers className="w-5 h-5" />,
      label: "Teams",
      action: () => console.log("Navigate to Teams"),
    },
    {
      id: "snagging",
      icon: <FiFileText className="w-5 h-5" />,
      label: "Snagging",
      action: () => console.log("Navigate to Snagging"),
    },
    {
      id: "feedback",
      icon: <FiMessageCircle className="w-5 h-5" />,
      label: "Feedback",
      action: () => console.log("Navigate to Feedback"),
    },
    {
      id: "geo-bucket",
      icon: <FiMapPin className="w-5 h-5" />,
      label: "Geo-Bucket",
      action: () => console.log("Navigate to Geo-Bucket"),
    },
    {
      id: "change-password",
      icon: <FiLock className="w-5 h-5" />,
      label: "Change password",
      action: () => console.log("Navigate to Change Password"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex justify-center items-start pt-20">
      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Dropdown Card */}
          <div className="fixed top-20 right-4 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideDown border border-gray-200">
            {/* User Profile Section */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-teal-700 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  D
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 truncate">
                    Dylan Frank
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    dylan96@mail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full px-6 py-3.5 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left group"
                >
                  <div className="text-gray-700 group-hover:text-teal-700 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-base font-medium text-gray-900 group-hover:text-teal-700 transition-colors">
                    {item.label}
                  </span>
                </button>
              ))}

              {/* Divider */}
              <div className="my-2 border-t border-gray-200"></div>

              {/* Logout Button */}
              <button
                onClick={() => console.log("Logout")}
                className="w-full px-6 py-3.5 flex items-center gap-4 hover:bg-red-50 transition-colors text-left group"
              >
                <div className="text-red-500 group-hover:text-red-600 transition-colors">
                  <FiLogOut className="w-5 h-5" />
                </div>
                <span className="text-base font-medium text-red-500 group-hover:text-red-600 transition-colors">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
