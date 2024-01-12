import React from "react";

export default function SelectOption({data,name,value,onChangeHandler}) {
  console.log(name,value)

  
  return (
    <div class="relative inline-block w-64 space-y-9">
     <h1 className="text-xl font-bold">Category</h1>
      <select
      name={name}
      value={value}
      onChange={onChangeHandler}
      
       class="block appearance-none w-full bg-white border
        border-gray-300 text-gray-700 py-3 px-4 pr-8
         rounded leading-tight focus:outline-none focus:border-blue-500  ">
        <option value="" disabled selected>
         Choose Category Courses
        </option>
        {
          data?.map((item)=>{
            return <>
            <option value={item.id}>{item?.name} </option>
            </>
          })
        }
      
      
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M14 7l-7 7-7-7 1.41-1.41L7 11.17l6.59-6.58L14 7z" />
        </svg>
      </div>
    </div>
  );
}
