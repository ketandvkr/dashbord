import SquareButton from './SquareButton'; // Adjust the path as necessary
import icon from '../assets/icon.svg';
import se from '../assets/se.svg';
import se1 from '../assets/se1.svg';
import se3 from '../assets/se3.svg';

const Sidebar = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="flex h-fit bg-gray-100">
      {/* Sidebar */}
      <div 
        className="fixed w-[130px] h-[982px] flex flex-col justify-between items-center bg-[#DFF0FF] opacity-100 p-4"
      >
        {/* Icons */}
        <div className="flex flex-col space-y-7"> {/* Increase space here */}
          <button 
            onClick={handleClick} 
            className="hover:bg-gray-700 p-2 rounded-lg" // Add hover effect and padding
          >
            <img src={icon} alt="icon" />
          </button>
          <button 
            onClick={handleClick} 
            className="hover:bg-gray-700 p-2 rounded-lg"
          >
            <img src={se} alt="se" />
          </button>
          <button 
            onClick={handleClick} 
            className="hover:bg-gray-700 p-2 rounded-lg"
          >
            <img src={se1} alt="se1" />
          </button>
          <button 
            onClick={handleClick} 
            className="hover:bg-gray-700 p-2 rounded-lg"
          >
            <img src={se3} alt="se3" />
          </button>
          <button 
            onClick={handleClick} 
            className="hover:bg-gray-700 p-2 rounded-lg"
          >
            <img src={se1} alt="se1" />
          </button>
          <button 
            onClick={handleClick} 
            className="hover:bg-gray-700 p-2 rounded-lg"
          >
            <img src={se3} alt="se3" />
          </button>
        </div>
        
        {/* Square Button */}
        <SquareButton />
      </div>
    </div>
  );
}

export default Sidebar;
