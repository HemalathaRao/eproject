import React from 'react'
import Event from "./Event"

export default function EventList({events}) 
{
    if(events.length===0){
        return(
            <div className="empty-search">
                <h3>Unfortunately no Events matched your search parameters
                </h3>
            </div>
        )
    }

    return (
        <section className="eventslist">
            <div className="eventslist-center">
                {
                    events.map(item =>{
                        return <Event key={item.id} event={item}/>
                    })
                }
            </div>
        </section>
    )
}
