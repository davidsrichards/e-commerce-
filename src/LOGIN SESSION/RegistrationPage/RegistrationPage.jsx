// Importing Modules

import { useState } from "react";
import "./RegistrationPage.css";

// LoginPage Function

function RegistrationPage() {
  // firstName
  const [firstName, setFirstName] = useState("");

  // lastName

  const [lastName, setLastName] = useState("");

  // email

  const [email, setEmail] = useState("");

  // phone

  const [phone, setPhone] = useState("");

  // passsword

  const [password, setPassword] = useState("");

  // confirm password

  const [confirmPassword, setConfirmPassword] = useState("");

  // handle Errors

  // ancho tag

  const [ancho, setAncho] = useState("Already have an account? Sign In");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // colors

  const [firstNameColor, setFirstNameColor] = useState("green");

  const [lastNameColor, setLastNameColor] = useState("green");

  const [emailColor, setEmailColor] = useState("green");

  const [phoneColor, setPhoneColor] = useState("green");

  const [passwordColor, setPasswordColor] = useState("green");

  const [confirmPasswordColor, setConfirmPasswordColor] = useState("green");

  // declaration of onchange functions

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  // last name

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  // email

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  // phone

  function handlePhone(event) {
    setPhone(event.target.value);
  }

  // password

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  // confirmPassword

  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  const validateData = (e) => {
    let count = 0;
    e.preventDefault();
    if (firstName.length > 2) {
      setFirstNameError("");
      count++;
    } else {
      setFirstNameError("First Name Should be Greater than 2 Characters");

      firstNameColor === "green"
        ? setFirstNameColor("red")
        : setFirstNameColor("green");
    }

    if (lastName.length > 2) {
      setLastNameError("");
      count++;
    } else {
      setLastNameError("last Name should be greater than 2 characters");
      lastNameColor === "green"
        ? setLastNameColor("red")
        : setLastNameColor("green");
    }

    if (email.includes("@gmail.com")) {
      setEmailError("");
      count++;
    } else {
      setEmailError("Invalid Email");
      emailColor === "green" ? setEmailColor("red") : setEmailColor("green");
    }

    const phoneVerification = "0" || "1";

    if (phone.at(0) === "0" && phoneVerification) {
      setPhoneError("");
      count++;
    } else {
      setPhoneError("Invalid phone Number");
      phoneColor === "green" ? setPhoneColor("red") : setPhoneColor("green");
    }

    if (password.length > 6) {
      setPasswordError("");
      count++;
    } else {
      setPasswordError("password Must be greater than 6 characters");
      passwordColor === "green"
        ? setPasswordColor("red")
        : setPasswordColor("green");
    }

    if (password !== "" && confirmPassword === password) {
      setConfirmPasswordError("");
      setCorrectConfirmPassword(true);
      count++;
    } else {
      setConfirmPasswordError("Password not match");
      confirmPasswordColor === "green"
        ? setConfirmPasswordColor("red")
        : setConfirmPasswordColor("green");
    }

    if (count === 6) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
    }
    setAncho("");
    console.log(count);
  };

  return (
    <>
      <div className="card grid lg:grid-cols-2 grid-cols-1 w-[30rem] lg:w-[50rem] ">
        <div className="card-image lg:block hidden"></div>
        <form>
          {/* Input Group */}
          <div className="p-4 first:pt-0 last:pb-0 ">
            <input
              type="text"
              placeholder="First Name"
              onChange={handleFirstName}
              value={firstName}
              className=""
            />
            <p className="error" style={{ color: firstNameColor }}>
              {firstNameError}
            </p>

            <input
              type="text"
              placeholder="Last Name"
              onChange={handleLastName}
              value={lastName}
            />
            <p className="error" style={{ color: lastNameColor }}>
              {lastNameError}
            </p>

            <input
              type="email"
              placeholder="Email"
              onChange={handleEmail}
              value={email}
            />
            <p className="error" style={{ color: emailColor }}>
              {emailError}
            </p>

            <input
              type="text"
              placeholder="Phone"
              onChange={handlePhone}
              value={phone}
            />
            <p className="error" style={{ color: phoneColor }}>
              {phoneError}
            </p>

            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              value={password}
            />
            <p className="error" style={{ color: passwordColor }}>
              {passwordError}
            </p>

            <input
              type="password"
              placeholder="Confirm Password"
              onChange={handleConfirmPassword}
              value={confirmPassword}
            />
            <p className="error" style={{ color: confirmPasswordColor }}>
              {confirmPasswordError}
            </p>
          </div>
          {/* Input Group */}
          <button
            onClick={() => validateData(event)}
            className="relative top-4 bg-blue-400 hover:bg-blue-500 w-[20rem] h-10 rounded-lg font-bold font-serif text-xl text-white"
          >
            Submit
          </button>
          <a href="#" className="hover:text-red-500">
            {ancho}
          </a>
        </form>
      </div>
    </>
  );
}

export default RegistrationPage;
