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
      <div className="w-full h-screen flex items-center justify-center">
        <form className="border w-[40rem] h-[25rem] flex items-center justify-center flex-col bg-blue-500 rounded-lg">
          <div className="error mb-6 font-sans text-[22px] underline text-red-300">
            {error}
          </div>

          <input
            type="text"
            placeholder="User Name / Email"
            onChange={handleUserNameOrEmailChange}
            value={userNameOrEmail}
            className="border py-2 px-[6rem] placeholder:text-[20px] placeholder:text-slate-300 outline-none bg-gray-200 focus:border-green-300 focus:ring-2 font-sans font-semibold text-slate-500 focus:bg-white"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            value={userPassword}
            className="border py-2 px-[6rem] mt-5 placeholder:text-[20px] placeholder:text-slate-300 outline-none bg-gray-200 focus:border-green-300 focus:ring-2 font-sans font-semibold text-slate-500 focus:bg-white"
          />

          <button
            onClick={() => verifyData(event)}
            className="mt-6 bg-green-600  w-[24.5rem] h-11 rounded-lg font-bold text-2xl text-white hover:bg-green-500"
          >
            Submit
          </button>
          <a
            href="#"
            className="mt-6 relative top-2 font-sans text-[20px] text-red-300"
          >
            Don't have an account? Sign Up
          </a>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
