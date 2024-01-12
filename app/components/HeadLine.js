"use client"

import React, { useEffect, useRef } from 'react'

export default function HeadLine({children,headerColor ='bg-primary700'}) {


  return (
    <h3 className='text-3xl font-bold justify-self-center mb-10 
      '>


        <p className={`text-center w-full p-5 text-primary300 ${headerColor}`}>{children}</p>
     </h3>
  )
}
