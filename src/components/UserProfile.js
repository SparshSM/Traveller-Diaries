import React, { useState, useEffect } from "react";
// import { getUser } from "../APIs/UserDetails";
import {useNavigate} from 'react-router-dom'
import "../CSS/profile.css";
import { logEnteries } from "../APIs/logAPI";
function UserProfile() {
  let navigate = useNavigate (); 
  let [logs, setLogs] = useState([]);
  const getLogs = async () => {
    let logs = await logEnteries();
    setLogs(logs);
  };
  // let [user, setUser] = useState({});
  // let token = localStorage.getItem("token")
  // const getUsers = async()=>{
  //     let userdetails = await getUser(token);
  //     setUser(userdetails);
  //   }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getLogs();
    } else {
        navigate("/login");
    }
  });
  return (
    <>
          <div className=" container col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-1 ">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Sparsh</span>
              <span className="text-black-50">sparsh.mehra@gmail.com</span>
            </div>
            <div style={{float:"right"}}>
              
            </div>
          {/* </div> */}
          {/* </div> */}
          </div>
      <div className="row"  style={{position:"sticky"}}>
          <h6>My Reviews</h6>
  {logs.map((ele) => (
  <div className="col-3 column my-2">
    <div className="container card" style={{ width: "350px",height:"400px" }}>
      <h5 className="card-header">{ele.title}</h5>
                  <div className="card-body">
                    <p className="card-text">Description: <br /> {ele.description}</p>
                    <p className="card-text">Add. Comments:  <br /> {ele.comments}</p>
                    <p className="card-text">Rating: {ele.rating}⭐</p>
                    <span className="position-absolute bottom-0 end-0">
                    Visited On: {ele.visitedOn.slice(0,10)}
                  </span>
    </div>
    </div>
    </div>
  ))}
  </div>
    </>
  );
}

export default UserProfile;
