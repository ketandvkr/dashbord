import www from '../assets/www.svg';
import www1 from '../assets/india.svg';

const NavBar = () => {
  return (
    <nav className="h-16 flex items-center justify-between p-6 px-8 py-10 bg-gradient-to-r from-white via-blue-500 to-white shadow-md">
      <div className="text-xl font-bold text-gray-800 px-4">
        Overview
      </div>
      <div className="flex items-center space-x-6">
        <a href="#" className="p-2">
          <img src={www} alt="www" />
        </a>
        <a href="#" className="p-2">
          <img src={www1} alt="www1" />
        </a>
        <div className="flex flex-col space-y-2">
          <a href="#" className="text-black font-bold text-lg hover:text-blue-600 p-2">
            welcome back, john
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-600 p-2">
            ketandvkr@gmail.com
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
