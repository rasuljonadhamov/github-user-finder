import React from "react";

interface User {
  name: string;
  login: string;
  avatar_url: string;
  public_repos: number | null;
  bio: string;
  followers: number;
  location: string | null;
  twitter_username: string | null;
}

interface MainSectionProps {
  user: User | null;
  isDarkMode: boolean;
}

const ProfileCard: React.FC<MainSectionProps> = ({ user, isDarkMode }) => {
  if (!user) return null;

  return (
    <section
      className={`main-section flex flex-col items-center gap-y-4 mx-auto px-4 py-8 ${
        isDarkMode ? "dark:bg-gray-800" : "bg-white"
      }`}
    >
      <div className="flex gap-10">
        <img
          src={user.avatar_url}
          alt={user.login}
          className={`w-48 h-48 rounded-full ring-2 ring-offset-2 ${
            isDarkMode ? "ring-gray-700" : "ring-gray-200"
          }`}
        />
        <div className="flex flex-col items-center">
          <h2
            className={`text-3xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {user.login}
          </h2>
          <p>{user.name}</p>
          <p className={`text-gray-400 ${isDarkMode ? "text-gray-600" : ""}`}>
            {user.bio}
          </p>
        </div>
      </div>
      <ul className="flex flex-row justify-between w-full text-gray-400">
        <li>
          <span className="font-semibold">Followers:</span> {user.followers}
        </li>
        <li>
          <span className="font-semibold">Location:</span>{" "}
          {user.location || "N/A"}
        </li>
        <li>
          <span className="font-semibold">Repo:</span>{" "}
          {user.public_repos || "N/A"}
        </li>
        {user.twitter_username && (
          <li>
            <span className="font-semibold">Twitter:</span>
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              className="underline hover:text-gray-700"
            >
              @{user.twitter_username}
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};

export default ProfileCard;
