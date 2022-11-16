import React from 'react'
import "../App.css"

function Home() {
  return (
    <>
    <div   style={{background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}}>
      
    <h3 style={{position:"absolute",fontFamily:"'Dancing Script','cursive'",fontWeight:"700",fontSize:"48px"}}>Let the journey begins</h3>
    <img src="https://png.pngtree.com/background/20210709/original/pngtree-color-travel-tourism-vacation-picture-image_917677.jpg" width={"100%"} style={{marginTop:"-10px"}} />
   {/* <div className="" style={{display:"flex",justifyContent:"space-evenly",padding:"10px"}}>
    <button className="buttonClass">Signup</button>
  </div>  */}
  <div style={{display:"flex",justifyContent:"center"}}>

  <button className="buttonClass">Login</button>
  </div>
    {/* <Carousel/> */}
    </div>
    </>
  )
}

export default Home