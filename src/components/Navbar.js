import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import "../App.css"
function Navbar() {
  let location = useLocation();
  let navigate = useNavigate (); 
  const logout=()=>{
    localStorage.removeItem('token');
    navigate("/")
  }
return (
  <nav style={{width:"100%",borderRadius:"5px"}} className="navbar navbar-expand-lg">
<div className="container-fluid">
  <Link className="navbar-brand" to="/">
    <img src={require('./traveler-diaries-logo.png')} alt="logo" width={"120px"} height={"40px"} /> 
    {/* <span>Traveler Diaries🌍✈️</span> */}
    </Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link  className={ `nav-link ${location.pathname === "/maps" ? "active":"" }`} to="/maps">Maps</Link>
      </li>
      <li className="nav-item">
        <Link  className={ `nav-link ${location.pathname === "/aboutus" ? "active":"" }`} to="/aboutus">About us</Link>
      </li>
      <li className="nav-item">
        <a style={{textDecoration:"none"}} className="nav-link" href="https://diginotesbypackmaks.herokuapp.com/" target={'_blank'}>Itienary</a>
      </li>
     {localStorage.getItem('token') ? <li className="nav-item">
        <Link  className={ `nav-link ${location.pathname === "/profile" ? "active":"" }`} to="/profile">Profile</Link>
      </li> :""}
      <li style={{paddingTop:"8px"}}>
    {!localStorage.getItem('token')? <div> <Link style={{textDecoration:"none"}} className="mx-1" to="/login" role="button">Login  &nbsp;</Link>
    <Link style={{textDecoration:"none"}} className=" nav-item" to="/signup" role="button">Signup</Link></div>:<Link style={{textDecoration:"none"}} onClick={logout} className=" nav-item" to="/login" role="button">Logout</Link>}
      </li>
    </ul>
  </div>
</div>
</nav>
)
}
//   const { loginWithRedirect } = useAuth0();
//   const { logout } = useAuth0();
//   const { isAuthenticated, isLoading } = useAuth0();
//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="/">TravelerDiaries✈️🌍</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/register">Signup</a>
//       </li>
//       {!isAuthenticated ?
//       <li className="nav-item">
//         <a className="nav-link" href="/login" onClick={() => loginWithRedirect()}>Login</a>
//       </li>
//       :
//       <li>
//       <button onClick={() => logout({ returnTo: window.location.origin })}>
//       Log Out
//     </button>
//       </li>}
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//          Profile
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//           <a className="dropdown-item" href="/">Action</a>
//           <a className="dropdown-item" href="/">Another action</a>
//           <a className="dropdown-item" href="/">Something else here</a>
//         </div>
//       </li>
//     </ul>
//   </div>
// </nav>
//     </>
//   )
// }

export default Navbar