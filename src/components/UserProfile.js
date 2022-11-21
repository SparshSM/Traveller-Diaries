import React, { useState, useEffect } from "react";
// import { getUser } from "../APIs/UserDetails";
import { useNavigate } from "react-router-dom";
import "../CSS/profile.css";
import { logEnteries } from "../APIs/logAPI";
function UserProfile() {
  let navigate = useNavigate();
  let [logs, setLogs] = useState([]);
  const getLogs = async () => {
    let logs = await logEnteries();
    setLogs(logs);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getLogs();
    } else {
      navigate("/login");
    }
  });
  return (
    <div style={{backgroundColor:"honeydew"}}>
      <div className=" container col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-1 ">
          <img
            className="rounded-circle mt-3"
            width="150px"
            alt="profile pic"
            src={require('./profile.png')} />
          <span className="font-weight-bold">Sparsh</span>
          <span className="text-black-50">sparsh.mehra@gmail.com</span>
        </div>
        <div style={{ float: "right" }}></div>
        {/* </div> */}
        {/* </div> */}
      </div>
      <div className="row px-3">
        <h6 style={{fontFamily:"Courier New",fontWeight:"600",fontSize:"30px"}}>My Reviews</h6>
        {logs.map((ele) => (
          <div className="col-3 column my-2">
            <div className="card" style={{ width: "350px", height: "400px",fontFamily:"Monospace",backgroundColor: "#FAACA8",
backgroundImage:"linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"}}>
              <h5 className="card-header rounded-4">{ele.title}</h5>
              <div className="card-body">
                <p style={{ fontWeight: "800" }}>
                  Description:
                </p>
                <p>{ele.description}</p>
                {/* <span className="text-left">Description:</span>  <p className="card-text">{ele.description}</p> */}
                <p style={{ fontWeight: "800" }}>
                  Add. Comments:
                </p>
                <p> {ele.comments}
                </p>
                <span className="card-text position-absolute bottom-0 px-2 start-0">
                  Rating: {ele.rating}⭐
                </span>
                <span className="position-absolute bottom-0 px-2 end-0">
                  Visited On: {ele.visitedOn.slice(0, 10)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
