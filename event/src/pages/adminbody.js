import React, { Component } from 'react'
import Title from '../components/Title'
export default class adminbody extends Component {
    render() {
        return (
            <div>
             <section className='about-events'>
            <Title title="Details"></Title>
                <div id='aboutrow'>
                {/* <div className='card'> */}
                    {/* <div className='container'> */}
                
              
                    <div style={{overflow_x:'auto'}}>
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
     
     
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>smith@gmail.com</td>
      
      
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>eve@gmail.com</td>
      
     

    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>adam@gmail.com</td>
      
    
    </tr>
  </table>
</div>
                    </div>
{/* // </div> */}
{/* // </div> */}
              
           
            </section>
            </div>
        )
    }
}
