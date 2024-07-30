import AreaChartComponent from "./AreaChartComponent";

import PieChartComponent from "./PieChartComponent";

import User from "./User";



const Main = () => {
  return (
    <div className="relative  ">
      {/* Existing Grid Container */}
      <div className="grid grid-cols-2 w-[1000px] h-[490px] gap-1">
        <div className="bg-white w-full h-full"><AreaChartComponent /></div>
        <div className="bg-white w-full h-full items-center  "><PieChartComponent width={300} height={300} />
        </div>
      </div>
      <div className="bg-white w-[1200 px] h-[246px] justify-center items-center">
        <User />

      </div>

     
    </div>
  );
};

export default Main;
