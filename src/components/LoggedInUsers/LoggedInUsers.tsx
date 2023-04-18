import UserData, { UserDataProps } from "./UserData/UserData";

export default function LoggedInUsers({ userList }: LoggedInUsersProps) {
  return (
    <div className="loggedInUsers">
      <h2>Logged In Users</h2>
      {userList?.map((u: UserDataProps) => (
        <UserData
          username={u.username}
          passwordLength={u.passwordLength}
          logout={u.logout}
        />
      ))}
    </div>
  );
}

interface LoggedInUsersProps {
  userList: UserDataProps[];
}
