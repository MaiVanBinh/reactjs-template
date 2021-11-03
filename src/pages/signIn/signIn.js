import React, { useState } from "react";
import "./signIn.css";
import ApiFetching from "../../utilities/ApiFetching";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN_SUCCESS} from './../../reduxConfig/store/actionsType';

const SignIn = (props) => {
  const { login } = ApiFetching();
  const { onLoginSuccess } = props;

  const history = useHistory();

  const [username, setUsername] = useState({
    value: "",
    touch: false,
  });

  const [password, setPassword] = useState({
    value: "",
    touch: false,
  });

  const loginHandler = () => {
    // handler login request
    const payload = { username: username.value, password: password.value };
    // console.log(payload);
    login(payload, (data) => {
      if (data && data.accessToken) {
        onLoginSuccess(data.accessToken);
        history.push("/products");
      }
    });
  };

  return (
    <div className="login">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          loginHandler();
        }}
      >
        <div className="login-container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={username.value}
            onChange={(event) =>
              setUsername({
                value: event.target.value,
                touch: true,
              })
            }
            required
          />
          {username.touch && username.value === "" && <p>Not empty</p>}
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password.value}
            onChange={(event) =>
              setPassword({
                value: event.target.value,
              })
            }
            required
          />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSuccess: (accessToken) =>
      dispatch({ type: LOGIN_SUCCESS, payload: accessToken }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
