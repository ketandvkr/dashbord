/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'BNB Wallet', users: 153 },
  { name: 'OKX Wallet', users: 12 },
  { name: 'Pollygon Wallet', users: 32 },
  { name: 'Token Pocket', users: 84 },
  { name: 'Trust Wallet', users: 107 },
  { name: '1 Inch Wallet', users: 98 },
  { name: 'Metamask', users: 220 },
  { name: 'Coinbase', users: 42 }
];

const COLORS = [
  '#FFBB28', '#FF8042', '#00C49F', '#0088FE', '#FF5555',
  '#FF3399', '#4BC0C0', '#C77CFF'
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <rect x={cx - 60} y={cy - 30} width={120} height={30} fill="black" rx={15} ry={15} />
      <text
        x={cx}
        y={cy - 15}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        style={{ fontSize: '24px', fontWeight: 'bold' }} // 3xl size
      >
        Wallet
      </text>
      <rect x={cx - 60} y={cy + 5} width={120} height={20} fill="white" rx={15} ry={15} />
      <text
        x={cx}
        y={cy + 15}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="black"
        style={{ fontSize: '16px', fontWeight: 'bold' }}
      >
        {data.reduce((acc, item) => acc + item.users, 0)} Total Wallets
      </text>
    </>
  );
};

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-wrap justify-start items-center">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center mr-4 mb-1 text-xs">
          <div
            className="w-2 h-2 rounded-full mr-1"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="font-medium">{entry.value}</span>
          <span className="ml-1">({data.find(d => d.name === entry.value)?.users || 0})</span>
        </div>
      ))}
    </div>
  );
};

const PieChartComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="text-center bg-yellow-100 py-2 w-full">
        <h2 className="text-lg font-bold">Wallets</h2>
      </div>
      <div className="relative w-full h-[460px]">
        <svg x={0} y={0} width="100%" height="100%" viewBox="0 0 400 300" style={{ position: 'absolute', top: 0, left: 0 }}>
          {/* Outer Border Circle */}
          <circle
            cx="50%"
            cy="45%"
            r="100"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          {/* Inner Border Circle */}
          <circle
            cx="50%"
            cy="45%"
            r="52.5"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
        </svg>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="users"
              nameKey="name"
              outerRadius={120}
              innerRadius={70}
              fill="#8884d8"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#fff" // Outer border color
                  strokeWidth={4} // Outer border width
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;
