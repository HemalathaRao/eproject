import React, { Component } from 'react'
import { TiArrowMaximiseOutline } from 'react-icons/ti';
import axios from 'axios'

export default class addevent extends Component {
constructor(props){
    super(props)

 this.state={
      title:"",
      description:"",
      category:"",
      rate:"",
      college:""
  }
  this.onChange=this.onChange.bind(this)
}
// componentDidMount(){
//     this.props.getCategory()
// }
  onChange(e){

    this.setState({
        [e.target.name]:e.target.value
    })
}
handleSubmit = async (e) => {
    e.preventDefault();
const bodydata={
    title:this.state.title,
    description:this.state.description,
    category:this.state.category,
    rate:this.state.rate,
    college:this.state.college,
    
}
const data=JSON.stringify(bodydata)
console.log(data)

const config={
    headers:{
        "Content-Type":"Application/json"
    }
}
try {
    const res=await axios.post("http://localhost:3000/api/v1/events",data,config)
    console.log(res.data.data)
    
} catch (error) {
    
}

}
    render() {
        return (
            <div>
            <div className="wrapper1">
			<div className="form-wrapper">
			  <h1>Create Event</h1>
			  <form onSubmit={this.handleSubmit} noValidate>
				<div className="firstName">
				  <label htmlFor="firstName">Event Name</label>
				  <input
					className="lable"
					// {formErrors.eventName.length > 0 ? "error" : null}
					placeholder="Event Name"
					type="text"
					name="title"
					// noValidate
                    value={this.state.title}
					onChange={this.onChange}
				  />
                     <div className="password">
				  <label htmlFor="password">Description</label>
				  <textarea
					className="lael"
					
					placeholder="Description"
					type="text"
					name="description"
                    value={this.state.description}
					onChange={this.onChange}
				  />
				
				</div>
				  {/* {formErrors.eventName.length > 0 && (
					<span className="errorMessage">{formErrors.eventName}</span>
				  )} */}
				</div>
				<div className="lastName">
				  <label htmlFor="lastName">Category</label>
				  
                  <select  className="label"
				//   {formErrors.eventType.length > 0 ? "error" : null}
					placeholder="eventType"
                    name='category'
                    value={this.state.category}
                    onChange={this.onChange}
                    >
                   
            <option value="Workshop">Workshop</option>
            <option value="Fest">Fest</option>
            <option value="MedicalCamp">Medical Camp</option>
            <option value="Conference">Conference</option>
            <option value="PoolCampus">Pool Campus</option>
          </select>
                
				  {/* {formErrors.eventType.length > 0 && (
					<span className="errorMessage">{formErrors.eventType}</span>
				  )} */}
				</div>

                <div className="password">
				  <label htmlFor="password">Amount</label>
				  <input
					className="label"
				 
					placeholder="Amount"
					type="number"
					name="rate"
                    value={this.state.rate}
				
					onChange={this.onChange}
				  />
				  
				</div>



				{/* <div className="email" >
				  <label htmlFor="email" >Event Date</label>
                  <div id='row'>
                  <div id='column'>
				  <input
					className="label"
					
					placeholder="Startdate"
					type="date"
					name="startDate"
					noValidate
					onChange={this.onChange}
				  />
				 
                  </div>
                  <div id='column'>
				  <input
					className="label"
				
					placeholder="Enddate"
					type="date"
					name="endDate"
					noValidate
					onChange={this.onChange}
				  />
				 
                  </div>
				</div>
                </div> */}
				<div className="password">
				  <label htmlFor="password">College Name</label>
				  <input
					className="label"
					
					placeholder="College Name"
					type="text"
					name="college"
					value={this.state.college}
					onChange={this.onChange}
				  />
				  
				</div>
                
             
				<div className="createAccount">
				  <button className='btn' >add</button>
				  
				</div>
			  </form>
			</div>
		  </div>
                
            </div>
        )
    }
}
