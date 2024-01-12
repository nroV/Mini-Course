import React from "react";
import { Formik, Form, Field } from "formik";
export default function Textinput({label ='No Name',onChangeHandler,onBlurHandler, ...props}) {


  // props =     
  // name="name"
  // placeholder="Enter Category Name"
  // value={form.name}
  // type="text" 
  // const [field, meta, helpers] = useField(props);

  // console.log(name,value)
  // console.log(props)


  console.log(props)
  return (
    <div className="input space-y-2">
      <div className="">
        <label> {label} </label>
      </div>

      <input
       {...props}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className="text-sm p-2 rounded-lg w-[100%]"
      />
    </div>
  );
}
