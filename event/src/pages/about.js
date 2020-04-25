import React from 'react'
import Aboutimg from '../images/fest1.jpg'
import Title from '../components/Title'
export default function about() {
    return (
        <>
        
        {/* <div className='defaultHero'>
            <div className="containers">
            <h1>ABOUT US</h1>
           
            <div>
                <img className="aboutimg" src={Aboutimg} alt="img"></img>
            </div>
            
            <article>
                <p>This is the the website for the students as well as colleges to interact about the events happening in the different colleges</p>
            </article>
            </div>
            </div>
          
        </section> */}
        <section className='about-events'>
        <Title title="ABOUT US"></Title>
        {/* <div class="aboutcontainer"> */}
  <div class="aboutrow">
    <div class="column-66">
      {/* <h1 class="xlarge-font"><b>ABOUT US</b></h1> */}
      {/* <h1 class="large-font" style={{color:"MediumSeaGreen"}}><b>Why buy it?</b></h1> */}
      <p><span > EventZone, Leave the worries to us.</span>
      This is the the website for the students as well as colleges to interact about the events happening in the different colleges.</p>
      {/* <button class="aboutbutton">Download Application</button> */}
    </div>
    <div class="column-33">
        <img className='aboutimg' src={Aboutimg}/>
    </div>
  </div>
{/* // </div> */}
</section>
</>
        
        
    )
}
