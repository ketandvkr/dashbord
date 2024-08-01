/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import alarz from "../assets/alarz.svg";
import pl from "../assets/pl.svg";
import deposit from "../assets/deposit.svg";
import ref from "../assets/ref.svg";
import swap from "../assets/swap.svg";
import wall from "../assets/wall.svg";

const PnlBox = () => (
  <div className="w-[100px] h-[139px] bg-white border border-gray-400 flex flex-col items-center justify-center rounded-lg">
    <span className="text-center text-gray-950 font-bold">Today's P&L</span>
    <span className="text-center text-red-500 font-bold">-30.00</span>
    <button className="bg-black text-white rounded-lg w-12 mt-2">7 days</button>
  </div>
);

const Pnl7 = () => (
  <div className="w-[100px] h-[139px] border border-gray-400 flex flex-col items-center justify-center rounded-lg bg-green-300">
    <span className="text-center text-gray-950 font-bold">Month's P&L</span>
    <span className="text-center  text-green-100 font-bold">30.00</span>
    <button className="bg-black text-white rounded-lg w-12 mt-2">30 days</button>
  </div>
);

const Pnl8 = () => (
  <div className="w-[100px] h-[139px] bg-white border border-gray-400 flex flex-col items-center justify-center rounded-lg">
    <span className="text-center text-gray-950 font-bold">Month's P&L</span>
    <span className="text-center text-red-500 font-bold">-30.00</span>
    <button className="bg-black text-white rounded-lg w-12 mt-2">30 days</button>
  </div>
);

const RedBox = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="w-[403px] h-[288px] bg-white rounded-lg overflow-hidden">
        <img src={alarz} alt="alarz" className="w-full h-full object-cover" />
      </div>
      <div className="w-[403px] h-[478px] bg-white rounded-lg p-4">
        <div className="w-full h-[46px] bg-yellow-300 flex font-bold items-center justify-center rounded-3xl mb-5">
          PNL Analysis
        </div>
        <div className="relative w-full h-[49.79px]">
          <img className="w-full h-full object-cover rounded-lg" src={pl} alt="pl bg-black" />
          <button
            className="absolute top-0 right-0 w-[113.9px] h-[49.79px] bg-black text-white flex items-center justify-center rounded-3xl"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            USD
          </button>
          {dropdownOpen && (
            <div className="absolute top-[49.79px] right-0 mt-1 w-[113.9px] bg-white text-black rounded-lg border border-gray-400">
              <ul className="list-none p-2">
                <li className="p-2 hover:bg-gray-200">Option 1</li>
                <li className="p-2 hover:bg-gray-200">Option 2</li>
                <li className="p-2 hover:bg-gray-200">Option 3</li>
              </ul>
            </div>
          )}
        </div>
        <div className="w-full h-[75px] flex flex-col items-center justify-center mt-2 rounded-lg bg-white">
          <div className="text-3xl font-bold">129,00.00</div>
          <button className="text-lg font-bold bg-slate-600 rounded-lg text-white mt-2">$129,00.00</button>
        </div>
        <div className="w-full h-[75px] flex items-center justify-between mt-4">
          <button className="font-bold text-xl hover:bg-slate-600 p-2 rounded-lg bg-white">
            <img src={deposit} alt="deposit" />
          </button>
          <button className="text-lg font-bold bg-slate-600 rounded-lg text-white hover:bg-slate-700 p-2">
            <img src={ref} alt="ref" />
          </button>
          <button className="text-3xl font-bold hover:bg-slate-600 p-2 rounded-lg bg-white">
            <img src={swap} alt="swap" />
          </button>
          <button className="text-3xl font-bold hover:bg-slate-600 p-2 rounded-lg bg-white">
            <img src={wall} alt="wall" />
          </button>
        </div>
        <div className="w-full flex items-center justify-between mt-10 gap-4">
          <div>
          <PnlBox />
          </div>
          <div className="bg-green-400">
          
          <Pnl7 />
          </div>
          <Pnl8 />
        </div>
      </div>
    </div>
  );
};

export default RedBox;
