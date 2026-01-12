import { useState } from "react";
import Calendar from "../Components/Calender";
import Header from "../Components/Header";
import MainContent from "../Components/Main-content";
import Navbar from "../Components/Navbar";
import CreateBudgetModal from "../Components/CreateBudgetModal";

const Dashboard = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen h-[95%] lg:h-[100vh] bg-gray-50 font-euclid">
      <div>
        <Header openCalendar={setIsCalendarOpen} openModal={setIsModalOpen} />
        <Navbar />
        <MainContent />
      </div>
      <Calendar
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
      <CreateBudgetModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default Dashboard;
