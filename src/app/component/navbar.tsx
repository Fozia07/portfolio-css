import React from 'react'
import '../style/navbaar.css'
import '../globals.css'
import Link from 'next/link'


function Navbar() {
  return (
    <div className='page'>
      <div className='main'>
         <ul className='Nav'>
            <li><Link href='/' className='link'>Home</Link> </li>
            <li><Link href='./about' className='link'>about</Link></li>
            <li><Link href='./services' className='link'>services</Link></li>
            <li><Link href='./contact-me'className='link'>contact </Link></li>
          </ul>
      </div>
    
    </div>
  )
}

export default Navbar