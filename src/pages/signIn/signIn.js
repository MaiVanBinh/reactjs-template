import React, { useState } from "react";
import "./signIn.css";

const SignIn = () => {
  // add state username
  const [username, setUsername] = useState({
    value: "",
    touch: false,
  });
  // add state password
  const [password, setPassword] = useState({
    value: "",
    touch: false,
  });
  const [errMessage, setErrMessage] = useState('');

  // add login handler function
  const loginHandler = (e) => {
    if (username.value === "") {
      setUsername({
        ...username,
        touch: true,
      });
      return;
    }
    if (password.value === "") {
      setUsername({
        ...username,
        touch: true,
      });
      return;
    }
    const payload = {
      username: username.value,
      password: password.value,
    };
    console.log(payload)
    fetch('http://localhost:3000/users/login', {
      method: "POST",
      headers: {
        'content-type':  'application/json'
      },
      body: JSON.stringify(payload)
    }).then(res => res.json()).then(resData => {
      console.log(resData)
    }).catch(err => setErrMessage("Username or Password wrong"));
  };
  return (
    <div className="login">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          loginHandler();
        }}
      >
        {errMessage}
        <div className="login-container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={username.value}
            onChange={(e) =>
              setUsername({
                value: e.target.value,
                touch: true,
              })
            }
            required
          />
          <p>username is not empty</p>
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={username.password}
            onChange={(e) =>
              setPassword({
                value: e.target.value,
                touch: true,
              })
            }
            name="psw"
            required
          />
          <p>password is not empty</p>
          <button type="submit" onClick={loginHandler}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
