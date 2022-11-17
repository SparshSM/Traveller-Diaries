import React,{useState,useEffect} from 'react'
import {useNavigate,Link } from 'react-router-dom'
import '../CSS/login.css'
const Login = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      alert("Already Logged in!")
      navigate("/");
    }
  });
    let navigate = useNavigate (); 
    const [creds, setCreds] = useState({email:"",pass:""})
    const handlesubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:creds.email,password:creds.pass})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            //save authtoken and redirect
            localStorage.setItem('token',json.authtoken);
            localStorage.setItem('userdata',creds.email);
            navigate("/maps")
            props.showAlert("Logged in Successfully","success")
        }
          else{
            props.showAlert("Invalid Credentials","danger")
          }
    }
    const onChange=(e)=>{
        setCreds({...creds,[e.target.name]:e.target.value}) 
       }
  return (
    <>
  {/* <div className="container-fluid" style={{padding:"70px 32px 30px 32px",background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}}>
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black mt-4" style={{borderRadius: "25px",backgroundColor:"thistle"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">LOGIN</p>

                <form className="mx-1 mx-md-4" onSubmit={handlesubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" value={creds.email} onChange={onChange} id="email" name='email' />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label htmlFor="pass" className="form-label">Password</label>
    <input type="password" className="form-control" value={creds.pass} onChange={onChange} id="pass" name='pass' />
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn btn-primary">Login</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Signup" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
<section className="text-center text-lg-start" style={{background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}}>
  <div className="container py-4">
    <div className="row g-0 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card cascading-right" style={{
            background:" hsla(0, 0%, 100%, 0.55)",
            backdropFilter:" blur(30px)"}}>
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5" style={{fontFamily:"Courier New"}}>Login</h2>
            <form onSubmit={handlesubmit}>
              <div className="form-outline mb-4">
    <input type="email" className="form-control" value={creds.email} onChange={onChange} id="email" name='email' />
              <label htmlFor="email" className="form-label">Email address</label>
              </div>

     
              <div className="form-outline mb-4">
    <input type="password" className="form-control" value={creds.pass} onChange={onChange} id="pass" name='pass' />
              <label htmlFor="pass" className="form-label">Password</label>
              </div>
   
              <button type="submit" className="loginClass mb-4">Login</button>
              <p>New here? <Link style={{color:"white"}} className="mx-1" to="/signup" role="button">Signup!</Link></p>
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-1 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" style={{margin:"10px auto",width:'70%'}}  className=" rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Login