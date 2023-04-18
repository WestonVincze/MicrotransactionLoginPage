import { renderStars } from "../../../utils/renderStars";

export default function UserData({
  username,
  passwordLength,
  logout
}: UserDataProps) {
  return (
    <div className="userData">
      <div className="username">{username}</div>
      <div className="password">{renderStars(passwordLength)}</div>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
}

export interface UserDataProps {
  username: string;
  passwordLength: number;
  logout(): void;
}
