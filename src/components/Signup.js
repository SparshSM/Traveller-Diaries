import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'

const Signup = (props) => {
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
  {/* <div className="container-fluid"  style={{padding:"70px 32px 30px 32px",background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}}>
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-lg-12 col-xl-11 col-sm-12">
        <div className="card mt-3 mb-3" style={{borderRadius: "25px",backgroundColor:"thistle"}}>
          <div className="card-body p-md-5" >
            <div className="row justify-content-center" >
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" >

                <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-3">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={handlesubmit}>

                  <div className="d-flex flex-row align-items-center mb-3">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="name" name='name' required onChange={onChange} className="form-control" />
                      <label className="form-label" htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-3">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="email" name='email' required onChange={onChange} className="form-control" />
                      <label className="form-label" htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-3">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="password" name='password' required minLength={5} onChange={onChange} className="form-control" />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
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
            <h2 className="fw-bold mb-5">Sign up now</h2>
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
   
              <button type="submit" className="btn btn-primary btn-block mb-4">
               Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" style={{paddingTop:"40px",borderTopLeftRadius:"20px !important"}}     className="w-75 rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default Signup