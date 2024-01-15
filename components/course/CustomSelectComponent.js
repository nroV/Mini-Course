import { ErrorMessage } from "formik";
import React from "react";

import Select, { Option, ReactSelectProps } from "react-select";
export const CustomSelectInput = ({
  data = [],
  label = "",
  placeholder = "Please Select Your Category",
  field, // { name, value, onChange, onBlur }

  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.

  ...props
}) => {
  console.log(data);

  const helperData = data.map((select) => {
    return {
      ...select,
      value: select.id,
      label: select.name,
    };
  });

  const selectedValue =
    helperData.find((option) => option.value === field.value) || null;

  console.log(selectedValue);

  return (
    <>
      <div className="">
        <label> {label} </label>
      </div>
      <Select
        options={helperData}
        name={field.name}
        placeholder={placeholder}
        // {...props}
        value={selectedValue}
        onChange={(data) => {
          setFieldValue(field.name, data.value);
        }}
        onBlur={field.onBlur}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "grey" : "red",
          }),
        }}
      ></Select>
      <ErrorMessage
        name={field.name}
        className="text-red-500"
        component={"div"}
      />
    </>
  );
};
