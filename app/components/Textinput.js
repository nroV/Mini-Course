import React from "react";

export default function Textinput({label ='No Name',placeholder = '',
type='text',name,onChangeHandler,value}) {


  console.log(name,value)
  return (
    <div className="input space-y-2">
      <div className="">
        <label> {label} </label>
      </div>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChangeHandler}
        className="text-sm p-2 rounded-lg w-[100%]"
      />
    </div>
  );
}
