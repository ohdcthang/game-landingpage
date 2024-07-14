'use client'
import React from 'react'
import logo from '../../asset/img/logo.png'
import charactors from '../../asset/img/charactor.png'
import Image from 'next/image'
import { Bounce, Fade } from 'react-awesome-reveal'

export const Banner = () => {
  return (
    <div className='h-screen banner z-1000 flex items-center justify-center'>
        <div className='text-center flex justify-center flex-col items-center px-12 gap-8 '>
          <Bounce>
            <Image src={logo} width={750}/>
          </Bounce>
          <Fade>
            <Image src={charactors}  width={650} />
          </Fade>
          <Fade direction='bottom'>
            <p className=' py-2 font-medium bg-black rounded-2xl bg-opacity-30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus mauris, tempor non nisi et, lobortis auctor nunc. Vivamus pharetra dui quis dolor luctus maximus.Cras at ultrices sapien. Aliquam placerat eleifend ante, a vehicula nunc pretium vitae. Vivamus vitae ex erat. Maecenas ac volutpat nulla, et hendrerit metus. Duis eleifend ipsum nec nibh porta pulvinar. Pellentesque ullamcorper sapien eu metus cursus feugiat eget eu tellus. Pellentesque molestie rhoncus leo quis convallis. Quisque ornare efficitur eros, vitae sodales tellus varius eget. Mauris quis massa velit.</p>
          </Fade>
        </div>
        <div>

        </div>
    </div>
  )
}
