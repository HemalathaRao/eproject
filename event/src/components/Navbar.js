import React, { Component } from 'react'
import logo from "../images/logo.png"
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {FaLock} from 'react-icons/fa'
import {FaRegUser} from 'react-icons/fa'
import {MdHelp} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {FaHome} from 'react-icons/fa'
import {TiSupport} from 'react-icons/ti'
import {MdArrowDropDown} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
import Sidenav from "./Sidenav"
import {AiOutlineUser} from 'react-icons/ai'

// import DropdownButton from 'react-bootstrap/DropdownButton'
export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <>
             <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img className="logo" src={logo} alt="event"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"></FaAlignRight>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li><Link  to="/">Home</Link></li>
                        <div class="topnav-right">
                        <li><Link  to="/events">Events</Link></li>
                        
                        </div>
                        </ul>
                         {/* <li><Link to="/login">Login</Link> */}
                        {/* </li>  */}
                        {/* <div class="topnav-right"> */}
                        <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                         <li class="dropdown">
                            <a href="javascript:void(0)" class="dropbtn">
                            <AiOutlineUser className="nav-icon"></AiOutlineUser> Login</a>
                            <div class="dropdown-content">
                                <Link to="/login">User</Link>
                                <Link to="/login">Admin</Link> 

                                {/* <a href="#">Link 3</a> */}

                              </div>
                        </li>
                            {/* </div> */}
                        {/* <li><Link to="/contact">Contact</Link></li> */}
                        {/* <li><Link to="/myaccount" className="account"><FaRegUser className="nav-icon"></FaRegUser> My account</Link></li> */}
                        {/* <li><Link to="#"><MdHelp className="nav-icon"></MdHelp> Help</Link></li> */}
                        {/* <div class="topnav-right">
                        <li><Link to="/login"><FiLogOut className="nav-icon"></FiLogOut> Logout</Link></li> </div> */}
                        
                        
                        {/* <li ><span classname="align"> <FaLock className="nav-icon"></FaLock> </span></li> */}
                        <li style={{float:'right'}}>
                        <div className="nav-profile-img" >
                    <img 
                    src="https://www.shareicon.net/data/2016/08/18/813864_people_512x512.png"
                    alt=""
                    width="35px"
                  />
                  <span className="availability-status online"></span>
                  {/* <div className="nav-profile-text" >
                  <p >john</p>
                  </div> */}
                </div>
               
                  </li>
                  <li style={{float:'right'}}>
                  <div class='dropdown'>
                  <a href="javascript:void(0)" class="dropbtn">
                             John</a>
                            <div class="dropdown-content">
                                {/* <Link to="">activity</Link> */}
                              
                                <Link to="/login">Logout</Link> 
                                </div>
                                </div>
                </li>
              
              {/* <div className="dropdown-menu " aria-labelledby="profileDropdown">
                <a className="dropdown-item" href="#">
                  <MdArrowDropDown className='nav-icon'>Activity
                  Log{" "}</MdArrowDropDown> 
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-logout mr-2 text-primary"></i> Signout{" "}
                </a>
              </div></li> */}
              {/* </li> */}

                     </ul>
                </div>
                </nav> 
                <Sidenav></Sidenav>
                {/* <div>
            <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" 
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <i class="fa fa-align-right"></i>
        </button>
        <a class="navbar-brand" href="#">Dashboard</a>
      </div>
      <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li>
              <li><a href="#"><i class="fa fa-user-o fw"></i> My account</a></li>
            <li><a href="#"><i class="fa fa-envelope-o fw"></i> My inbox</a></li>
            <li><a href="#"><i class="fa fa-question-circle-o fw"></i> Help</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#"><i class="fa fa-sign-out"></i> Log out</a></li>
          </li>
          <li><a href="#"><i data-show="show-side-navigation1" class="fa fa-bars show-side-btn"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
        </div> */}
              
            
            </>
        )
    }
}
