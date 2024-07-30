import Sidebar from './components/SideBar'; // Ensure the correct import path
import NavBar from './components/NavBar';// Ensure the correct import path
import Main from './components/main';
import RedBox from './components/RedBox';
import DataCard from './components/DataCard';

const App = () => {
  return (
    <>
      <div className="relative h-screen bg-gray-100  mt-0 pr-15 mb-1 ">
        <NavBar className="sticky top-0 left-10 w-full z-10" /> 
        <Sidebar className="fixed top-0 left-0 h-full z-20" /> {/* Sidebar positioned at the left */}
        <div className="ml-[130px] pt-1 mr-1 "> {/* Space for Navbar and Sidebar */}
          <DataCard 
            exchange="Binance"
            price="123,455"
            volume="123,455 B"
            change="-23.00%"
            marketCap="2346B"
          />
          <Main  className="ml-1"/>
        </div>
        <div className="absolute top-[135px] right-0"> {/* Adjusted positioning */}
          <RedBox />
        </div>
      </div>
    </>
  );
}

export default App;
