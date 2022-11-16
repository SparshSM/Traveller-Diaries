import React from 'react'
import "../App.css"

function Home() {
  return (
    <>
    <div style={{backgroundColor:"lightgoldenrodyellow"}}>
      
    <img src="https://png.pngtree.com/background/20210709/original/pngtree-color-travel-tourism-vacation-picture-image_917677.jpg" width={"100%"} height={"450px"} style={{marginTop:"-10px"}} />
   {/* <div className="" style={{display:"flex",justifyContent:"space-evenly",padding:"10px"}}>
  </div>  */}
  <div style={{display:"flex",justifyContent:"center"}}>
  <h3 style={{position:"relative",fontFamily:"'Dancing Script','cursive'",fontWeight:"700",fontSize:"48px"}}>Let The Journey Begins,Give Your First Review Here</h3>
  </div>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <button className="buttonClass">Signup</button>
  <button className="buttonClass">Login</button>
  </div>
  <div style={{display:"flex",justifyContent:"center"}}>
  <h3 style={{position:"relative",fontFamily:"'Dancing Script','cursive'",fontWeight:"700",fontSize:"48px"}}>View Other's Recent Review</h3>
  </div>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <button className="buttonClass">Maps</button>
  </div>
    {/* <Carousel/> */}
    </div>
    </>
  )
}

export default Home