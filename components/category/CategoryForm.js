import React, { useEffect, useState } from "react";
import Textinput from "../Textinput";
import ButtonApp from "../ButtonApp";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { CategorySchema } from "@/schemas";
import { CustomInputComponent } from "../CustomInputComponent";
export default function CategoryForm({ onSave, value }) {
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
            <Field
              name="name"
              label="Category Name"
              value={props.values.name}
              component={CustomInputComponent}
              placeholder="Course Name"
            />

            <Field
              name="code"
              label="Category Code"
              value={props.values.code}
              component={CustomInputComponent}
              placeholder="Enter Category Code"
            />

            <ButtonApp btnStyle="bg-primary600" type="submit">
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
