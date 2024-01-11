import Header from "./components/Header/Header";
import ProfileCard from "./components/ProfileCard/ProfileCard";

import { useRef, useState } from "react";

function App() {
  const [user, setUser] = useState("rasuljonadhamov");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const ref = useRef("");

  const fetchUserData = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`Error fetching user data: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      setUser(data);

      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  function handleSearch(e) {
    if (e.current.value) {
      fetchUserData(e.current.value);
    }
  }

  return (
    <div
      className={`container mx-auto h-svh ${
        isDarkMode ? "dark:bg-gray-800" : "bg-lightest"
      }`}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="flex content-between w-2/3 mx-auto gap-20 mb-10">
        <input
          ref={ref}
          type="search"
          className="w-1/2"
          placeholder="Search Github Username..."
        />
        <button
          onClick={() => handleSearch(ref)}
          type="submit"
          className="bg-indigo-600 text-gray-50 border-collapse px-4 py-2 right-0"
        >
          Search
        </button>
      </div>

      {user && <ProfileCard user={user} isDarkMode={isDarkMode} />}
    </div>
  );
}

export default App;
