import React from 'react'
import "../App.css"
function About() {
  return (
  <>
   <section className="about_section layout_padding" style={{background:" linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",height:"77.8vh"}}>
    <div className="container">
      <div className="heading_container" style={{padding:"100px"}}>
        <h2>
         Traveler Diaries
        </h2>
      </div>
        <div className="detail-box" style={{fontFamily:"Times New Roman"}}>
          <p>
            Nowadays, more and more tourists search for travel-related information online. Reading travel related blogs is an important source but sometimes it’s very lengthy so we need quick reviews which allows for creativity in presenting one’s own travel experiences in a multimedia format, including text and photographs. Keeping records of your travels teaches you how to get a better travelling experience so that next time when you travel, you travel on a good cost and make less mistakes regarding choosing accommodation, transportation, etc. 
Some people are aware of that and travel log whenever they travel. The concept of travel logging is nothing new.. Travel log apps are getting the limelight day by day. They indeed enhance the quality of travel but also helps you keep your memories from your journey forever to cherish. Considering the advantages of such apps, we decided to make a travel log application. 
This app helps you to view reviews of a location, city or any place on a global map so here you can see a lot of place’s reviews with a single tap. You can add your reviews also and it also has an integrated notes app where you can make your itinerary and other travel notes or you can use it as your personal Travel Diary.

          </p>
          <div>
            <button className='buttonClass' style={{width:"20%"}}>
             For More Details Contact Us
            </button>
          </div>
        </div>
      </div>

  </section>
  </>
  )
}

export default About