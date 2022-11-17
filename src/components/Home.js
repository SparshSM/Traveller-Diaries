import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"

function Home() {
  return (
    <>
    <div style={{backgroundColor:"lightsteelblue"}}>
      
    <div style={{position:""}}>
    <h3 className='' style={{fontFamily:"'Dancing Script','cursive'",fontWeight:"700",fontSize:"48px"}}>Let The Journey Begins,Give Your First Review Here</h3>
    </div>

    <img src="https://png.pngtree.com/background/20210709/original/pngtree-color-travel-tourism-vacation-picture-image_917677.jpg" width={"100%"} height={"450px"} style={{marginTop:"-10px"}} />
   {/* <div className="" style={{display:"flex",justifyContent:"space-evenly",padding:"10px"}}>
  </div>  */}
  <div style={{display:"flex",justifyContent:"center"}}>
  <h3 style={{fontFamily:"'Dancing Script','cursive'",fontWeight:"700",fontSize:"48px"}}>View Other's Recent Review</h3>
  </div>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <button className="buttonClass"> <Link className="navbar-brand" to="/maps">Maps</Link></button>
  </div>
  <div style={{display:"flex",justifyContent:"center"}}>
  <h3 style={{fontFamily:"'Dancing Script','cursive'",fontWeight:"700",fontSize:"48px"}}>Made Plans,Make Your Itienary Now With Diginotes</h3>
  </div>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <a className="buttonClass btn button" style={{textDecoration:"none",alignItems:"center"}} href="https://diginotesbypackmaks.herokuapp.com/" target={'_blank'}>Diginotes</a>
  </div>
    {/* <Carousel/> */}
    </div>
    </>
  )
}

export default Home