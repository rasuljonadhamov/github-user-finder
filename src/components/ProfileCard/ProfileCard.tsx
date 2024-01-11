import React, { useState } from "react";

interface ProfileCardProps {
  name: string;
  followers: string;
  following: string;
  bio: string;
}

const ProfileCard = ({ user, isDarkMode }) => {
  console.log(user);

  const { name, followers, following, bio }: ProfileCardProps = user;

  return (
    <div
      className={`w-2/3 mx-auto  p-4 ${
        isDarkMode
          ? "dark:bg-gray-800 dark:text-white"
          : "bg-white text-gray-700"
      }`}
    >
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">Followers: {followers}</p>
      <p className="text-xs">Following: {following}</p>
      <h1 className="text-xs">{bio}</h1>
    </div>
  );
};

export default ProfileCard;
