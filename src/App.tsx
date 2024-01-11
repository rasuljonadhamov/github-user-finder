import Header from "./components/Header/Header";
import ProfileCard from "./components/ProfileCard/ProfileCard";

import { useState } from "react";

function App() {
  const [user, setUser] = useState("rasuljonadhamov");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`container mx-auto ${
        isDarkMode ? "dark:bg-gray-800" : "bg-lightest"
      }`}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="flex content-between w-2/3 mx-auto gap-20 mb-10">
        <input
          type="search"
          className="w-1/2"
          placeholder="Search Github Username..."
        />
        <button
          type="submit"
          className="bg-indigo-600 text-gray-50 border-collapse px-4 py-2 right-0"
        >
          Search
        </button>
      </div>

      {user && <ProfileCard user={user} isDarkMode={isDarkMode} />}
      <button>sdns</button>
    </div>
  );
}

export default App;
