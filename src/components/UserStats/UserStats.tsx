const UserStats = ({ user, isDarkMode }: ProfileCardProps) => (
  <ul className="mt-8 flex flex-row justify-between w-full text-gray-400 bg-gray-100 py-5 px-10">
    <li>
      <span className="font-semibold">Followers:</span>
      <p className="text-2xl">{user.followers || "Not followers"}</p>
    </li>
    <li>
      <span className="font-semibold">Following:</span>
      <p className="text-2xl">{user.following || "Not followed to someone"}</p>
    </li>
    <li>
      <span className="font-semibold">Repos:</span>
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
);

export default UserStats;
