import React,{useState,useEffect} from 'react'
import {useNavigate,Link } from 'react-router-dom'
import '../CSS/login.css'
import img from "./loginbg.jpg"
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
<section className="text-center text-lg-start" style={{backgroundImage: `url(${img})`,backgroundRepeat:"no-repeat",width:"100%",backgroundSize:"cover",height:"90vh"}}>
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
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" style={{margin:"10px auto",width:'80%'}}  className=" rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Login