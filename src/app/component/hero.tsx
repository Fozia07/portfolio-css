import React from 'react';
import '@/app/style/hero.css'
import '../globals.css'
import Image from 'next/image';
import img1 from '../public/image_1-removebg-preview.png'
import img3 from '../public/Whatsapp_Logo_Twitter_Logo_Facebook_Logo_Instagram_Logo_PNG_Transparent_With_Clear_Background_ID_474232___TopPNG-removebg-preview.png'
function Hero() {
  return (
    <div className='page'>
        <div className='hero'>
            <div className='left'>
                <h2 className='intro'>I&#39;m Fozia Mustafa</h2>
                <h1 className='heading'>web</h1>
                <h1 className='heading'>Developer</h1>
                <p className='para'>specializes in creating and maintaining websites, focusing on both design and functionality.</p>
                <button className='btn' >Hire me</button>
            </div>
            <div className='right'>
              <Image src={img1} alt='' className='image' ></Image>
            </div>
        </div>
        <div>
            <Image src={img3} alt='' className='icons'></Image>
        </div>

    </div>
  )
}

export default Hero