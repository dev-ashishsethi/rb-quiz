import { Link } from "react-router-dom";

export function Nav(){
return (
    <nav className="navbar">
      <Link to={"/"}>
        <p className="nav-title">
          R<span className="nav-title-short">&</span>B
          <span className="nav-title-short"> Quiz </span>
        </p>
      </Link>

{/*       
      {login ? (
        <button className="profile-btn">
          <All.IconoirProfileCircled className="profile" />

          <div className="profile-options">
            <ul>
              
                <li onClick={()=>navigate("")}>Profile</li>
              
              <li onClick={logOutHandler}>Log Out</li>
            </ul>
          </div>
        </button>
      ) : (
        <Link to="/SignIn" className="login-btn">
          {" "}
          <button className="btn btn-primary login-btn" onClick={LoginHandler}>
            Log In
          </button>
        </Link>
      )} */}
    </nav>
  );
      }