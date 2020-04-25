import React, { Component } from 'react'
import items from './data'
//create cotext
const EventContext=React.createContext()
//accept value we use provider   <EventContext.Provider value={'hello}
class EventProvider extends Component {
    state={
        events:[],
        sortedevents:[],
        featuredevents:[],
        loading:true,
        type:"all",
        // capacity:1,
        college:'all',
        price:0,
        minprice:0,
        maxprice:0,
        // college:false,
        // place:false
    }
    //getdata

    componentDidMount(){
        let events=this.formatData(items)
        //console.log(events)
        let featuredevents= events.filter(event=>event.featured===true)
        let maxprice=Math.max(...events.map(item=>item.price))
        this.setState({
            events,
            featuredevents,
            sortedevents:events,
            loading:false,
            price:maxprice,
            maxprice
        })
    }
    formatData(items){
        //loop through items
        let tempitems=items.map(item=>{
            let id=item.sys.id
            let images=item.fields.images.map(image=>
                image.fields.file.url)
                //create new event obj
            let event={...item.fields,images,id}
            return event
        })
        return tempitems
    }
    getEvent = (slug)=>{
         let tempEvents= [...this.state.events]
            // console.log(tempEvents)
       let event= tempEvents.find(event=>event.slug===slug);
            // console.log(event)
       return event;
    }
    handlechange=event=>{
        // const type=event.target.type
        // const name=event.target.name
        // const value=event.target.value
        // console.log(type,name,value)
        const target=event.target
        const value=event.type==='checkbox'?target.checked:target.value
        const name=event.target.name
        this.setState({
            [name]:value
        },this.filterEvents)

    }
    filterEvents=()=>{
        // console.log("hello")
        let{
            events,type,capacity,price,college
        }=this.state
        //all  the events

        let tempevents=[...events]
        //transform value
                //  capacity=parseInt(capacity)
                price=parseInt(price)
        //filter by type
        if(type!=='all'){
            tempevents=tempevents.filter(event=>event.type===type)
        }

        //filter by capacity
            //if(capacity!=='1'){
                // tempevents=tempevents.filter(event=>event.capacity>=capacity)
            //} 

            // filter by college
            if(college!=='all'){
                tempevents=tempevents.filter(event=>event.college===college)
            }
            //filter by price
        tempevents=tempevents.filter(event=>event.price<=price)
            //change state
            this.setState({
            sortedevents:tempevents
        })
    }
    render() {
        return (
            <EventContext.Provider value={{
                ...this.state,
            getEvent:this.getEvent,
            handlechange:this.handlechange}}> 
            {/* <EventContext.Provider value={"hello"}></EventContext.Provider>  */}
            {/* ...this.state take whole value of state */}
                {this.props.children}
            </EventContext.Provider>
        )
    }
}
const EventConsumer=EventContext.Consumer

//another method to render in ourevent

// export function withEventConsumer(Component){
//     return function ConsumerWrapper(props){
//         return <EventConsumer>
//             {value => <Component {...props} context = {value}/>}
//         </EventConsumer>
//     }
// }

export {EventProvider,EventConsumer,EventContext}