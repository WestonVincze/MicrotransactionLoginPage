import { useState } from "react";
import InputField from "../InputField/InputField";

function login(username: string, password: string) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="LoginPage">
      <h1>LOGIN PAGE</h1>
      <InputField
        label="username"
        fieldType="text"
        value={username}
        handleChange={setUsername}
      />
      <InputField
        label="password"
        fieldType="password"
        value={password}
        handleChange={setPassword}
      />
      <button onClick={() => login(username, password)}>LOG IN</button>
    </div>
  );
}

export default LoginPage;
