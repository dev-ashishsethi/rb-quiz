import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SignIn.css";
import { useAuth } from "../../Context/loginContext";
import googleLogo from "../../assets/images/GoogleLogo.png";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../../firebase.config";
export function SignIn() {
  const { login, setLogin } = useAuth();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setLoginData((loginData) => ({
      ...loginData,
      [e.target.name]: e.target.value,
    }));
  };
  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await signInWithEmailAndPassword(
        firebaseAuth,
        loginData.email,
        loginData.password
      );
      localStorage.setItem("login", response.user.accessToken);
      localStorage.setItem("user data", response.user.providerData[0]);
      setLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  async function googleSignInHandler() {
    try {
      const response = await signInWithPopup(firebaseAuth, googleProvider);

      localStorage.setItem("login", response.user.accessToken);
      localStorage.setItem("user data", response.user.providerData[0]);
      setLogin(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    login && navigate("/");
  }, []);

  return (
    <div className="show-sign-in">
      <div className="form-container">
        <div className="form-subcontainer">
          <h3 className="form-title">Sign-In</h3>

          <form action="" className="signIn-form" onSubmit={signInHandler}>
            <label
              htmlFor="email-input"
              className="form-label"
              id="email-label"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="sign-input-box"
              id="email-input"
              name="email"
              value={loginData.email}
              onChange={onChangeHandler}
            />

            <label htmlFor="pass-input" className="form-label" id="pass-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="sign-input-box"
              id="pass-input"
              name="password"
              onChange={onChangeHandler}
              value={loginData.password}
            />

            <button
              type="submit"
              className="btn btn-primary form-btn"
              id="form-btn1"
            >
              Sign In
            </button>

            <Link
              to="/signUp"
              id="form-btn2"
              className="btn btn-secondary form-btn"
            >
              Sign Up
            </Link>

            <button
              type="submit"
              className="btn btn-secondary form-btn"
              id="test-login"
              onClick={googleSignInHandler}
            >
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
