import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
    render() {
        return (
          <div className="defaultHero">
            <div className="card  card--register is-active shadow-2dp" id="contactform">
            <h1><center>Contact Us</center></h1>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="card__content">
            <div className="inputfield">
                
                <input type="text"  className="inputfield__input" value={this.state.name} 
                onChange={this.onNameChange.bind(this)} />
                <label className="inputfield__label" htmlFor="name">Name</label>
          </div>
        <div className="inputfield">
        
        <input type="email"  className="inputfield__input" aria-describedby="emailHelp" value={this.state.email} 
        onChange={this.onEmailChange.bind(this)} />
        <label className="inputfield__label" htmlFor="exampleInputEmail1">Email address</label>
    </div>
    <div className="inputfield">
        
        <textarea  className="inputfield__input" rows="5" value={this.state.message} 
        onChange={this.onMessageChange.bind(this)} />
        <label className="inputfield__label" htmlFor="message">Message</label>
    </div>
    </div>
    <button type="submit" className="btn btn--primary btn--block" >Submit</button>
    </form>
    </div>
    </div>
        )
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
    handleSubmit(event) {
        event.preventDefault();
  console.log(this.state);
    }
    
}
