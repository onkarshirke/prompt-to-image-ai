// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items justify-between gap-4 py-3
    mt-20'>
        <img src={assets.logo} alt="" width={150}/>

        <p className='flex-1 pl-4 border-gray-400 text-md
        text-gray-500 flex items-center max-sm:hidden'>Copyright @Onkar.dev | 
        All Rights Reserved.</p>

        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt="" width={35} />
            <img src={assets.twitter_icon} alt="" width={35} />
            <img src={assets.instagram_icon} alt="" width={35} />
        </div>

    </div>
  )
}

export default Footer
