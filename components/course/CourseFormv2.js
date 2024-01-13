// CourseForm.jsx

import React from "react";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";
import ChapterForm from "../chapters/ChapterForm";



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
              props.handleSubmit(e);
              // Add any other logic you need to execute on the outer form submission
            }}
            className="space-y-4 w-full"
          >
            {/* ... Your CourseForm content ... */}
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

import React from "react";
import { FieldArray, useFormikContext } from "formik";
import LessonsForm from "../lessons/LessonsForm";

export default function ChapterForm({ chapterIndex, chapter, remove, push }) {
  const formik = useFormikContext();

  return (
    <div className="row" key={chapterIndex}>
      {/* ... ChapterForm content ... */}
      <FieldArray name={`chapters.${chapterIndex}.lessons`}>
        {({ insert, remove, push }) => (
          <div>
            {formik?.values?.chapters[chapterIndex]?.lessons?.length > 0 &&
              formik?.values?.chapters[chapterIndex]?.lessons.map(
                (lesson, lessonindex) => (
                  <LessonsForm
                    key={lesson?.id}
                    lessonindex={lessonindex}
                    chapterIndex={chapterIndex}
                    push={push}
                    remove={remove}
                    lesson={lesson}
                  />
                )
              )}
          </div>
        )}
      </FieldArray>
    </div>
  );
}

// LessonsForm.jsx

import React from "react";
import { useFormikContext } from "formik";
import { CourseSchema } from "@/schemas";

export default function LessonsForm({ lessonindex, chapterIndex, lesson, remove, push }) {
  const formik = useFormikContext();

  return (
    <div>
      {/* ... LessonsForm content ... */}
    </div>
  );
}