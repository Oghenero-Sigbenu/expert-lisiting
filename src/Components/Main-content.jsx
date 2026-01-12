import SalesOverview from "./Sales-overview";
import Overviews from "./Overviews";
import PropertyCard from "./Property-card";
import { properties } from "../Utils/data";

const MainContent = () => {
  return (
    <main className=" py-3 max-w-[1284px] mx-auto px-4">
      <h2 className="text-[20px] font-semibold text-primary-50 mb-3">
        Welcome, Ahmed
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[315px]">
        <SalesOverview />

        <Overviews />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {properties.map((property, index) => (
          <PropertyCard
            image={property.image}
            title={property.title}
            label={property.label}
            index={index}
          />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
