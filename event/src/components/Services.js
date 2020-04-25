import React, { Component } from 'react'
import Title from './Title'
import {FaTicketAlt,FaRegIdBadge,FaSearch,FaSearchLocation} from 'react-icons/fa'
export default class Services extends Component {
    state={
        Services:[{
            icon:<FaTicketAlt/>,
            title:"Book Ticket",
            info:" Book your ticket easy as ABC"
        },
        {
            icon:<FaRegIdBadge/>,
            title:"Paperless Registration",
            info:" Register easily for a event"
        },
        {
            icon:<FaSearch/>,
            title:"Search Events ",
            info:"Search the events happening in the college"
        },
        {
            icon:<FaSearchLocation/>,
            title:"Find Location",
            info:"Find the location where events happening"
        },

        ]
    }
    render() {
        return (
           <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.Services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
