'use client'

import React from 'react'
import { Icon } from '../Icon'
import logo from '../../asset/img/logo.png'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

export const Header = () => {
  return (
    <Fade  direction='down' duration={100}>
    <div className='h-[60px] bg-black bg-opacity-60 fixed top-0 right-0 left-0 flex justify-between items-center px-4 lg:px-12 text-lg text-white font-semibold '>
      <div className='shadow-lg'>
       <Image src={logo} width={180} alt =''/>
      </div>
      <div className='lg:hidden'>
        <Icon icon='app_menu' size={20} />
      </div>
      <div className='justify-between items-center hidden lg:flex gap-12 font-semibold text-sm text-white cursor-pointer'>
        <span>Home</span>
        <span className='text-gray-400'>Benefits</span>
        <span className='text-gray-400'>Roadmap</span>
        <span className='text-gray-400'>Support</span>

        <div className='mx-2 bg-primary px-8 py-2 rounded-xl shadow-lg shadow-cyan-500/90 '>
            <button>Mint Now</button>
        </div>
      </div>
    </div>
    </Fade>

  )
}
