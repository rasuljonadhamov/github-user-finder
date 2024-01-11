import ProfileCard from "./ProfileCard/ProfileCard";

import { useState } from "react";

function App() {
  const [user, setUser] = useState("rasuljonadhamov");

  const fetchUserData = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`Error fetching user data: ${response.status}`);
      }
      const data = await response.json();
      setUser(data);

      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  fetchUserData("Dasturchi-Mufid");
  return (
    <div className="container mx-auto">
      {user && <ProfileCard user={user} />}
      <button>sdns</button>
    </div>
  );
}

export default App;
