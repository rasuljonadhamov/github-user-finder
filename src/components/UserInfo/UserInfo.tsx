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

const UserInfo = ({ user, isDarkMode }: ProfileCardProps) => (
  <div className="flex flex-col gap-2 items-start">
    <h2
      className={`text-gray-400 ${isDarkMode ? "text-white" : "text-gray-700"}`}
    >
      {user.name}
    </h2>
    <p
      className={`text-gray-400 ${isDarkMode ? "text-white" : "text-gray-700"}`}
    >
      @{user.twitter_username || "N/A"}
    </p>
    <p
      className={`text-gray-400 ${isDarkMode ? "text-white" : "text-gray-700"}`}
    >
      {user.bio || "This profile has no bio"}
    </p>
    <div className="created">
      <p
        className={`text-gray-400 ${
          isDarkMode ? "text-white" : "text-gray-700"
        }`}
      >
        Joined: {user.created_at || "N/A"}
      </p>
    </div>
  </div>
);

export default UserInfo;
