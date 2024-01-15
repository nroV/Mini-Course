import { ErrorMessage } from "formik";
import React from "react";
import Select from "react-select";

export const CustomMultipleSelect = ({
  id,
  label='',
  data = [],
  placeholder = "Please Select Your Category",
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, values }, // form functions
  ...props
}) => {
  const helperData = data.map((select) => {
    return {
      value: select,
      label: select,
    };
  });

  return (
    <>
     <div className="">
        <label> {label} </label>
      </div>
      <Select
        placeholder={placeholder}
        closeMenuOnSelect={false}
        name={field.name}
        // defaultValue={data.map((tag) => ({ value: tag, label: tag }))}

        // value={selectedValue || []}
        isMulti
        options={
          !id
            ? [
                "Web",
                "Mobile",
                "UX and UI",
                "Design",
                "Network",
                "IT",
                "Other",
              ].map((tag) => ({ value: tag, label: tag }))
            : data.map((tag) => ({ value: tag, label: tag }))
        }
        onChange={(data) => {
          console.log(data?.map((d) => d.value));
          setFieldValue(
            field.name,
            data?.map((d) => d.value)
          );
        }}
        value={
          values[field.name]
            ? helperData.filter((option) =>
                values[field.name].includes(option.value)
              )
            : []
        }
        onBlur={field.onBlur}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "grey" : "blue",
          }),
        }}
      />
      <ErrorMessage
        name={field.name}
        className="text-red-500"
        component={"div"}
      />
    </>
  );
};
