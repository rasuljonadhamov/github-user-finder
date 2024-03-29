import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`flex justify-between mx-auto py-10 w-2/3 ${
        isDarkMode ? "dark:bg-gray-800" : "bg-white"
      }`}
    >
      <h1
        className={`text-3xl font-bold ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        devfinder
      </h1>
      <button
        className={`flex items-center gap-2 border rounded-md px-4 py-2 cursor-pointer ${
          isDarkMode
            ? "bg-gray-700 text-white"
            : "bg-white text-gray-500 hover:bg-gray-100"
        }`}
        onClick={handleToggleDarkMode}
      >
        {isDarkMode ? (
          <>Light Mode {<IoMdSunny />}</>
        ) : (
          <>Dark Mode {<FaMoon />}</>
        )}
      </button>
    </header>
  );
};

export default Header;
