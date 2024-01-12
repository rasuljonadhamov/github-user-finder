import React from "react";
import Avatar from "../Avatar/Avatar";
import UserStats from "../UserStats/UserStats";

interface User {
  name: string;
  login: string;
  avatar_url: string;
  public_repos: number | null;
  created_at: number | null;
  bio: string | null;
  followers: number | null;
  following: number | null;
  twitter_username: string | null;
}

interface ProfileCardProps {
  user: User | null;
  isDarkMode: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, isDarkMode }) => {
  if (!user) return null;

  return (
    <section
      className={`main-section w-2/3 flex flex-col items-center gap-y-4 mx-auto px-4 py-8 ${
        isDarkMode ? "dark:bg-gray-800" : "bg-white"
      }`}
    >
      <Avatar user={user} isDarkMode={isDarkMode} />
      <UserStats user={user} isDarkMode={isDarkMode} />
    </section>
  );
};




export default ProfileCard;
