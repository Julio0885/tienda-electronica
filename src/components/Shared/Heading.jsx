import React from 'react'

export default function Heading({ title, subtitle }) {
  return (
    <div className='text-center mb-10 max-w-[600px] mx-auto space-y-2'>
      <h1 className='text-3xl font-bold lg:text-4xl'>{title}</h1>
      <p className='text-xs text-gray-400'>{subtitle}</p>
    </div>
  )
}

