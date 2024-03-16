import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [correctPassword, setCorrectPassword] = useState(-1);
  const [correctConfirmPassword, setCorrectConfirmPassword] = useState(-1);
  const [correctEmail, setCorrectEmail] = useState(-1);

  const handleEmail = (e) => {
    console.log(e.target.value);
    let email = e.target.value;
    setData({ ...data, email: e.target.value });

    if (
      !email.match(
        /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
      )
    ) {
      setCorrectEmail(0);
    } else {
      setCorrectEmail(1);
    }
  };

  const handlePassword = (e) => {
    let p = e.target.value;
    console.log(p);
    setData({
      ...data,
      password: p,
    });

    if (p.length < 8) {
      setCorrectPassword(0);
    } else {
      setCorrectPassword(1);
    }
  };

  const handleConfirmPassword = (e) => {
    let cp = e.target.value;
    console.log(typeof data.password);
    setData({
      ...data,
      confirmPassword: cp,
    });

    if (cp !== data.password) {
      setCorrectConfirmPassword(0);
    } else {
      setCorrectConfirmPassword(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !correctPassword ||
      !correctConfirmPassword ||
      !correctEmail ||
      data.email.length < 0 ||
      data.confirmPassword.length < 0 ||
      data.password.length < 0
    ) {
      alert("Form cannot be submitted");
    } else alert("Form Submitted successfully");
  };

  return (
    <div className="app">
      <form className="container">
        <div className="inputElement">
          <label>Email</label>
          <input
            type="text"
            className={
              correctEmail === -1 ? "" : correctEmail === 1 ? "green" : "red"
            }
            value={data.email}
            onChange={(e) => handleEmail(e)}
          />
          {!correctEmail && (
            <label
              style={{ fontWeight: "normal", color: "red", fontSize: "10px" }}
            >
              Invalid Email
            </label>
          )}
        </div>

        <div className="inputElement">
          <label>Password</label>
          <input
            type="password"
            className={
              correctPassword === -1
                ? ""
                : correctPassword === 1
                ? "green"
                : "red"
            }
            value={data.password}
            onChange={(e) => handlePassword(e)}
          />
          {!correctPassword && (
            <label
              style={{ fontWeight: "normal", color: "red", fontSize: "10px" }}
            >
              Password must contain atleast 8 characters
            </label>
          )}
        </div>

        <div className="inputElement">
          <label>Confirm Password</label>
          <input
            type="password"
            className={
              correctConfirmPassword === -1
                ? ""
                : correctConfirmPassword === 1
                ? "green"
                : "red"
            }
            value={data.confirmPassword}
            onChange={(e) => handleConfirmPassword(e)}
          />
          {!correctConfirmPassword && (
            <label
              style={{ fontWeight: "normal", color: "red", fontSize: "10px" }}
            >
              Password does not match
            </label>
          )}
        </div>

        <div className="btn-div">
          <button
            className="btn"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
