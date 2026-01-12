import React, { useState } from "react";
import { FaTimes, FaCalculator } from "react-icons/fa";
export default function CreateBudgetModal() {
  const [isOpen, setIsOpen] = useState(true);

  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="9" x2="20" y2="9" />
          <circle cx="8" cy="9" r="2" fill="currentColor" />
          <line x1="4" y1="15" x2="20" y2="15" />
          <circle cx="16" cy="15" r="2" fill="currentColor" />
        </svg>
      ),
      title: "Set up annual budgets by account category",
      description:
        "Allocate funds across income and expense lines with full visibility.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <polyline points="7 14 10 11 13 14 17 8" />
        </svg>
      ),
      title: "Track actuals vs budget in real time",
      description:
        "See how your community is performing against plan, month by month.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <line x1="8" y1="16" x2="8" y2="12" />
          <line x1="12" y1="16" x2="12" y2="9" />
          <line x1="16" y1="16" x2="16" y2="11" />
        </svg>
      ),
      title: "Adjust figures and forecast with ease",
      description:
        "Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.",
    },
  ];

  const handleCreateBudget = () => {
    console.log("Creating budget...");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-[438px] h-[559px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-scaleIn">
        {/* Header with Calculator Icon */}
        <div className="relative w-[100%] h-[213px] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 px-6 py-16 sm:py-20 flex items-center justify-center">
          {/* Decorative blur elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>

          {/* Calculator Icon */}
          <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 bg-slate-800/50 backdrop-blur-sm rounded-3xl flex items-center justify-center border-4 border-white/20 shadow-2xl">
            <FaCalculator className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 group"
          >
            <FaTimes className="w-5 h-5 text-white/80 group-hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8 sm:px-10 sm:py-12 bg-white">
          {/* Features List */}
          <div className="space-y-8 sm:space-y-10">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 s  rounded-2xl bg-slate-100 flex items-center justify-center">
                  <div className="text-slate-700">{feature.icon}</div>
                </div>

                {/* Text */}
                <div className="flex-1 pt-1">
                  <h3 className="text-[16px] sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[1] sm:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Create Budget Button */}
          <button
            onClick={handleCreateBudget}
            className="w-full mt-10 sm:mt-12 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base sm:text-lg py-4 sm:py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
}
