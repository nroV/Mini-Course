import React, { useEffect, useMemo, useState } from "react";
import Textinput from "../Textinput";
import ButtonApp from "../ButtonApp";

import TextBox from "../TextBox";

import { uuidv4 } from "@/utils/generate";
import { ErrorMessage, FieldArray, Formik , useFormikContext} from "formik";

export  function LessonsForm({
    chapterIndex,
    lessonindex,
    props,
    lesson,
    push,
    remove
}) {

  const formik = useFormikContext();
  console.log(formik)
  return (
    <>
    <main
      className="py-10 border-primary700 px-5 rounded-xl bg-slate-200 shadow-lg
shadow-slate-300 mb-12"
    >
      <div className="header flex justify-between">
        <h1 className="text-xl font-bold">
          {" "}
          Lesson {lessonindex + 1}
        </h1>
      </div>
      <div className="lesson-body space-y-6">
        <Textinput
          label="lessons"
          placeholder="Enter Lesson Name"
          value={lesson.name}
          name={`chapters.${chapterIndex}.lessons.${lessonindex}.name`}
          onChangeHandler={formik.handleChange} 
          onBlurHandler={formik.handleBlur}
        />
        <ErrorMessage
          name={`chapters.${chapterIndex}.lessons.${lessonindex}.name`}
          component={"div"}
          className="text-red-500"
        />
        <TextBox
          placeholder="Write a short summary to your lesson"
          value={lesson.summary}
          name={`chapters.${chapterIndex}.lessons.${lessonindex}.summary`}
          onChangeHandler={formik.handleChange}
          onBlurHandler={formik.handleBlur}
        />
        <ErrorMessage
          name={`chapters.${chapterIndex}.lessons.${lessonindex}.summary`}
          component={"div"}
          className="text-red-500"
        />
        <div className="flex gap-2">
          <ButtonApp
            type="button"
            onClick={() => remove(lessonindex)}
            btnStyle={"bg-red-600"}
          >
            Delete
          </ButtonApp>
          <ButtonApp
            onClick={() => {
              push({
                id: uuidv4(),
                name: "",
                summary: "",
              });
            }}
          >
            Add
          </ButtonApp>
        </div>
      </div>
    </main>
  </>
  )
}
