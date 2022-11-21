import React from "react";
import "../App.css";
import "../CSS/About.css";
function About() {
  return (
      <div className="container-fluid" style={{ backgroundColor: "honeydew" }}>
        <section>
          <div style={{ padding: "30px", fontFamily: "Courier New " }}>
            <h2>About Traveler Diaries</h2>
          </div>
          <div
            className="container"
            style={{
              fontFamily: "Times New Roman",
              lineHeight: "2.5",
              textAlign: "justify",
            }}
          >
            <p>
              Nowadays, more and more tourists search for travel-related
              information online. Reading travel related blogs is an important
              source but sometimes it’s very lengthy so we need quick reviews
              which allows for creativity in presenting one’s own travel
              experiences in a multimedia format, including text and
              photographs. Keeping records of your travels teaches you how to
              get a better travelling experience so that next time when you
              travel, you travel on a good cost and make less mistakes regarding
              choosing accommodation, transportation, etc. Some people are aware
              of that and travel log whenever they travel. The concept of travel
              logging is nothing new.. Travel log apps are getting the limelight
              day by day. They indeed enhance the quality of travel but also
              helps you keep your memories from your journey forever to cherish.
              Considering the advantages of such apps, we decided to make a
              travel log application. This app helps you to view reviews of a
              location, city or any place on a global map so here you can see a
              lot of place’s reviews with a single tap. You can add your reviews
              also and it also has an integrated notes app where you can make
              your itinerary and other travel notes or you can use it as your
              personal Travel Diary.
            </p>
          </div>
          <div className="px-4 py-3" style={{ fontFamily: "Times New Roman",}}>
            <p>For Feedback and Suggestions, Get in touch with Us</p>
            <button className="buttonClass">
              <a
                className="contact-btn"
                href="mailto:sparshmehra2001@gmail.com"
              >
                Contact Us
              </a>
            </button>
          </div>
        </section>
        <div className="row mb-4">
          <div className="col-lg-6">
            <h2
              style={{
                fontFamily: "Courier New",
                fontWeight: 500,
                fontSize: 48,
                padding: "20px 40px 20px 40px",
              }}
            >
              Our Team
            </h2>
          </div>
        </div>
        <div className="container row text-center" style={{margin:"auto auto"}}>
          <div className="col-xl-4 col-sm-4 mb-3">
            <div
              className="rounded shadow-sm py-5 px-4"
              style={{
                backgroundColor: "#8EC5FC",
                backgroundImage:
                  " linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
              }}
            >
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Sparsh Mehra</h5>
              <span className="small text-uppercase text-muted">
                CEO - Founder
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-sm-4 mb-3">
            <div
              className="bg-white rounded shadow-sm py-5 px-4"
              style={{
                backgroundColor: "#8EC5FC",
                backgroundImage:
                  " linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
              }}
            >
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Tamanna Sharma</h5>
              <span className="small text-uppercase text-muted">
                Co-Founder
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;
