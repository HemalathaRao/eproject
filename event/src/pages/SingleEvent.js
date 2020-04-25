import React, { Component } from 'react'
import defaultBcg1 from "../images/ourevent.jpg"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import {EventContext} from '../context'
import StyledHero from "../components/StyledHero"
export default class SingleEvent extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            slug:this.props.match.params.slug,defaultBcg1
        }
    }
    static contextType=EventContext;
    render() {
        // destructuring
        const {getEvent}=this.context
        // get the slug 
        const event= getEvent(this.state.slug)
        // console.log(event)
        // when you pass eventname in router which is not der then error page will displays
        if(!event){
            return <div className="error">
                <h3>
                    No such events found
                </h3>
                <Link to="/events" className="btn-primary">
                    Back
                </Link>
            </div>
        }
        const {name,description,price,images}=event
        return (
            // <div>
            //     single event{event.name}
            // </div>
            <>
            <StyledHero img={images[0] || this.state.defaultBcg1}>
                <Banner title={`${name} Event`}>
                    <Link to="/events" className="btn-primary">
                        Back to Events
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-event">
                <div className="single-event-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Registratio Fee:Rs.{price}</h6>
                    </article>
                </div> 
                <div>
                    <Link to="/payment" className="btn-reg">Register</Link>
                </div>   
                
            </section>
            
            </>
        )
    }
}
