import React from 'react'
import { about } from '../data'

const About = () => {   
  return (
    <div className='about'>
        <h1 id='about'>{about.title} <strong>ME</strong></h1>
        <p className='desc'>{about.desc}</p>

        <div className='tech-tools'>
        <div className='technology'>
            <h2 id='tech'>Technologies</h2>
            <div className='technologies'> 
                {about.technology.map((data, index)=> <p key={index}>{data}</p>)}
            </div>
        </div>
        <div className='technology'>
        <h2 id='tech'>Tools</h2>
        <div className='technologies'>
            {about.tools.map((data, index)=> <p key={index}>{data}</p>)}
        </div>
        </div>
        </div>
    </div>
  )
}

export default About