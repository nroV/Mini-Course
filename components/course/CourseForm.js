// CourseForm.jsx
import React from "react";
import { Formik, FieldArray, ErrorMessage, Field, Form } from "formik";
import ChapterForm from "../chapters/ChapterForm"; // Ensure correct import path
import * as Yup from "yup";
import { uuidv4 } from "@/utils/generate";
import { CourseSchema } from "@/schemas";
import ButtonApp from "../ButtonApp";
import Textinput from "../Textinput";
import SelectOption from "./SelectOption";
import TextBox from "../TextBox";
import { CustomInputComponent } from "../CustomInputComponent";
import { CustomSelectInput } from "./CustomSelectComponent";
import { DynamicChapters } from "../chapters/DynamicChapters";
import { CustomTextAreaInput } from "../CustomTextareaComponent";
import { CustomMultipleSelect } from "./CustomMultipleTextSelect";

const initialValues = {
  name: "",
  category_id: "",
  summary: "",
  tags: [],
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
        {(props) => {
          console.log(props);
          console.log(props?.values?.tags)
          return (
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
                  <Field
                    name="name"
                    label="Course"
                    value={props?.values?.name}
                    component={CustomInputComponent}
                    placeholder="Course Name"
                  />
                  <Field
                    name="summary"
                    label="Summary Your Course"
                    value={props?.values?.summary}
                    component={CustomTextAreaInput}
                    placeholder="Course Summary Description"
                  />

                  <Field
                    data={data}
                    label='Select Category'
                    placeholder="Please Select Your Category"
                    name={"category_id"}
                    component={CustomSelectInput}
                  />
                  <Field
                  id = {value?.id}
                  label='Customize Your Tag'
                  data ={props?.values?.tags}
                  
                    // data={
                    //   value?.id ? props?.values?.tags :
                    
                      
                    //   }
                    name={"tags"}
                    placeholder="Choose a Tag"
                    component={CustomMultipleSelect}
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="button my-7 space-x-2"></div>
                <div className="py-10 border-primary700 px-5 rounded-xl bg-slate-100 shadow-lg shadow-slate-300">
                  <FieldArray name="chapters">
                    {({ push, remove }) => {
                      return (
                        <>
                          {props?.values?.chapters.map((chapter, chindex) => {
                            return (
                              <>
                                {props?.values?.chapters?.length > 0 && (
                                  <header className="flex justify-between">
                                    <h1 className="text-2xl font-semibold">
                                      Chapter {chindex + 1}
                                    </h1>
                                    <ButtonApp
                                      onClick={() => {
                                        push({
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
                                        });
                                      }}
                                    >
                                      Add Chapter
                                    </ButtonApp>
                                  </header>
                                )}
                                <DynamicChapters
                                  remove={remove}
                                  push={push}
                                  key={chindex}
                                  chapterIndex={chindex}
                                  data={chapter}
                                  values={props?.values}
                                />
                              </>
                            );
                          })}
                        </>
                      );
                    }}
                  </FieldArray>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

{
  /* <ChapterForm
key={chapter.id}
chapterIndex={chindex}
chapter={chapter}
props={props}
remove={remove}
push={push}
/> */
}
{
  /* <div className="chapter space-y-6">
<Field
  name={`chapters.${chindex}.name`}
  value={chapter.name}
  component={CustomInputComponent}
  placeholder="Enter Chapter Name"
/>
</div> */
}
