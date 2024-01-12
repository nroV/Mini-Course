import Link from "next/link";
import React from "react";

export default function LinkBar({ children , path='/', bgColor ='bg-primary400',
textColor = 'text-primary700'}) {
  return (
    <Link
      href={path}
      className={`${bgColor} p-3 font-semibold rounded-lg ${textColor} hover:bg-primary500 duration-500 transition-all`}
    >
      {children}
    </Link>
  );
}
