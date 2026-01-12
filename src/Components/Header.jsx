import {
  FaBinoculars,
  FaCalendarAlt,
  FaComments,
  FaHistory,
  FaThLarge,
  FaWallet,
} from "react-icons/fa";

const Header = ({ openCalendar, openModal }) => {
  return (
    <header className="bg-[#105B48] text-white px-4 py-4">
      <div className="flex items-center max-w-[1284px] mx-auto justify-between">
        <div className="flex items-center gap-2">
          <FaThLarge className="text-2xl" />
          <h1 className="text-xl font-bold">Expert Listing</h1>
        </div>

        <div className="flex items-center gap-4">
          <FaBinoculars
            onClick={() => openModal(true)}
            className="text-xl cursor-pointer hover:text-emerald-200"
          />
          <FaCalendarAlt
            className="text-xl cursor-pointer hover:text-emerald-200"
            onClick={() => openCalendar(true)}
          />
          <FaHistory className="text-xl cursor-pointer hover:text-emerald-200" />
          <FaWallet className="text-xl cursor-pointer hover:text-emerald-200" />
          <FaThLarge className="text-xl cursor-pointer hover:text-emerald-200" />
          <div className="w-10 h-10 bg-white text-emerald-700 rounded-full flex items-center justify-center font-bold cursor-pointer">
            D
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
