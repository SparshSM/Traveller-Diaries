import React,{useState,useEffect} from 'react'
import { getUser } from '../APIs/UserDetails';
import '../CSS/profile.css'
import { logEnteries } from "../APIs/logAPI";
function UserProfile() {
    let [logs, setLogs] = useState([]);
    const getLogs = async()=>{
        let logs = await logEnteries();
        setLogs(logs);
      }
    // let [user, setUser] = useState({});
    // let token = localStorage.getItem("token")
    // const getUsers = async()=>{
    //     let userdetails = await getUser(token);
    //     setUser(userdetails);
    //   }
      useEffect(() => {
        if (localStorage.getItem("token")) 
      {
        getLogs();
      }
      else {
      //   navigate("/login");
      } 
      },);
  return (
    <>
   <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">baba</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label></div>
                    <div className="col-md-6"><label className="labels">Surname</label></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label></div>
                    <div className="col-md-6"><label className="labels">State/Region</label></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5">
                <h4>My Reviews</h4>
            {logs.map((ele) => (
                <>
                <div className="d-flex justify-content-between align-items-center experience"><span>{ele.title}</span></div>
                <div className="col-md-12"><label className="labels">{ele.description}</label></div> <br/>
                <div className="col-md-12"><label className="labels">{ele.comments}</label></div>
                </>
            ))}
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default UserProfile