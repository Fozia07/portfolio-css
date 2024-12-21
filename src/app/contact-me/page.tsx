import React from 'react'
import '@/app/globals.css'
import '@/app/contact-me/style.css'

function Contactme() {
  return (
    <div >
        <div className='page'>
           <div className='main-div'>
              <div className='content-div'> 
                  <h1 className='heading'>Contact me</h1>
                  <p className='para'>I will read all emails. send me any message you want and I will getback to you</p>
              </div>
              <div className='content-div'>
                <h1 className='heading'>Send me a message</h1>
                 <input type='text' placeholder='First name'className='input'></input><br/>
                 <input type='text' placeholder='Last name' className='input'></input><br/>
                 <textarea typeof='text' placeholder='Message' className='input'></textarea>
                 <button className='btn1'>submit</button>
              </div>
           </div>
        </div> 

    </div>
  )
}

export default Contactme