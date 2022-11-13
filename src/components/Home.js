import React from 'react'
import "../App.css"

function Home() {
  return (
    <>
    <div   style={{background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}}>
      
    <h3 style={{position:"absolute",fontFamily:"'Dancing Script','cursive'",fontWeight:"700",fontSize:"48px"}}>Let the journey begins</h3>
    <img src="https://png.pngtree.com/background/20210709/original/pngtree-color-travel-tourism-vacation-picture-image_917677.jpg" width={"100%"} />
   <div className="" style={{display:"flex",justifyContent:"space-evenly",padding:"10px"}}>
    <button class="buttonClass">Signup</button>
    <button class="buttonClass">Login</button>
    </div> 
    {/* <Carousel/> */}
    </div>
    </>
  )
}

export default Home