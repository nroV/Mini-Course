import { ErrorMessage } from "formik";
import React from "react";
export const CustomTextAreaInput = ({
  label = "Label",
  field,
  index, // { name, value, onChange, onBlur }

  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.

  ...props
}) => {
  return (
    <div className="input space-y-2">
      <div className="">
        <label> {label} </label>
      </div>
      <textarea
        {...field}
        {...props}
        class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
      ></textarea>

      <ErrorMessage
        name={field.name}
        className="text-red-500"
        component={"div"}
      />
    </div>
  );
};

// <input type="text" {...field} {...props} />
// <ErrorMessage name={field.name} className="text-red-500" component={'div'} />
{
  /* {touched[field.name] &&

    errors[field.name] && <div className="text-red-600">{errors[field.name]}</div>} */
}
