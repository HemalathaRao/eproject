import React from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedEvents from '../components/FeaturedEvents'
import About from './about'
// import Button from '../components/StyledHero'
export default function Home() {
    return (
        //shortcut for react fragment <>
        <>
        {/* //from css */}
         <Hero> 
            <Banner title="Latest Events" subtitle="Leave the worries to us!">
                <Link to="/events" className="btn-primary">
                    Our Events
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <About/>
        <FeaturedEvents/>
        {/* <Button>hello</Button> */}
        </>
    )
}

Hero.defaultProps={
    hero:'defaultHero'
}