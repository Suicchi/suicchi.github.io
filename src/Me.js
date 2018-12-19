import React from 'react'
import myphoto from './mesquare.jpg'
import './Me.css'


const Me = () =>{
    return (
        <div className="my-panel">
            <h1>Portfolio of</h1>
            <img src={myphoto} alt="Me" className="img-rounded" />
            <h1>Md. Reazul Islam Bhuiyan</h1>
            {/* <p>Software Developer</p> */}
        </div>        
    )
}

export default Me
