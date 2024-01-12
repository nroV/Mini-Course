import React, { useEffect, useState } from "react";
import Textinput from "../Textinput";
import ButtonApp from "../ButtonApp";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { CategorySchema } from "@/schemas";
export default function CategoryForm({ onSave, value }) {
  console.log(value);
  return (
    <div className="space-y-6 flex flex-row mx-20">
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: value?.id || "",
          name: value?.name || "",
          code: value?.code || "",
        }}
        validationSchema={CategorySchema}
        onSubmit={(values, actions) => {
          console.log(values, actions);
          actions.resetForm();
          console.log(value?.id);
          if (values?.id) {
            onSave(values, true);
            return;
          }

          onSave(values, false);
        
          // actions.resetForm()
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className="space-y-4 w-full">
          
            <input
              hidden
              type="text"
              value={props.values.id}
              onChangeHandler={props.handleChange}
              onBlurHandler={props.handleBlur}
            />
            <Textinput
              label="Categorys"
              name="name"
              placeholder="Enter Category Name"
              value={props.values.name}
              onChangeHandler={props.handleChange}
              onBlurHandler={props.handleBlur}
            />
            <ErrorMessage
              name="name"
              component={"div"}
              className="text-red-500"
            />
            <Textinput
              label="Code"
              value={props.values.code}
              placeholder="Enter Category Code"
              name="code"
              onChangeHandler={props.handleChange}
              onBlurHandler={props.handleBlur}
            />
            {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
            <ErrorMessage
              name="code"
              component={"div"}
              className="text-red-500"
            />
            <ButtonApp
              btnStyle="bg-primary600"
              type="submit"
              // onClick={(e) =>
              //   value?.id ? onSaveCategory(e, true) : onSaveCategory(e, false)
              // }
            >
              {value?.id ? "Update" : "Save"}
            </ButtonApp>
          </form>
        )}
      </Formik>
    </div>
  );
}
{
  /* <form className="space-y-4 w-full">
<h1 className="text-xl font-bold">New Categories</h1>

<Textinput
  label="Categorys"
  name="name"
  placeholder="Enter Category Name"
  value={form.name}
  onChangeHandler={onChange}
/>

<Textinput
  label="Code"
  value={form.code}
  placeholder="Enter Category Code"
  name="code"
  onChangeHandler={onChange}
/>
<ButtonApp
     btnStyle="bg-primary600"
  onClick={(e) =>
    value?.id ? onSaveCategory(e, true) : onSaveCategory(e, false)
  }
>
  {value?.id ? "Update" : "Save"}
</ButtonApp>
</form> */
}
