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
        <div className="col-md-4">
            <div className="p-3 py-5">
                <h4>My Reviews</h4>
            {logs.map((ele) => (
                <>
                 <div className='col-md-3 my-3'>

             <div className="card" style={{width:"250px"}}>
            <h5 className="card-header">{ele.title}</h5>
            <div className="card-body">
            <p className="card-text">Description: {ele.description}</p>
             <p className="card-text">Comments: {ele.comments}</p>
            <p className="card-text">Rating: {ele.rating}</p>
            </div>
            <span className="card-footer">Visited On: {ele.visitedOn}</span>
        </div>
                 </div>
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