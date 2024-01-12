import React from "react";

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

interface MainSectionProps {
  user: User | null;
  isDarkMode: boolean;
}

const ProfileCard: React.FC<MainSectionProps> = ({ user, isDarkMode }) => {
  if (!user) return null;

  return (
    <section
      className={`main-section w-2/3 flex flex-col items-center gap-y-4 mx-auto px-4 py-8 ${
        isDarkMode ? "dark:bg-gray-800" : "bg-white"
      }`}
    >
      <div className="flex gap-14">
        <img
          src={user.avatar_url}
          alt={user.login}
          className={`w-48 h-48 rounded-full ring-2 ring-offset-2 ${
            isDarkMode ? "ring-gray-700" : "ring-gray-200"
          }`}
        />
        <div className="flex flex-col gap-2 items-start">
          <p>{user.name}</p>
          <p>{user.twitter_username || "N/A"} </p>
          <p className={`text-gray-400 ${isDarkMode ? "text-gray-600" : ""}`}>
            {user.bio || "This profile has no bio"}
          </p>
        </div>
        <div className="created">
          <p>Joined: {user.created_at || "N/A"}</p>
        </div>
      </div>
      <ul className="flex mt-8 flex-row justify-between w-full text-gray-400 bg-gray-100 py-5 px-10">
        <li>
          <span className="font-semibold">Followers:</span>
          <p className="text-2xl"> {user.followers || "Not followers"}</p>
        </li>
        <li>
          <span className="font-semibold">Following:</span>{" "}
          <p className="text-2xl">
            {" "}
            {user.following || "Not followed to someone"}
          </p>
        </li>
        <li>
          <span className="font-semibold">Repo:</span>{" "}
          <p className="text-2xl">{user.public_repos || "N/A"}</p>
        </li>
        {user.twitter_username && (
          <li>
            <span className="font-semibold m-2">Twitter:</span>
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
