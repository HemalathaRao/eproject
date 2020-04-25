import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import logo from "../images/logo.png"
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <footer id="footer" class="footer-distributed">
            {/* <div id='row'> */}
            {/* <div id='column'> */}

<div class="footer-left">

    <img className="image" src={logo}/>

    <p class="footer-links">
        <Link to="/" class="link-1">Home</Link>
        
        {/* <Link to='/blog'>Blog</Link> */}
    
        <Link to='/events'>Events</Link>
    
        <Link to='/about'>About</Link>
        
        <Link to='/help'>Help</Link>
        
        {/* <a href="#">Faq</a> */}
        
        <Link to='/contact'>Contact</Link>
    </p>

    <p class="footer-company-name">EventZone © 2020</p>
</div>
{/* // </div> */}
{/* <div id='column'> */}
<div class="footer-center">

    <div>
    <MdLocationOn className="nav-icon"></MdLocationOn>
        <p><span>444 K-Tech Building</span> Bijai Road, Mangalore</p>
    </div>
        <br></br>
    <div>
    <FaPhone className="nav-icon"></FaPhone>
        <p>+91 9844750227</p>
    </div>
    <br></br>
    <div>
    <MdEmail className="nav-icon"></MdEmail>
        <p><a href="mailto:support@company.com">work@event.com</a></p>
    </div>

</div>
{/* // </div> */}
{/* <div id='column'> */}
<div class="footer-right">

    <p class="footer-company-about">
        <span>About the company</span>
         EventZone is the one of the IT company where it provide the service to the customer based on designing the website.
    </p>

    <div class="footer-icons">

        {/* <a href="#"><i class="fa-facebook-square"></i></a> */}
        <a href='https://www.facebook.com/'><FaFacebookSquare className="nav-icon"></FaFacebookSquare></a>
        <a href='https://twitter.com/explore'><FaTwitterSquare className="nav-icon"></FaTwitterSquare></a>
        <a href='https://www.linkedin.com/'><FaLinkedin className="nav-icon"></FaLinkedin></a>
        <a href='https://github.com/'><FaGithub className="nav-icon"></FaGithub></a>
        
                </div>
                </div>
                {/* </div> */}
                {/* </div> */}

                </footer>
        </>
    )
}
