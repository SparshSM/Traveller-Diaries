/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import { AllLogEnteries, logEnteries } from "../APIs/logAPI";
import LogEntryForm from "./LogEntryForm";
// import LogsDisplay from "./LogsDisplay";
function MapBar() {
  const [showPopup, setShowPopup] = useState({});
  const [addLoc, setAddLoc] = useState(null);
  let [logs, setLogs] = useState([]);
 
  // let token = localStorage.getItem("token")
const getLogs = async()=>{
  let logs = await logEnteries();
  setLogs(logs);
}
const TotalLogEnteries = async()=>{
  let logs = await AllLogEnteries();
  setLogs(logs);
}
useEffect(() => {
  if (localStorage.getItem("token")) 
{
  getLogs();
  // TotalLogEnteries();
}
else {
  TotalLogEnteries();
//   navigate("/login");
} 
},);
 const showAddPlace= (event)=>{
const longitude = event.lngLat.lng
const latitude = event.lngLat.lat
  // const [lng,lat] = event.lngLat;
  setAddLoc(  {  
    longitude,
    latitude,}
  )

console.log(addLoc);
console.log(event.lngLat);
  }  
  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoic3BhcnNoc20iLCJhIjoiY2w5bDd2ZXNoMTVzbjNvbXhzYmF5Zmg2diJ9.Yx9TNkIw28dQNnK7IbNFKw"
        style={{
          width: "100%",
          height: "100vh",
          borderRadius: "2px",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onDblClick={localStorage.getItem("token") ? showAddPlace :""}
      >
        {logs.map((ele) => (
          // console.log(ele.user,"user"),
          <>
          <React.Fragment>
          key={ele.createdAt}
              <Marker
             color= {localStorage.getItem("token") ?
              "#3FB1CE" :"red"
            }
                longitude={ele.longitude}
                latitude={ele.latitude}
                onClick={()=>{
                  setShowPopup({...showPopup,
                    [ele._id]:true})
                }}
              >  
              {/* <img src={require('./marker.png')}/> */}
              </Marker>
              {showPopup[ele._id] ? (
      <Popup longitude={ele.longitude} latitude={ele.latitude}
      maxWidth="400px"
      closeButton={true}
      closeOnClick={false}
        anchor="left"  onClose={() => setShowPopup({...showPopup,[ele._id]:false})}> 
        {/* <LogsDisplay location={ele} /> */}
        <><div className="card" style={{width:"250px"}}>
 <h5 className="card-header">{ele.title}</h5>
<div className="card-body">
 <p className="card-text">Description: {ele.description}</p>
 <p className="card-text">Comments: {ele.comments}</p>
 <p className="card-text">Rating: {ele.rating}⭐</p>
</div>
 <span className="card-footer">Visited On: {ele.visitedOn.slice(0,10)}</span>
</div></>
      </Popup>) :""}
          </React.Fragment>
          </>
        ))},
        {addLoc ? <>
          <Marker
                longitude={addLoc.longitude}
                latitude={addLoc.latitude}>  
              </Marker>
              {/* {showPopup[ele._id] ? ( */}
      <Popup 
      maxWidth="400px"
      longitude={addLoc.longitude} latitude={addLoc.latitude}
      closeButton={true}
      closeOnClick={true}
      onClose={() => setAddLoc(null)}
      anchor="right"> 
        <LogEntryForm onClose={() =>{ setAddLoc(null);
        getLogs();}} location={addLoc} />
      </Popup>
      {/* ) :""} */}
        </>:""
        
      }
      </Map>
    </>
  );
}

export default MapBar;
