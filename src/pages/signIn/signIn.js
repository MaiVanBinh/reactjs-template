import React, { useState } from "react";
import "./signIn.css";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const SignIn = (props) => {
  const { onLoginSuccess } = props;
  const history = useHistory();

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
  const [errMessage, setErrMessage] = useState("");

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

    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((resData) => {
        onLoginSuccess(resData);
        history.push("/products");
      })
      .catch((err) => setErrMessage("Username or Password wrong"));
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
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSuccess: (payload) => dispatch({ type: "LOGIN_SUCCESS", payload }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
