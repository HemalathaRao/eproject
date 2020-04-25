import React, { Component } from 'react'
import {EventContext} from '../context'
import Loading from "./loading"
import Event from "./Event"

import Title from "./Title"
export default class FeaturedEvents extends Component {
    // static it is used only in classbased component
    static contextType=EventContext

    render() {
        // const {name,greeting}=this.context
       let {loading , featuredevents:events}=this.context
        // console.log(events)
        events=events.map(event=>{
            return <Event key={event.id} event={event}/>
        })
        return (
            <section className="featured-events">
                <Title title="Featured Events"/>
                <div className="featured-events-center">
                    {loading?<Loading/>:events}
                </div>
                {/* {greeting} {name} from featured room  - getting the data from state*/}
                {/* {greeting} {name} from featured room  */}
                {/* <Events/> */}

              
            </section>
        )
    }
}
