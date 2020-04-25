import React, {Component} from 'react'
import logo from "../images/logo.png";
// import { render } from '@testing-library/react'
// import {Link} from 'react-router-dom' 

 class Forgot extends Component {
    render(){
    return (
		<div className="defaultHero">
        <div className="container is-login" id="mainContainer">
        <div className="card card--login shadow-2dp is-active" id="logInFormForm">
		<div className="card__content">
			<center><img src={logo} alt="" /></center>
			<div className="inputfield">
				<input className="inputfield__input" type="email"/>
				<label className="inputfield__label">Email</label>
				<span className="inputfield__underline"></span>
			</div>
		</div>
		<div className="card__action">
			<button className="btn btn--flat btn--primary" type="button">
				Reset password
			</button>
			<button className="btn btn--flat" data-toggle="form" data-target="logInForm" data-type="login" type="button">
				Cancel
			</button>
		</div>
	</div>
    </div>
</div>
    )
    }
}
export default Forgot