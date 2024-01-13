import React from 'react'

export default function ButtonApp({children , onClick , btnStyle='bg-primary500',
 hoverStyle = 'primary700' , type='button' }) {
  console.log(hoverStyle)
  return (
    <button 
    type={type}
    className={`p-2  text-white rounded-lg px-10 font-bold
    hover:bg-primary700 duration-300 transition-all ${btnStyle} `}
    onClick={onClick}
    >{children}</button>
  )
}
