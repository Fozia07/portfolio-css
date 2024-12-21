import React from 'react'
import '../globals.css'
import '@/app/style/about.css'
import Image from 'next/image'
import img2 from '../public/image2-removebg-preview__1_-removebg-preview.png'
import Skill from './skill'
import '@/app/about/style.css'

function Page() {
  return (
    <div className='page'>
        <div className='about-div'>
        <div className='about-left'>
          <Image src={img2} alt="" className='image'></Image>
        </div>
        <div className='about-right'>
          <h1 className='heading'>About me</h1>
          <p className='para'>I&#39;m Fozia Mustafa, a passionate Web Developer and Designer committed to transforming ideas into visually stunning and highly functional websites. With a deep understanding of both creative design and technical development, I bridge the gap between aesthetics and functionality, delivering seamless, responsive, and engaging user experiences. Lets bring your vision to life with a website that not only looks great but performs flawlessly.</p>
        </div>
      </div>
      <Skill/>
   
    </div>
  )
}

export default Page