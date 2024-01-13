// CourseForm.jsx
import React from "react";
import { Formik, FieldArray ,ErrorMessage } from "formik";
import ChapterForm from "../chapters/ChapterForm"; // Ensure correct import path
import * as Yup from "yup";
import { uuidv4 } from "@/utils/generate";
import { CourseSchema } from "@/schemas";
import ButtonApp from "../ButtonApp";
import Textinput from "../Textinput";
import SelectOption from "./SelectOption";
import TextBox from "../TextBox";

const initialValues = {
  name: "",
  category_id: "",
  summary: "",
  chapters: [
    {
      id: uuidv4(),
      name: "",
      summary: "",
      lessons: [
        {
          id: uuidv4(),
          name: "",
          summary: "",
        },
      ],
    },
  ],
};

export default function CourseForm({ data, onSave, value }) {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    if (value?.id) {
      onSave(values, true);
    } else {
      onSave(values, false);
    }
  };

  return (
    <div className="space-y-6 flex flex-row mx-20">
      <Formik
        enableReinitialize={true}
        initialValues={value?.id ? value : initialValues}
        validationSchema={CourseSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <form
            onSubmit={(e) => {
              props?.handleSubmit(e);
            }}
            className="space-y-4 w-full"
          >
            <div className="new-course ">
              <div
                className="px-10 py-10 border-primary700 rounded-xl bg-slate-200 shadow-lg
              shadow-slate-300 space-y-7"
              >
                <div className="header flex justify-between">
                  <input
                    hidden
                    type="text"
                    value={props.values.id}
                    onChangeHandler={props.handleChange}
                    onBlurHandler={props.handleBlur}
                  />
                  <h1 className="text-xl font-bold">New Course</h1>
                  <div className="flex gap-2">
                    <ButtonApp type="submit" btnStyle={"bg-primary700"}>
                      {value?.id ? "Update Course" : "Save"}
                    </ButtonApp>
                    <ButtonApp type="reset" btnStyle={"bg-primary500"}>
                      Reset
                    </ButtonApp>
                  </div>
                </div>
                <Textinput
                  label="Course"
                  placeholder="Enter Course Name"
                  name="name"
                  onBlurHandler={props?.handleBlur}
                  onChangeHandler={props?.handleChange}
                  value={props?.values?.name}
                />{" "}
                <ErrorMessage
                  name="name"
                  component={"div"}
                  className="text-red-500"
                />
                <SelectOption
                  data={data}
                  onBlurHandler={props?.handleBlur}
                  onChangeHandler={props?.handleChange}
                  name="category_id"
                  value={props?.values?.category_id}
                />
                <ErrorMessage
                  name="category_id"
                  component={"div"}
                  className="text-red-500"
                />
                <TextBox
                  placeholder="Write a short summary to your course"
                  name="summary"
                  onBlurHandler={props?.handleBlur}
                  onChangeHandler={props?.handleChange}
                  value={props?.values?.summary}
                />
                <ErrorMessage
                  name="summary"
                  component={"div"}
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="my-5">
              <div className="py-10 border-primary700 px-5 rounded-xl bg-slate-100 shadow-lg shadow-slate-300">
                <FieldArray name="chapters">
                  {({ insert, remove, push }) => (
                    <>
                      {props?.values?.chapters.length > 0 &&
                        props?.values?.chapters.map((chapter, chindex) => (
                          <ChapterForm
                            key={chapter.id}
                            chapterIndex={chindex}
                            chapter={chapter}
                            props={props}
                            remove={remove}
                            push={push}
                          />
                        ))}
                    </>
                  )}
                </FieldArray>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
