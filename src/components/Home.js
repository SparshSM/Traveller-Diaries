import React from 'react'
import Carousel from './Carousel'

function Home() {
  return (
    <>
    <h3 style={{position:"absolute"}}>Let the journey begins</h3>
    <img src="https://png.pngtree.com/background/20210709/original/pngtree-color-travel-tourism-vacation-picture-image_917677.jpg" width={"100%"} />
   <div className="" style={{display:"flex",justifyContent:"space-evenly"}}>
    <button>Signup</button>
    <button>Login</button>
    </div> 
    {/* <Carousel/> */}
    </>
  )
}

export default Home