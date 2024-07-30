

const User = () => {
  return (
    <div className="w-[1200px] max-w-4xl p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Register User</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Log In User</button>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Mobile</th>
            <th className="px-4 py-2">Wallet</th>
            <th className="px-4 py-2">Date/Time</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">123-456-7890</td>
            <td className="border px-4 py-2">BNB Wallet</td>
            <td className="border px-4 py-2">2024-07-30 12:00</td>
            <td className="border px-4 py-2 text-green-500">Active</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">234-567-8901</td>
            <td className="border px-4 py-2">Metamask</td>
            <td className="border px-4 py-2">2024-07-29 14:30</td>
            <td className="border px-4 py-2 text-green-500">Active</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Alice Johnson</td>
            <td className="border px-4 py-2">345-678-9012</td>
            <td className="border px-4 py-2">Trust Wallet</td>
            <td className="border px-4 py-2">2024-07-28 16:45</td>
            <td className="border px-4 py-2 text-red-500">Inactive</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Bob Brown</td>
            <td className="border px-4 py-2">456-789-0123</td>
            <td className="border px-4 py-2">Coinbase</td>
            <td className="border px-4 py-2">2024-07-27 11:15</td>
            <td className="border px-4 py-2 text-green-500">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
