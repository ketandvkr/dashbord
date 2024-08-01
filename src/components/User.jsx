

const userData = [
  { name: 'John Doe', mobile: '123-456-7890', wallets: '1', dateTime: '2024-07-30 12:00', status: 'Active' },
  { name: 'Jane Smith', mobile: '234-567-8901', wallets: '3', dateTime: '2024-07-29 14:30', status: 'Active' },
  { name: 'Alice Johnson', mobile: '345-678-9012', wallets: '5', dateTime: '2024-07-28 16:45', status: 'Inactive' },
  
];

const User = () => {
  return (
    <div className="w-[1200px] max-w-4xl p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between mb-4 bg-yellow-200">
        <button className="hover:bg-black hover:rounded-3xl hover:text-white text-black font-bold px-4 py-2 rounded">Register User</button>
        <button className="hover:bg-black hover:rounded-3xl font-bold hover:text-white px-4 py-2 rounded">Log In User</button>
      </div>
      <table className="w-full table-auto border-collapse m-5 gap-1">
        <thead>
          <tr>
            <th className=" rounded-3xl bg-yellow-300 hover:bg-black hover:text-white cursor-pointer">Name</th>
            <th className=" rounded-3xl bg-yellow-300 hover:bg-black hover:text-white cursor-pointer">Mobile</th>
            <th className=" rounded-3xl bg-yellow-300 hover:bg-black hover:text-white cursor-pointer">Wallet</th>
            <th className=" rounded-3xl bg-yellow-300 hover:bg-black hover:text-white cursor-pointer">Date/Time</th>
            <th className=" rounded-3xl bg-yellow-300 hover:bg-black hover:text-white cursor-pointer">Status</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td className="px-4 py-2 font-bold ">{user.name}</td>
              <td className="px-4 py-2 font-bold ">{user.mobile}</td>
              <td className="px-4 py-2 font-bold ">{user.wallets}</td>
              <td className="px-4 py-2 font-bold ">{user.dateTime}</td>
              <td className="px-4 py-2 font-bold ">
                <span
                  className={`inline-block px-4 py-2 rounded-3xl w-[100px] text-white cursor-pointer text-center ${
                    user.status === 'Active'
                      ? 'bg-green-400'
                      : 'bg-red-500'
                  }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
