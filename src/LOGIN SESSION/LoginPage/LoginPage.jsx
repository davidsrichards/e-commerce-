// importing Modules

import { useState } from "react";
import "./LoginPage.css";
import userData from "../UserData/UserData";

// LoginPage Function

function LoginPage() {
  // username or email

  const [userNameOrEmail, setUserNameOrEmail] = useState("");

  // password

  const [userPassword, setUserPassword] = useState("");

  // check data

  const [isCorrect, setIsCorrect] = useState(-1);

  // error

  const [error, setError] = useState("");

  const handleUserNameOrEmailChange = (event) => {
    setUserNameOrEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setUserPassword(event.target.value);
  };

  const verifyData = (e) => {
    e.preventDefault();
    let isCorrect = false;

    userData.map(({ name, password }) => {
      if (userNameOrEmail === name && userPassword === password) {
        isCorrect = true;
      }
    });
    if (isCorrect) {
      setError("");
      setUserNameOrEmail("");
      setUserPassword("");
      console.log("correct");
    } else {
      setError("Invalid Username/Password");
      console.log("wrong");
    }
  };

  return (
    <>
      <div className="login-card">
        <form>
          <div className="error">{error}</div>
          <input
            type="text"
            placeholder="User Name / Email"
            onChange={handleUserNameOrEmailChange}
            value={userNameOrEmail}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            value={userPassword}
          />
          <button onClick={() => verifyData(event)}>Submit</button>
          <a href="#">Don't have an account? Sign Up</a>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
