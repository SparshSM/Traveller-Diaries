import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">TravelerDiaries✈️🌍</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">Signup</a>
      </li>
      {!isAuthenticated ?
      <li className="nav-item">
        <a className="nav-link" href="/login" onClick={() => loginWithRedirect()}>Login</a>
      </li>
      :
      <li>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
      </li>}
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Profile
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar