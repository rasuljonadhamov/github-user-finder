import UserInfo from "../UserInfo/UserInfo";

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

const Avatar = ({ user, isDarkMode }: ProfileCardProps) => (
  <div className="flex gap-14">
    <img
      src={user.avatar_url}
      alt={user.login}
      className={`w-48 h-48 rounded-full ring-2 ring-offset-2 ${
        isDarkMode ? "ring-gray-700" : "ring-gray-200"
      }`}
    />

    <UserInfo user={user} isDarkMode={isDarkMode} />
  </div>
);

export default Avatar;
