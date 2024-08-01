/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  { useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

const data = [
  { name: '0-12', uv: 4000, pv: 2400, amt: 2400 },
  { name: '12-15', uv: 3000, pv: 1398, amt: 2210 },
  { name: '15-17', uv: 2780, pv: 3908, amt: 2000 },
  { name: '17-20', uv: 1890, pv: 4800, amt: 2181 },
  { name: '21-23', uv: 2390, pv: 3800, amt: 2500 },
  { name: '24-26', uv: 3490, pv: 4300, amt: 2100 },
];

const AreaChartComponent = ({ width = 450, height = 350 }) => {
  const [selectedInterval, setSelectedInterval] = useState('1D');

  const handleIntervalClick = (interval) => {
    setSelectedInterval(interval);
    // Add logic to filter data based on the selected interval
  };

  const formatDollar = (value) => `$${value.toLocaleString()}`;

  return (
    <div className="p-5 text-center relative bg-white mt-2"> {/* White background for the component */}
      <div className="bg-yellow-100 text-black-slate p-2 mb-2 absolute top-0 left-0 right-0">
        <h2 className="text-2xl font-bold">Assets Net Worth</h2>
      </div>
      <div>
        <div className="absolute top-14 left-5 flex flex-col items-start">
          <button className=" text-lg bg-black text-white rounded-3xl px-3 py-1">$123,90,90.98</button>
          <p className="mt-1">Last Updated: 02 hrs ago</p>
        </div>
        <div className="absolute top-14 right-5 flex space-x-2">
          <button
            onClick={() => handleIntervalClick('1D')}
            className="px-3 py-1 bg-yellow-300 text-black rounded-3xl hover:bg-black hover:text-white"
          >
            1D
          </button>
          <button
            onClick={() => handleIntervalClick('1W')}
            className="px-3 py-1 bg-yellow-300 text-black rounded-3xl hover:bg-black hover:text-white"
          >
            1W
          </button>
          <button
            onClick={() => handleIntervalClick('1M')}
            className="px-3 py-1 bg-yellow-300 text-black rounded-3xl hover:bg-black hover:text-white"
          >
            1M
          </button>
          <button
            onClick={() => handleIntervalClick('1Y')}
            className="px-3 py-1 bg-yellow-300 text-black rounded-3xl hover:bg-black hover:text-white"
          >
            1Y
          </button>
        </div>
        <div className="mt-32 mb-5"></div>
        <AreaChart width={width} height={height} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#73B06F" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} /> {/* Transition to white */}
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="1 1" // Set the dash array for dashed grid lines
            vertical={true} // Show vertical grid lines
            horizontal={true} // Show horizontal grid lines
            stroke="#e0e0e0" // Set the color of the grid lines
          />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatDollar} />
          <Tooltip formatter={formatDollar} />
          <Legend />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#2DA771"
            strokeWidth={2}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default AreaChartComponent;
