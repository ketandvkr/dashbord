import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

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

const PieChartComponent = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="users"
          nameKey="name"
          outerRadius={115}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
