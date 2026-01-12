import { navItems } from "../Utils/data";

const Navbar = () => {
  return (
    <nav className="bg-white border-b px-4 ">
      <div className="flex justify-between  overflow-x-auto max-w-[1284px] mx-auto items-center h-[67px] flex ">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 h-[38px] px-4 py-3 rounded-lg whitespace-nowrap transition-colors ${
              item.active
                ? "bg-[#176D5826] text-[#105B48] font-semibold"
                : "text-black hover:bg-gray-50"
            }`}
          >
            <item.icon className="w-[24px] h-[24px]" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
