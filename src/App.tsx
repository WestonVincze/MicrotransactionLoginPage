import "./styles.css";
import LoginPage from "./components/LoginPage/LoginPage";
import LoggedInUsers from "./components/LoggedInUsers/LoggedInUsers";
import { UserDataProps } from "./components/LoggedInUsers/UserData/UserData";

export default function App() {
  let loggedInUsers: UserDataProps[] = [];
  return (
    <div className="App">
      <LoginPage />
      <LoggedInUsers userList={loggedInUsers} />
    </div>
  );
}
