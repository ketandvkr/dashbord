/* eslint-disable react/prop-types */


const DataCard = ({ exchange, price, volume, change, marketCap }) => {
  return (
    <div className="w-full h-[49px] bg-[#DFF0FF] flex items-center justify-between  border border-gray-300 mb-2">
      <div className=" ml-2 mr-2 flex flex-grow items-center justify-between">
        <span className="font-semibold">{exchange}</span>
        <span className="text-gray-600">Price: ${price}</span>
        <span className="text-gray-600">24hr Volume: ${volume}</span>
        <span className={`text-gray-600 ${change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
          24hr Change: {change}
        </span>
        <span className="text-gray-600">Market Cap: {marketCap}</span>
      </div>
    </div>
  );
};

export default DataCard;
