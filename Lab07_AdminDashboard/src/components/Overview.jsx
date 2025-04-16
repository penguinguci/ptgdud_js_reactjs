import { FaSortUp } from "react-icons/fa";

const Overview = ({ stat }) => {
  return (
    <div className="grid grid-cols-5 gap-4  rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-full">
      <div className="col-span-4">
        <div className="name font-bold text-lg">{stat.name}</div>
        <div className="value font-bold text-3xl my-3">{stat.value}</div>
        <div className="flex items-center gap-1">
          <FaSortUp className="text-green-700 mt-2" />
          <span className="text-green-800">{stat.growth_rate}% </span>
          <span>period of change</span>
        </div>
      </div>
      <div className="col-span-1 w-0.5">
        <button className="flex items-center justify-center w-10 h-10 border-2 border-[#f44b86e1] text-[#f44b87] rounded-lg hover:bg-[#f44b87] hover:text-white transition-colors duration-300 ease-in-out cursor-pointer">
          {stat.icon}
        </button>
      </div>
    </div>
  );
};

export default Overview;
