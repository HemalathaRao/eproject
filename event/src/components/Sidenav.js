import React from 'react'
import {FaHome} from 'react-icons/fa'
import {TiSupport} from 'react-icons/ti'
import {MdEmail} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import About from '../pages/about'
import Profile from '../images/medicalcamp1.png'
// import {Link} from 'react-router-dom'
// import {FaBolt} from 'react-icons/fa'
// export default function sidenav() {
//     return (
// //         <div className="defaultHero">
// //             <About/>
// //             <aside class="side-nav" id="show-side-navigation1">
// //                 <i class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" 
// //                 data-close="show-side-navigation1"></i>
// //                 <div class="heading" >
// //                     <img src="assets/img/Pic.png" alt="userprofile"/>
// //                     <div class="info">
// //                         <h3><a href="#">Hema</a></h3>
// //                         <p>User Profile</p>
// //                     </div>
// //                 </div>
// //                 {/* <div class="search" >
// //                     <input type="text" placeholder="Type here"><i class="fa fa-search"></i></input>
// //                 </div>
// //    */}
// //                 <ul class="categories">
// //                      {/* <p>Example:</p> */}
    
// //                         <li><FaHome className="nav-icon" ></FaHome><Link to="/about"> About us</Link>
                            
// //                         </li>
// //                         <li><FaShoppingCart className="nav-icon" aria-hidden="true"></FaShoppingCart><Link to="/"> Cart</Link>
// //                         </li>
// //                         <li><TiSupport className="nav-icon" aria-hidden="true"></TiSupport><a href="#"> Subscribe us</a>
                           
// //                         </li>
// //                         <li><MdEmail className="nav-icon" aria-hidden="true"></MdEmail><a href="#"> Contact us</a>
                                
// //                         </li>
                        
                             
// //                         {/* <li><FaBolt className="nav-icon" aria-hidden="true"></FaBolt><a href="#"> Testimonials</a> */}
// //                             {/* <br> </br> */}
// //                             {/* <ul>
// //                                 <li><a href="#" >1</a></li>
// //                                 <li><a href="#" >2</a></li>
// //                                 <li><a href="#" >3</a></li>
// //                                 <li><a href="#" >4</a></li>
// //                                 <li><a href="#" >5</a></li>
// //                             </ul> */}
// //                         {/* </li> */}
// //                     </ul>
// //                 </aside>
// //         </div>


//                 // <>
//                 // <div className="container">
//                 //         {/* <header>Profile</header> */}
//                 //         </div>
//                 // <div className="defaultHero">
//                 //     <About/>
//                 //     <div className="sidebar">
//                 //     <div >
//                 //     <div>
//                 //         <header>profile</header></div></div>
//                 //         <div class="heading" >
//                 //              <img  className="profimg" src={Profile} alt="userpic"/>
//                 //      <div class="info">
//                 //          <h3><a href="#">Hema</a></h3>
//                 //          <button>Edit Profile</button>
//                 //     </div>
//                 // </div>
//                 //         <ul>
//                 //             <li><Link to="#"> 
//                 //                 <FaHome className="nav-icon"></FaHome> About Us</Link>
//                 //             </li>
//                 //             <li><Link to="#"> 
//                 //                 <FaShoppingCart className="nav-icon"></FaShoppingCart> Cart</Link>
//                 //             </li>
//                 //             <li><Link to="#"> 
//                 //                 <TiSupport className="nav-icon"></TiSupport> Subscribe</Link>
//                 //             </li>
//                 //             <li><Link to="#"> 
//                 //                 <MdEmail className="nav-icon"></MdEmail> Contact</Link>
//                 //             </li>
                             
//                 //         </ul>
//                 //     </div>
//                 // </div>
//                 // </>
//                <div>
//             <aside class="side-nav" id="show-side-navigation1">
//                 <i class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" 
//                 data-close="show-side-navigation1"></i>
//                 <div class="heading" >
//                     <img src="assets/img/Gau-Pic.png" alt=""/>
//                     <div class="info">
//                         <h3><a href="#">Gaurav</a></h3>
//                         <p>User Profile</p>
//                     </div>
//                 </div>
//                 {/* <div class="search" >
//                     <input type="text" placeholder="Type here"><i class="fa fa-search"></i></input>
//                 </div>
//    */}
//                 <ul class="categories">
//                      <p>Example:</p>
    
//                         <li><i class="fa fa-home fa-fw" aria-hidden="true"></i><a href="#"> About us</a>
//                             {/* <br> </br>
//                             <ul >
//                                  <li><a href="#" >1</a></li>
//                                 <li><a href="#" >2</a></li>
//                                 <li><a href="#" >3</a></li>
//                                 <li><a href="#" >4</a></li>
//                                 <li><a href="#" >5</a></li>
//                             </ul> */}
//                         </li>
//                         <li><i class="fa fa-support fa-fw"></i><a href="#"> Subscribe us</a>
//                             {/* <br> </br>
//                             <ul>
//                                 <li><a href="#" >1</a></li>
//                                 <li><a href="#" >2</a></li>
//                                 <li><a href="#" >3</a></li>
//                                 <li><a href="#" >4</a></li>
//                                 <li><a href="#" >5</a></li>
//                             </ul> */}
//                         </li>
//                         <li><i class="fa fa-envelope fa-fw"></i><a href="#"> Contact us</a>
//                                 {/* <br></br> 
//                             <ul >
//                                 <li><a href="#" >1</a></li>
//                                 <li><a href="#">2</a></li>
//                                 <li><a href="#" >3</a></li>
//                                 <li><a href="#" >4</a></li>
//                                 <li><a href="#" >5</a></li>
//                             </ul> */}
//                         </li>
//                         <li><i class="fa fa-users fa-fw"></i><a href="#"> Our team</a>
//                              {/* <br></br> 
//                             <ul >
//                                 <li><a href="#" >1</a></li>
//                                 <li><a href="#" >2</a></li>
//                                 <li><a href="#" >3</a></li>
//                                 <li><a href="#" >4</a></li>
//                                 <li><a href="#" >5</a></li>
//                             </ul> */}
//                         </li>
//                         <li><i class="fa fa-bolt fa-fw"></i><a href="#"> Testimonials</a>
//                             {/* <br> </br> */}
//                             {/* <ul>
//                                 <li><a href="#" >1</a></li>
//                                 <li><a href="#" >2</a></li>
//                                 <li><a href="#" >3</a></li>
//                                 <li><a href="#" >4</a></li>
//                                 <li><a href="#" >5</a></li>
//                             </ul> */}
//                         </li>
//                     </ul>
//                 </aside>
//         </div>
//     )

// }


// import React from 'react'

export default function Sidenav() {
    return (
        <>
       
            <div id="mySidenav" class="sidenav">
                <Link to='/about' id="about">About</Link>
                <Link to='/help' id="blog">Help</Link>
                <Link to='/contact' id="projects">Contact</Link>
                {/* <Link to='/contact' id="contact">Contact</Link> */}
            </div>
        
        </>
    )
}
