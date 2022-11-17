import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../CSS/About.css";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "ghostwhite" }}>
        <img
          src="https://png.pngtree.com/background/20210709/original/pngtree-color-travel-tourism-vacation-picture-image_917677.jpg"
          width={"100%"}
          height={"450px"}
          style={{ marginTop: "-10px" }}
        />
        {/* <div className="" style={{display:"flex",justifyContent:"space-evenly",padding:"10px"}}>
  </div>  */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3
            style={{
              fontFamily: "'Dancing Script','cursive'",
              fontWeight: "700",
              fontSize: "48px",
            }}
          >
            Let The Journey Begins
          </h3>{" "}
          <br />
          {/* <h3 style={{fontFamily:"'Dancing Script','cursive'",fontWeight:"700",fontSize:"48px"}}>View Other's Recent Review</h3> */}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="buttonClass">
            {" "}
            <Link className="navbar-brand my-3" to="/maps">
             Continue To Maps
            </Link>
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3
            style={{
              fontFamily: "'Dancing Script','cursive'",
              fontWeight: "700",
              fontSize: "48px",
            }}
          >
          Contribute to the community, Give Your First Review Here
          </h3>{" "}
          <br />
          {/* <h3 style={{fontFamily:"'Dancing Script','cursive'",fontWeight:"700",fontSize:"48px"}}>View Other's Recent Review</h3> */}
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button className="buttonClass">
            <Link className="navbar-brand my-3" to="/signup">
              Signup
            </Link>
          </button>
          <button className="buttonClass">
            <Link className="navbar-brand my-3" to="/login">
              Login
            </Link>
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3
            style={{
              fontFamily: "'Dancing Script','cursive'",
              fontWeight: "700",
              fontSize: "48px",
            }}
          >
            Made Plans,Make Your Itienary Now With Diginotes
          </h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            className="buttonClass btn button my-3"
            style={{ textDecoration: "none",display:"grid",alignItems: "center" }}
            href="https://diginotesbypackmaks.herokuapp.com/"
            target={"_blank"}
          >
            Diginotes
          </a>
        </div>
      </div>
      {/* <div className="container-fluid text-center">
  <h2>SERVICES</h2>
  <h4>What we offer</h4>
  <br />
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-off"></span>
      <h4>POWER</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-heart"></span>
      <h4>LOVE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock"></span>
      <h4>JOB DONE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    </div>
    <br /><br />
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf"></span>
      <h4>GREEN</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate"></span>
      <h4>CERTIFIED</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench"></span>
      <h4>HARD WORK</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
</div> */}
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "ghostwhite" }}
      >
        <h2>Most Popular Places In The World</h2> <br />
        <div className="row text-center">
          <div className="col-sm-4">
            <div className="thumbnail">
              <img
                src="https://www.travelandleisure.com/thmb/Qa7_o8_XVpIVH5vqq7i73UlTSkU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"
                style={{ width: "200px", height: "200px",borderRadius:"50%" }}
                alt="Paris"
              />
              <p>
                <strong>Eiffel Tower</strong>
              </p>
              <p>Paris,France</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1280px-New_york_times_square-terabass.jpg"
                style={{ width: "200px", height: "200px",borderRadius:"50%" }}
                alt="New York"
              />
              <p>
                <strong>Times Square</strong>
              </p>
              <p>New York,Usa</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <img
                src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_479585620_20191024174904_20200407155734.jpg"
                style={{ width: "200px", height: "200px" ,borderRadius:"50%"}}
                alt="San Francisco"
              />
              <p>
                <strong>Golden Temple</strong>
              </p>
              <p>Amritsar,India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
