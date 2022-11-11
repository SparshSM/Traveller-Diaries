/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import { logEnteries } from "../APIs/logAPI";
import LogEntryForm from "./LogEntryForm";
// import LogsDisplay from "./LogsDisplay";
function MapBar() {
  let [lng, setLng] = useState();
  let [lat, setLat] = useState();
  const [showPopup, setShowPopup] = useState({});
  const [addLoc, setAddLoc] = useState(null);
  let [logs, setLogs] = useState([]);
 
const getLogs = async()=>{
  let logs = await logEnteries();
  setLogs(logs);
}
useEffect(() => {
getLogs(); 
}, []);
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
          height: "92vh",
          borderRadius: "5px",
          border: "2px solid red",
          // zoom:"2"
        }}
        initiaLViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onDblClick={showAddPlace}
      >
        {logs.map((ele) => (
          <>
          <React.Fragment>
          key={ele.createdAt}

              <Marker
                longitude={ele.longitude}
                latitude={ele.latitude}
                onClick={()=>{
                  console.log("hoo");
                  setShowPopup({...showPopup,
                    [ele._id]:true})
                    console.log(showPopup[ele._id]===true,"val"); 
                }}
              >  
              </Marker>
              {showPopup[ele._id] ? (
      <Popup longitude={ele.longitude} latitude={ele.latitude}
      closeButton={true}
      closeOnClick={false}
        anchor="bottom"  onClose={() => setShowPopup({...showPopup,[ele._id]:false})}> 
        {/* <LogsDisplay location={ele} /> */}
        <><div className="card" style={{width: "18rem;"}}>
 <img src="..." className="card-img-top" alt="..." />
<div className="card-body">
 <h5 className="card-title">{ele.title}</h5>
 <p className="card-text">{ele.description}</p>
 <a href="/" className="btn btn-primary">{ele.visitedOn}</a>
</div></div></>
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
      <Popup longitude={addLoc.longitude} latitude={addLoc.latitude}
      closeButton={true}
      closeOnClick={false}
      onClose={() => setAddLoc(null)}
      anchor="top"> 
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
