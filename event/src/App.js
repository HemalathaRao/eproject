import React from 'react';

import './App.css';
import {Switch,Route} from "react-router-dom";

import Home from "./pages/Home"
import Events from "./pages/Events"
import SingleEvent from "./pages/SingleEvent"
import Error from "./pages/Error"
import Navbar from './components/Navbar'
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Forgot from "./pages/Forgot"
import Footer from './components/Footer';
import Contact from "./pages/Contact"
import Sidenav from "./components/Sidenav"
import About from "./pages/about"
import Payment from './pages/Payment'
import Createevent from './pages/addevent'
import Eventcategory from './pages/Eventcategory';
import Eventimg from './pages/Eventimg'
import Admindash from './pages/admindash'
import Userdetail from './pages/adminbody'
function App() {
  return (
    <>
   
   {/* <Sidenav/> */}
   <Navbar/>
   
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/events" component={Events}/>
      <Route exact path="/events/:slug" component={SingleEvent}/>
      <Route exact path="/login/" component={Login}/>
      <Route exact path="/signup/" component={Signup}/>
      <Route exact path="/contact/" component={Contact}/>
      <Route exact path="/forgot/" component={Forgot}/>
      {/* <Route exact path="/myaccount/" component={Sidenav}/> */}

      <Route exact path="/about/" component={About}/>
      <Route exact path="/payment/" component={Payment}/>
      <Route exact path="/createevent/" component={Createevent}/>

      <Route exact path="/uploadimg/" component={Eventimg}/>
      <Route exact path="/admin/" component={Admindash}/>
      <Route exact path="/userdetail/" component={Userdetail}/>
      <Route component={Error}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
