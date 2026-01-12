import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
const Calendar = ({ isOpen, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];

    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth - 1, daysInPrevMonth - i),
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(currentYear, currentMonth, i),
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows × 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth + 1, i),
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date) => {
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Calendar Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#1a1a1a] text-white z-50 shadow-2xl overflow-y-auto animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="hover:bg-gray-800 p-1 rounded transition-colors"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-xl font-semibold">Calendar</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-gray-800 p-2 rounded transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Calendar Content */}
        <div className="p-6">
          {/* Month Navigation */}
          <div className="flex items-center w-[70%] mx-auto justify-between mb-6">
            <button
              onClick={goToPreviousMonth}
              className="hover:bg-gray-800 p-2 rounded transition-colors"
            >
              <BiSolidLeftArrow size={20} className="text-[#98A2B3]" />
            </button>
            <h3 className="text-lg font-semibold">
              {monthNames[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={goToNextMonth}
              className="hover:bg-gray-800 p-2 rounded transition-colors"
            >
              <BiSolidRightArrow size={20} className="text-[#98A2B3]" />
            </button>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"].map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-gray-400 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 ">
            {calendarDays.map((dayObj, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(dayObj.date)}
                className={`
                  flex items-center justify-center text-left text-sm
                  transition-all hover:bg-gray-800 border-collapse border-[.1px]  px-[1.5rem] pb-[5rem] pt-[.3rem] border border-[#242424]
                  ${!dayObj.isCurrentMonth ? "text-gray-600" : "text-[#969696]"}
                  ${
                    isSelected(dayObj.date)
                      ? "bg-blue-600 hover:bg-blue-700 font-semibold"
                      : ""
                  }
                 
                `}
              >
                <p
                  className={`${
                    isToday(dayObj.date)
                      ? "bg-[#2525E6] text-center text-white mx-auto rounded-[40%] w-[30px] h-[20px] px-4 py-1 flex items-center justify-center font-semibold"
                      : ""
                  }`}
                >
                  {dayObj.day}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
