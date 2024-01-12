import React from "react";

export default function TextBox({
  placeholder = "Write a short summary to your course",
  value,
  name = 'summary',
  onChangeHandler,
  onBlurHandler
}) {

  console.log(name,value)
  return (
    <>
      {/* <h1 className="text-lg font-bold">Summary Courses</h1> */}
      <textarea
      
        name={name}
        placeholder={placeholder}
        rows="4"
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
      ></textarea>
    </>
  );
}
