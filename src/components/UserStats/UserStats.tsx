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
        <span className="font-semibold ">
          <p className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
            >
              <path
                d="M20 2.79876C19.2562 3.12501 18.4637 3.34126 17.6375 3.44626C18.4875 2.93876 19.1362 2.14126 19.4412 1.18001C18.6487 1.65251 17.7737 1.98626 16.8412 2.17251C16.0887 1.37126 15.0162 0.875015 13.8462 0.875015C11.5762 0.875015 9.74874 2.71751 9.74874 4.97626C9.74874 5.30126 9.77624 5.61376 9.84374 5.91126C6.43499 5.74501 3.41875 4.11126 1.3925 1.62251C1.03875 2.23626 0.831249 2.93876 0.831249 3.69501C0.831249 5.11501 1.5625 6.37376 2.6525 7.10251C1.99375 7.09001 1.3475 6.89876 0.799999 6.59751C0.799999 6.61001 0.799999 6.62626 0.799999 6.64251C0.799999 8.63501 2.22125 10.29 4.085 10.6713C3.75125 10.7625 3.3875 10.8063 3.01 10.8063C2.7475 10.8063 2.4825 10.7913 2.23375 10.7363C2.765 12.36 4.2725 13.5538 6.06499 13.5925C4.67 14.6838 2.89875 15.3413 0.981249 15.3413C0.644999 15.3413 0.3225 15.3263 0 15.285C1.81625 16.4562 3.96875 17.125 6.28999 17.125C13.835 17.125 17.96 10.875 17.96 5.45751C17.96 5.27626 17.9537 5.10126 17.945 4.92751C18.7587 4.35001 19.4425 3.62876 20 2.79876Z"
                fill="#4B6A9B"
              />
            </svg>
            Twitter:
          </p>
        </span>
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
