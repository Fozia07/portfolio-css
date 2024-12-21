import Image from 'next/image'
import React from 'react'
import '@/app/style/footer.css'
import '@/app/globals.css'
import Link from 'next/link'
import img1 from '@/app/public/Free_download___Facebook_Scalable_Graphics_Icon__Facebook_logo___Facebook_logo_transparent_background_PNG_clipart-removebg-preview.png'
import img2 from '@/app/public/download-removebg-preview (1).png'
import img3 from '@/app/public/Social_Media_Linkedin_Vector_Design_Images__Linkedin_Social_Media_Icon__Linkedin_Icons__Social_Icons__Media_Icons_PNG_Image_For_Free_Download-removebg-preview.png'
import img4 from '@/app/public/Social_Media_Instagram_Login_Photography_PNG_-_Free_Download-removebg-preview (1).png'

function Footer() {
  return (
    <div className='page'>
      <footer>
        <div className='footer-container'>

           <div className='social-icons'>
            <Link href={"https://www.facebook.com"}><Image src={img1} alt='facebookicon' className='footer-icons'></Image></Link>
            <Link href={'https://www.whatsapp.com'}><Image src={img2} alt='whatappicon' className='footer-icons'></Image></Link>
            <Link href={'https://www.linkedin.com'}><Image src={img3} alt='linkedinicon' className='footer-icons'></Image></Link>
            <Link href={'https:www.instagram.com'}><Image src={img4} alt='instagramicon' className='footer-icons'></Image></Link>
           </div>
           <ul className='footer-list'>
            <li>Home</li>
            <li>about</li>
            <li>service</li>
            <li>contact</li>
          </ul>
        </div>
        <div className='footer-para'>
          <p>All copywrite reserved :2024 |designed by FOZIA</p>
        </div>
      

      </footer>
      
    </div>
  )
}

export default Footer