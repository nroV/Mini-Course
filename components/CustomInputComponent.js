import { ErrorMessage } from "formik";
import React from "react";
export const CustomInputComponent = ({
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
      <input
        type="text"
        {...field}
        {...props}
        className="text-sm p-2 rounded-lg w-[100%]"
      />

      <ErrorMessage
        name={field.name}
        className="text-red-500"
        component={"div"}
      />
    </div>
  );
};


