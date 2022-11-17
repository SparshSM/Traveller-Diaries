import React from 'react'
import "../App.css"
import "../CSS/About.css"
function About() {
  return (
  <div className='container-fluid' style={{background:" linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}}>
   <section >
    <div className="container">
      <div className="heading_container" style={{padding:"30px"}}>
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
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light">Our team</h2>
      </div>
    </div>

    <div className="row text-center">
      <div className="col-xl-6 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 className="mb-0">Sparsh Mehra</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="col-xl-6 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 className="mb-0">Tamanna Sharma</h5><span className="small text-uppercase text-muted">Co-Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default About