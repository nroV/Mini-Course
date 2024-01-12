import React from 'react'

export default function ButtonApp({children , onClick , btnStyle='bg-primary500',
 hoverStyle = 'bg-red-500' }) {
  console.log(hoverStyle)
  return (
    <button 
    type='button'
    className={`p-2 bg-primary500 text-white rounded-lg px-10 font-bold
    hover:bg-primary700 duration-300 transition-all ${btnStyle} `}
    onClick={onClick}
    >{children}</button>
  )
}
