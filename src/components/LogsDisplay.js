// import React,{useState,useEffect} from 'react'
// import { logEnteries } from "../APIs/logAPI";
// function LogsDisplay(location) {
//     let [logs, setLogs] = useState([]);
//     const getLogs = async()=>{
//         let logs = await logEnteries();
//         setLogs(logs);
//       }
//       useEffect(() => {
// getLogs(); 
// }, []);
//   return (
//     <>
//    { logs.map((ele) => (
// <>
// {/* for (const key in ele.longitude) { */}
// {/* //    console.log(key,"longs") */}
// {/* } */}
// <div className="card" style={{width: "18rem;"}}>
//   <img src="..." className="card-img-top" alt="..." />
//   <div className="card-body">
//     <h5 className="card-title">{ele.title}</h5>
//     <p className="card-text">{ele.description}</p>
//     <a href="/" className="btn btn-primary">{ele.visitedOn}</a>
//   </div>
// </div>
// </>

//    ))}
//     </>
//   )
// }

// export default LogsDisplay