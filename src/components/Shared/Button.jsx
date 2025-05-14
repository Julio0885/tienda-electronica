import React from 'react'

export default function Button({text, bgcolor, textColor}) {
  return (
    <button 
    className={` ${textColor} ${bgcolor}  cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
    >
    {text}
    </button>
  )
}

