import React from 'react'
import EvetFilter from "./EventFilter"
import EventList from "./EventList"
import {EventConsumer} from "../context"
import Loading from "./loading"
export default function EventContainer() {
    return (
        <EventConsumer>
            {(value)=>{
                const {loading,sortedevents,events}=value
                if(loading){
                    return <Loading/>;
                }
                return(
                    <div>
            
            <EvetFilter events={events}/>
            <EventList events={sortedevents}/>

            
        </div>
                )
            }}
        </EventConsumer>
       
    )
}
