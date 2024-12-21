import React from 'react'
import Image from 'next/image'
import img1 from '@/app/public/logos_figma.png'
import img2 from '@/app/public/vscode-icons_file-type-html.png'
import img3 from '@/app/public/devicon_css3.png'
import img4 from '@/app/public/skill-icons_bootstrap.png'
import img5 from '@/app/public/vscode-icons_file-type-js-official.png'
import img6 from '@/app/public/Group.png'
function Skill(){
  return (
    <div className='body'>
      <div className='page'>
          <h1 className='heading'>SKills</h1>
          <ul className='list'>
            <li>html</li><p>80%</p>
            <li>css</li><p>75%</p>
            <li>typescript</li><p>65%</p>
          </ul>
          <div>
           <h1 className='heading'>Work frame</h1>
          <div className='containare'>
          <Image src={img2} alt=''></Image>
          <Image src={img3} alt=''></Image>
          <Image src={img5} alt=''></Image>
          <Image src={img6} alt=''></Image>
          <Image src={img4} alt=''></Image>
          <Image src={img1} alt=''></Image>
        </div>
     </div>
    </div>
   </div>
  )
}

export default Skill
