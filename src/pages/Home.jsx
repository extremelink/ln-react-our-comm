import React from 'react'
import Hero from '../components/Hero';

const Home=()=>{
    return(
        <div className='home'>
            <h1 style={{textAlign:'center', color:'blue'}}>Home </h1>
            <Hero />
        </div>
    )
}
export default Home;