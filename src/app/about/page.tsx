"use client"
import React from 'react'
import AboutHero from '@/components/AboutHero'
import Education from '@/components/Education'

const page = () => {
  return (
    <div className='flex flex-col space-y-20 bg-neutral-950 min-h-[90vh] pt-20 px-10 pb-20 justify-center items-center'>
      <AboutHero/>
      <Education/>
    </div>
  )
}

export default page