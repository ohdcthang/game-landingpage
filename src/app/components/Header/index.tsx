import React from 'react'
import { Icon } from '../Icon'

export const Header = () => {
  return (
    <div className='h-[60px] flex justify-between items-center px-4 lg:px-12 text-lg text-white font-semibold '>
      <div className='shadow-lg shadow-gray-500/90'>
        NAMTHANG GAME
      </div>
      <div className='lg:hidden'>
        <Icon icon='app_menu' size={20} />
      </div>
      <div className='justify-between items-center hidden lg:flex gap-12 font-semibold text-sm text-white cursor-pointer'>
        <span>Home</span>
        <span className='text-gray-200'>Benefits</span>
        <span className='text-gray-200'>Roadmap</span>
        <span className='text-gray-200'>Support</span>

        <div className='mx-2 bg-primary px-8 py-2 rounded-xl shadow-lg shadow-cyan-500/90 '>
            <button>Mint Now</button>
        </div>
      </div>
    </div>
  )
}
