import React,{useState,useEffect} from 'react'
import {useNavigate,Link } from 'react-router-dom'
  import img from "./loginbg.jpg"

const Signup = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
      alert("Already Logged in!")
    }
  });
    let navigate = useNavigate (); 
    const [creds, setCreds] = useState({name:"",email:"",password:""})
    const handlesubmit = async (e)=>{
        e.preventDefault();
        const {name,email,password} = creds;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name ,email,password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            //save authtoken and redirect
            localStorage.setItem('token',json.authtoken);
            localStorage.setItem('userdata',creds.email);
            navigate("/maps")
            props.showAlert("Account Created Successfully","success")
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
  <section className="text-center text-lg-start"style={{backgroundImage: `url(${img})`,backgroundRepeat:"no-repeat",width:"100%",backgroundSize:"cover",height:"90vh"}}>
  <div className="container py-4">
    <div className="row g-0 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card cascading-right" style={{
            background:" hsla(0, 0%, 100%, 0.55)",
            backdropFilter:" blur(30px)"}}>
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5" style={{fontFamily:"Courier New"}}>Sign up</h2>
            <form onSubmit={handlesubmit}>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="form-outline">
                  <input type="text" id="name" name='name' required onChange={onChange} className="form-control" />
                      <label className="form-label" htmlFor="name">Your Name</label>
                  </div>
                </div>
              </div>

   
              <div className="form-outline mb-4">
              <input type="email" id="email" name='email' required onChange={onChange} className="form-control" />
                      <label className="form-label" htmlFor="email">Your Email</label>
              </div>

     
              <div className="form-outline mb-4">
              <input type="password" id="password" name='password' required minLength={5} onChange={onChange} className="form-control" />
                      <label className="form-label" htmlFor="password">Password</label>
              </div>
   
              <button type="submit" className="loginClass mb-3">
               Signup
              </button>
              <p>Already an user? <Link style={{color:"white"}} className="mx-1" to="/login" role="button">Login!</Link></p>
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" style={{margin:"10px auto",width:'90%'}}  className=" rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default Signup