import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Error.css"
const Errorpage = () => {
  return (<> 
  <div className="errorbody">

  <main class="bl_page404">
        <h1>Error 404. The page does not exist</h1>
        <p className='toplines'>Sorry! The page you are looking for can not be found. Perhaps the page you requested was moved or deleted. It
            is also possible that you made a small typo when entering the address. Go to the main page.
        </p>
        <div class="bl_page404__wrapper">
            <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true" />
            <div class="bl_page404__el1"></div>
            <div class="bl_page404__el2"></div>
            <div class="bl_page404__el3"></div>
            <br />
            <br />
            <Link class="bl_page404__link" to="/">go home</Link>
            <br />
        </div>
    </main>
  </div>
  </>
)
}

export default Errorpage