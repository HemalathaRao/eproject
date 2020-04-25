import React from 'react'
import {useContext} from "react"
import {EventContext} from "../context"
import Title from "../components/Title"
//get all uniq value
const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function EventFilter({events}) {
    const context = useContext(EventContext)
    // console.log(context)
    const{
        handlechange,type,capacity,price,minprice,maxprice,college
    }=context
    // get unique types
    let types=getUnique(events,'type')
    // add all
    types=['all',...types]
    //map to jsx
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })



    // // get unique college
    let colleges=getUnique(events,'college')
    // add all
    colleges=['all',...colleges]
    //map to jsx
    colleges=colleges.map((items,index)=>{
        return <option value={items} key={index}>{items}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search events"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">event type</label>
                    <select name="type" id="type" value={type}
                    className="form-control" onChange={handlechange}>
                       {types}
                    </select>
                </div>
                {/* end of select type */}


                {/* select college */}
                <div className="form-group">
                    <label htmlFor="college">College</label>
                    <select name="college" id="college" value={college}
                    className="form-control" onChange={handlechange}>
                       {colleges}
                    </select>
                </div>

                {/* end of select college */}


                {/* event price */}
                <div className="form-group">
                    <label htmlFor="price">event Registration Price Rs.{price}
                    </label>
                    <input type="range" name="price" 
                    min={minprice} max={maxprice} id="price" value={price} onChange={handlechange}
                    className="form-control">

                    </input>
                </div>

                {/* end event price */}
            </form>
        </section>
    )
}
