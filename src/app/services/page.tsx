import React from 'react'
import '@/app/services/style.css'
import '../globals.css'
function Services() {
  return (
    <div className='body'> 
        <div className='page'>
        <h1 className='heading'>Services</h1>
         <div >
            <div className='main-div'>
              <div className='service'>
                <div className='card'>

                  <h1 className='heading1'>web developer</h1>
                  <p className='para1'>As a developer, I find myself most captivated by the power and flexibility of 
                   NEXT.js. I am always eager to dive into new projects that leverage NEXT.js and 
                  discover innovative ways to create fast, scalable, and user-friendly applications.</p>
                </div>
              
              </div>
              <div className='service'>
                <h1 className='heading1'>app developer</h1>
                <p className='para1'>With a focus on user-centric design andcutting-edge technologies, I thrive on 
                building intuitive and efficient apps that make a postive impact on peoples lives. Lets turn ideas into reality and 
                shape the future together.</p>
              
              </div>
              <div className='service'>
                <h1 className='heading1'>UI/UX designer</h1>
                <p className='para1'>Creative and user-focused UI/UX designer dedicated to crafting intuitive, 
                 visually engaging digital experiences. Skilled in transforming complex requirements into seamless, user-friendly interfaces
                  that balance aesthetics with functionality.
                </p>
              </div>
           </div>
           </div>   

        </div>
    </div>
  )
}

export default Services