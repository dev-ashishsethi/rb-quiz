import { Link } from "react-router-dom";
import { useAuth } from "../../Context/loginContext";

export function Nav() {
  const { login, setLogin } = useAuth();

  function logOutHandler() {
    localStorage.removeItem("login");
    setLogin(false);
  }

  function LoginHandler() {}
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <p className="nav-title">
          R<span className="nav-title-short">&</span>B
          <span className="nav-title-short"> Quiz </span>
        </p>
      </Link>

      {login ? (
        <button className="btn btn-primary login-btn" onClick={logOutHandler}>
          Log Out
        </button>
      ) : (
        <Link to="/SignIn" className="login-btn">
          {" "}
          <button className="btn btn-primary login-btn" onClick={LoginHandler}>
            Log In
          </button>
        </Link>
      )}
    </nav>
  );
}
