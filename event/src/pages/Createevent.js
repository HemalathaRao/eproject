// import React from 'react'
import {Link} from 'react-router-dom'
// import logo from "../images/logo.png";
// import {AiOutlineMail} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
// import {FaKey} from 'react-icons/fa'
// import {FaUnlock} from 'react-icons/fa'
// export default function Createevent() {
//     return (
//         <div className="defaultHero">
//               {/* <div class="modal" id="cake">
//    <div class="modal-dialog">
//     <div class="modal-content"> */}
    
//       {/* <!-- Modal Header --> */}
//       {/* <div class="modal-header">
//         <h4 class="modal-title">Cakes</h4>
//         <button type="button" class="close" data-dismiss="modal">&times;</button>
//       </div> */}
      
//       {/* <!-- Modal body --> */}
//       {/* <div class="modal-body">
//        <div class="centered">
//           <img src="img/truffle.jpg" id="one"></img>
//        </div>
//        <div class="split right">
//          <div class="centered">
//             <h2><b> CAKES</b></h2>
//                <p>Rs : 400/kg</p><p><b id="desc">Descriptions:</b><br></br>
//                 <b>Product Details:</b><br></br>
//                   <b>Cake Flavour-</b> Truffle<br></br>
//                         <b>Shape- </b>Round<br></br>
//                       <b>Serves- </b>4-6 People<br></br>
//                     <b>Size- </b>6 inches in Diameter<br></br>
//                     <b id="note">Please Note:</b>

//                       The cake stand, cutlery & accessories used in the image are only for representation purposes. They are not delivered with the cake.
//                         This cake is hand delivered in a good quality cardboard box.
//                 <br></br>
//                     <b>AVAILABILITY:</b><br></br> In stock
//                 <br></br>
//                     <button id="cart" >Add to Cart   <i class="fa fa-shopping-cart" id="shopping"></i>    
//                   </button><br></br>
//             </p>
//         </div>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//         </div> */}



// {/* <a href='#mymodel' id="myBtn">Create Event</a> */}
// <div className='card card-createevent is-active shadow-2dp'>
// <div id="content">
// {/* <div className="container"> */}
//         {/* <h2>Create Your Event</h2> */}
// {/* // </div> */}
// <div className="container">
// <form className="form" >
// 			<div className="card__content">
// 				<center><img className="image" src={logo} alt="logo"></img></center>
				
// 				<div className="inputfield">
				
// 					<input className="inputfield__input" type="text"></input>
// 					<label className="inputfield__label"> Event Name <i className="required">*</i></label>
// 					<span className="inputfield__underline"></span>
// 				</div>
//                 <div id="row">
//                 {/* <div className="field-container"> */}
// 				<div className="inputfield" id="column">
// 					<input className="inputfield__input" type="date"  ></input>
// 					<label className="inputfield__label">Event Start date <i className="required">*</i></label>
// 					<span className="inputfield__underline"></span>
// 				</div>
//                 {/* <div className="field-container"> */}
//                 <div className="inputfield" id="column">
// 					<input className="inputfield__input" type="date"></input>
// 					<label className="inputfield__label">Event End date <i className="required">*</i></label>
// 					<span className="inputfield__underline"></span>
// 				</div></div>
// 				<div class="inputfield">
// 					<input class="inputfield__input" type="text"></input>
// 					<label class="inputfield__label"> Colleege/Organization Name <i className="required">*</i></label>
// 					<span class="inputfield__underline"></span>
// 				</div>
// 				<div className="inputfield">
// 					<textarea className="inputfield__input" type="text"></textarea>
// 					<label className="inputfield__label"> Address <i className="required">*</i></label>
// 					<span className="inputfield__underline"></span>
// 				</div>
//                 <div className="inputfield">
// 					<textarea className="inputfield__input" type="text"></textarea>
// 					<label className="inputfield__label"> Description <i className="required">*</i></label>
// 					<span className="inputfield__underline"></span>
// 				</div>
// 			</div>
// 			<div className="card__action">
// 				<Link to="/eventcategory" className="btn btn--primary btn-block" type="button">
// 					Next
// 				</Link>
// 			</div></form>
// </div>
// </div>


//             </div>
//         </div>
//     )
// }

import React, { Component } from 'react'
const emailRegex = RegExp(
	/^[0-9]+[0-9]+[0-9]*$/
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
		  eventName: null,
		  eventType: null,
          startDate: null,
          endDate: null,
          collegName: null,
          amount: null,
          description: null,
		  formErrors: {
			eventName: "",
			eventType: "",
            startDate: "",
            endDate: "",
            collegeName: "",
            amount: "",
            description: ""
		  }
		};
	  }
	
	  handleSubmit = e => {
		e.preventDefault();
	
		if (formValid(this.state)) {
		  console.log(`
			--SUBMITTING--
			Event Name: ${this.state.eventName}
			Event Type: ${this.state.eventType}
            Start Date: ${this.state.startDate}
            End Date: ${this.state.endDate}
            College Name: ${this.state.collegeName}
            Amount: ${this.state.amount}
            Description: ${this.state.description}
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
		  case "eventName":
			formErrors.firstName =
			  value.length < 3 ? "minimum 3 characaters required" : "";
			break;
		  case "eventType":
			formErrors.eventType =
			  value.length < 3 ? "minimum 3 characaters required" : "";
			break;
		  case "startDate":
			formErrors.startDate = emailRegex.test(value)
			  ? ""
			  : "invalid date";
            break;
            case "endDate":
			formErrors.endDate = emailRegex.test(value)
			  ? ""
			  : "invalid date";
			break;
		  case "collegeName":
			formErrors.collegeName =
            value.length < 3 ? "minimum 3 characaters required" : "";
            break;
        case "amount":
                formErrors.amount =
                value.length < 0 ? "minimum 1 characaters required" : "";
                break;
          case "description":
                formErrors.description =
                value.length < 20 ? "minimum 20 characaters required" : "";
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
			  <h1>Create Event</h1>
			  <form onSubmit={this.handleSubmit} noValidate>
				<div className="firstName">
				  <label htmlFor="firstName">Event Name</label>
				  <input
					className={formErrors.eventName.length > 0 ? "error" : null}
					placeholder="Event Name"
					type="text"
					name="eventName"
					noValidate
					onChange={this.handleChange}
				  />
				  {formErrors.eventName.length > 0 && (
					<span className="errorMessage">{formErrors.eventName}</span>
				  )}
				</div>
				<div className="lastName">
				  <label htmlFor="lastName">Event Type</label>
				  
                  <select  className={formErrors.eventType.length > 0 ? "error" : null}
					placeholder="eventType"
                    name='eventType'
                    >
                   
            <option value="Workshop">Workshop</option>
            <option value="Fest">Fest</option>
            <option value="MedicalCamp">Medical Camp</option>
            <option value="Conference">Conference</option>
            <option value="PoolCampus">Pool Campus</option>
          </select>
                
				  {formErrors.eventType.length > 0 && (
					<span className="errorMessage">{formErrors.eventType}</span>
				  )}
				</div>
				<div className="email" >
				  <label htmlFor="email" >Event Date</label>
                  <div id='row'>
                  <div id='column'>
				  <input
					className={formErrors.startDate.length > 0 ? "error" : null}
					placeholder="Startdate"
					type="date"
					name="startDate"
					noValidate
					onChange={this.handleChange}
				  />
				  {formErrors.startDate.length > 0 && (
					<span className="errorMessage">{formErrors.startDate}</span>
				  )}
                  </div>
                  <div id='column'>
				  <input
					className={formErrors.endDate.length > 0 ? "error" : null}
					placeholder="Enddate"
					type="date"
					name="endDate"
					noValidate
					onChange={this.handleChange}
				  />
				  {formErrors.endDate.length > 0 && (
					<span className="errorMessage">{formErrors.endDate}</span>
				  )}
                  </div>
				</div>
                </div>
				<div className="password">
				  <label htmlFor="password">College Name</label>
				  <input
					className={formErrors.collegeName.length > 0 ? "error" : null}
					placeholder="College Name"
					type="text"
					name="collegeName"
					noValidate
					onChange={this.handleChange}
				  />
				  {formErrors.collegeName.length > 0 && (
					<span className="errorMessage">{formErrors.collegeName}</span>
				  )}
				</div>
                <div className="password">
				  <label htmlFor="password">Amount</label>
				  <input
					className={formErrors.amount.length > 0 ? "error" : null}
					placeholder="Amount"
					type="number"
					name="amount"
					noValidate
					onChange={this.handleChange}
				  />
				  {formErrors.amount.length > 0 && (
					<span className="errorMessage">{formErrors.amount}</span>
				  )}
				</div>
                <div className="password">
				  <label htmlFor="password">Description</label>
				  <textarea
					className={formErrors.description.length > 0 ? "error" : null}
					placeholder="Description"
					type="text"
					name="description"
					noValidate
					onChange={this.handleChange}
				  />
				  {formErrors.description.length > 0 && (
					<span className="errorMessage">{formErrors.description}</span>
				  )}
				</div>
				<div className="createAccount">
				  <Link to='/uploadimg' className='btn' >Next</Link>
				  
				</div>
			  </form>
			</div>
		  </div>
		)
	}
}


