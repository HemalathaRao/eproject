import React from 'react'
import {Link} from 'react-router-dom'
export default function Eventcategory() {
    return (
        <div className="defaultHero">
       
        <div className='card card-createevent is-active shadow-2dp'>
        <div className='container'><h3>Event Category</h3></div>
        <form className="form">
        <div className="card__content">
           <input type="checkbox" id="cat1" name="cat1" value="Fest"></input>
            <label for="cat1"> Fest </label><br></br><br></br>
            <input type="checkbox" id="cat2" name="cat2" value="Medical Camp"></input>
            <label for="cat2"> Medical Camp</label><br></br><br></br>
            <input type="checkbox" id="cat3" name="cat3" value="Workshop"></input>
            <label for="cat3"> Workshop </label><br></br><br></br>
            <input type="checkbox" id="cat3" name="cat3" value="Conference"></input>
            <label for="cat3"> Conference </label><br></br><br></br>
        </div>
            <div id="row">
            <div className="card__action" id='column'>
				<Link to="/createevent" className="btn btn--primary btn-block" type="button">
					Back
				</Link>
			</div>
            <div className="card__action" id='column'>
				<Link to="/uploadimg" className="btn btn--primary btn-block" type="button">
					Next
				</Link>
			</div>
            </div>
            
            </form>
            </div>
        </div>
    )
}
