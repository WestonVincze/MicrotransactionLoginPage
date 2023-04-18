import { useState } from "react";
import InputField from "../InputField/InputField";

function signup(username: string, password: string) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}

function passwordMatch(password1: string, password2: string): boolean {
  return password1 === password2;
}

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <div className="LoginPage">
      <h1>SIGN UP PAGE</h1>
      <InputField
        label="username"
        fieldType="text"
        value={username}
        handleChange={setUsername}
      />
      <InputField
        label="password"
        fieldType="password"
        value={password1}
        handleChange={setPassword1}
      />
      <InputField
        label="password"
        fieldType="password"
        value={password2}
        handleChange={setPassword2}
      />
      <button
        disabled={!passwordMatch(password1, password2)}
        onClick={() => signup(username, password1)}
      >
        LOG IN
      </button>
    </div>
  );
}

export default LoginPage;
