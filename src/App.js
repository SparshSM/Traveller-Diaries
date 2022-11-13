import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Map from './components/Map';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import Alert from "./components/Alert";
import UserProfile from "./components/UserProfile";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import "./App.css"
// import LogsDisplay from './components/LogsDisplay';

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 3500);
}
  return (
   <>
   {/* <Home /> */}
   {/* <Login /> */}
   {/* <LogsDisplay /> */}
   {/* <Map /> */}
   {/* <Footer/> */}
   <Router>
   <Navbar />
   <Alert alert={alert} />
    <Routes>
      <Route path="/" element={<Home showAlert={showAlert}/>}/>
      <Route path="/profile" element={<UserProfile />}/>
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/maps" element={<Map showAlert={showAlert}/>}/>
      <Route path="/login" element={<Login showAlert={showAlert}/>} />
      <Route path="/signup" element={<Signup showAlert={showAlert} />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
    <Footer />
  </Router>
   </>
  );
}

export default App;
