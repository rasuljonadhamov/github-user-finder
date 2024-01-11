import React, { useState } from "react";

interface ProfileCardProps {
  name: string;
  followers: string;
  following: string;
  bio: string;
}

const ProfileCard = ({ user }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(user);

  const { name, followers, following, bio }: ProfileCardProps = user;

  return (
    <div
      className={`  p-4 ${
        isDarkMode
          ? "dark:bg-gray-800 dark:text-white"
          : "bg-white text-gray-700"
      }`}
    >
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">Followers: {followers}</p>
      <p className="text-xs">Following: {following}</p>
      <h1 className="text-xs">{bio}</h1>

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default ProfileCard;
