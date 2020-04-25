// import React, { Component } from 'react'
// import logo from "../images/logo.png";
// import {AiOutlineMail} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
// import {FaKey} from 'react-icons/fa'
// import {FaUnlock} from 'react-icons/fa'
// // import Login from "./Login"
import {Link} from 'react-router-dom'
// export default class Registration extends Component {
//     //  onClick(e){
//     //     // console.log("hi")
//     //     <div>{Login}</div>
//     // }

//     render() {
//         return (
// 			<div className="defaultHero">
// 			<div className="card  card--register is-active shadow-2dp" id="registerForm">
//             <form className="form" onSubmit={this.onSubmit}>
// 			<div className="card__content">
// 				<center><img className="image" src={logo} alt="logo"></img></center>
				
// 				<div className="inputfield" id='row'>
// 				<div id='column'>
// 					<input className="inputfield__input" type="email" ></input></div>
// 					<div id='column'>
// 					<label className="inputfield__label"><AiOutlineMail className="nav-icon "></AiOutlineMail> Email <i className="required">*</i></label>
// 					</div>
// 					<span className="inputfield__underline"></span>
// 				</div>
// 				<div className="inputfield">
// 					<input className="inputfield__input" type="text"></input>
// 					<label className="inputfield__label"><AiOutlineUser className="nav-icon "></AiOutlineUser> Username <i className="required">*</i></label>
// 					<span className="inputfield__underline"></span>
// 				</div>
// 				<div class="inputfield">
// 					<input class="inputfield__input" type="password"></input>
// 					<label class="inputfield__label"> <FaKey className="nav-icon "></FaKey>Password <i className="required">*</i></label>
// 					<span class="inputfield__underline"></span>
// 				</div>
// 				<div className="inputfield">
// 					<input className="inputfield__input" type="password"></input>
// 					<label className="inputfield__label"> <FaUnlock className="nav-icon "></FaUnlock> Password Confirm <i className="required">*</i></label>
// 					<span className="inputfield__underline"></span>
// 				</div>
// 			</div>
// 			<div className="card__action">
// 				<button className="btn btn--primary btn--block" type="button">
// 					Create account
// 				</button>
// 			</div>
// 			<div className="card__action">
// 				{/* <button className="btn btn--secondry btn--block" data-toggle="form" data-target="logInForm" data-type="login" type="button" > */}
//                <p className="text-center"data-toggle="form" data-target="logInForm" data-type="login" > 
// 			   <Link to="/login" >Already has an Account</Link> </p> 
// 				{/* </button> */}
// 			</div>
//             </form>
// 			</div>
// 		</div>
// // 		<div className="defaultHero">
// // 		<form className="card card--register is-active" >
// //   <h2>Register Form</h2>
// //   <div class="input-container">
// //     <i class="fa fa-user icon"></i>
// //     <input class="input-field" type="text" placeholder="Username" name="usrnm"></input>
// //   </div>

// //   <div class="input-container">
// //     <i class="fa fa-envelope icon"></i>
// //     <input class="input-field" type="text" placeholder="Email" name="email"></input>
// //   </div>

// //   <div class="input-container">
// //     <i class="fa fa-key icon"></i>
// //     <input class="input-field" type="password" placeholder="Password" name="psw"></input>
// //   </div>

// //   <button type="submit" class="btn">Register</button>
// // </form>
// // 		</div>
		
//         )     
//     }
// }

import React, { Component } from 'react'
const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
	let valid = true;
  
	// validate form errors being empty
	Object.values(formErrors).forEach(val => {
	  val.length > 0 && (valid = false);
	});
  
	// validate the form was filled out
	Object.values(rest).forEach(val => {
	  val === null && (valid = false);
	});
  
	return valid;
  };

export default class Signup extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
		  firstName: null,
		  lastName: null,
		  email: null,
		  password: null,
		  formErrors: {
			firstName: "",
			lastName: "",
			email: "",
			password: ""
		  }
		};
	  }
	
	  handleSubmit = e => {
		e.preventDefault();
	
		if (formValid(this.state)) {
		  console.log(`
			--SUBMITTING--
			First Name: ${this.state.firstName}
			Last Name: ${this.state.lastName}
			Email: ${this.state.email}
			Password: ${this.state.password}
		  `);
		} else {
		  console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
		}
	  };
	
	  handleChange = e => {
		e.preventDefault();
		const { name, value } = e.target;
		let formErrors = { ...this.state.formErrors };
	
		switch (name) {
		  case "firstName":
			formErrors.firstName =
			  value.length < 3 ? "minimum 3 characaters required" : "";
			break;
		  case "lastName":
			formErrors.lastName =
			  value.length < 3 ? "minimum 3 characaters required" : "";
			break;
		  case "email":
			formErrors.email = emailRegex.test(value)
			  ? ""
			  : "invalid email address";
			break;
		  case "password":
			formErrors.password =
			  value.length < 6 ? "minimum 6 characaters required" : "";
			break;
		  default:
			break;
		}
	
		this.setState({ formErrors, [name]: value }, () => console.log(this.state));
	  };
	render() {
		const { formErrors } = this.state;
		return (
			<div className="wrapper1">
			<div className="form-wrapper">
			  <h1>Create Account</h1>
			  <form onSubmit={this.handleSubmit} noValidate>
				<div className="firstName">
				  <label htmlFor="firstName">First Name</label>
				  <input
					className={formErrors.firstName.length > 0 ? "error" : null}
					placeholder="First Name"
					type="text"
					name="firstName"
					noValidate
					onChange={this.handleChange}
				  />
				  {formErrors.firstName.length > 0 && (
					<span className="errorMessage">{formErrors.firstName}</span>
				  )}
				</div>
				<div className="lastName">
				  <label htmlFor="lastName">Last Name</label>
				  <input
					className={formErrors.lastName.length > 0 ? "error" : null}
					placeholder="Last Name"
					type="text"
					name="lastName"
					noValidate
					onChange={this.handleChange}
				  />
				  {formErrors.lastName.length > 0 && (
					<span className="errorMessage">{formErrors.lastName}</span>
				  )}
				</div>
				<div className="email">
				  <label htmlFor="email">Email</label>
				  <input
					className={formErrors.email.length > 0 ? "error" : null}
					placeholder="Email"
					type="email"
					name="email"
					noValidate
					onChange={this.handleChange}
				  />
				  {formErrors.email.length > 0 && (
					<span className="errorMessage">{formErrors.email}</span>
				  )}
				</div>
				<div className="password">
				  <label htmlFor="password">Password</label>
				  <input
					className={formErrors.password.length > 0 ? "error" : null}
					placeholder="Password"
					type="password"
					name="password"
					noValidate
					onChange={this.handleChange}
				  />
				  {formErrors.password.length > 0 && (
					<span className="errorMessage">{formErrors.password}</span>
				  )}
				</div>
				<div className="createAccount">
				  <button type="submit">Create Account</button>
				  <Link to='/login'><small>Already Have an Account?</small></Link>
				</div>
			  </form>
			</div>
		  </div>
		)
	}
}

