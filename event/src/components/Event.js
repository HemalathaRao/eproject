import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/fest1.jpg'
import PropTypes from "prop-types"
export default function Event({event}) {
    const {name,slug,images,price}=event
    // console.log(event)
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single event"/>
                <div className="price-top">
                    <h6 className='bannerclr'>Rs.{price}</h6>
                </div>
                <Link to={`/events/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>

        </article>
        // <div className="row">
        //     <div className="col-md-4">

        //     </div>
        //     <div className="col-md-4">

        //     </div>
        //    <div className="col-md-4">

        //     </div>      
        // </div>

    )
}
Event.propTypes={
    event:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    }
    )
}