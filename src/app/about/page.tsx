"use client"
import React from 'react'
import AboutHero from '@/components/AboutHero'
import Education from '@/components/Education'
import Skills from '@/components/Skills'




const page = () => {
  return (
    <div className='flex flex-col space-y-20 bg-neutral-950 min-h-[90vh] pt-20 px-10 pb-20 justify-center items-center box-border overflow-x-hidden'>
      <AboutHero/>
      <Skills/>
      <Education/>
    </div>
  )
}

export default page