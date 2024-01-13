import React from "react";
import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  useFormikContext,
} from "formik";
import { LessonsForm } from "../lessons/LessonsForm";
import Textinput from "../Textinput";
import ButtonApp from "../ButtonApp";
import TextBox from "../TextBox";
import { uuidv4 } from "@/utils/generate";

export default function ChapterForm({ chapterIndex, chapter, remove, push }) {
  
  const formik = useFormikContext();

  return (
    <div className="row" key={chapterIndex}>
      <div className="header flex justify-between ">
        <h1 className="text-xl font-bold"> Chapter {chapterIndex + 1}</h1>
        <div className="flex gap-2">
          <ButtonApp
            type="button"
            onClick={() => remove(chapterIndex)}
            btnStyle={"bg-red-600"}
          >
            Delete
          </ButtonApp>
          <ButtonApp
            onClick={() =>
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
              })
            }
          >
            Add
          </ButtonApp>
        </div>
      </div>

      <div className="chapter space-y-6">
        <Textinput
          label="Chapter"
          placeholder="Enter Chapter Name"
          value={chapter.name}
          name={`chapters.${chapterIndex}.name`}
          onChangeHandler={formik.handleChange}
          onBlurHandler={formik.handleBlur}
        />
        <ErrorMessage
          name={`chapters.${chapterIndex}.name`}
          component={"div"}
          className="text-red-500"
        />
        <TextBox
          placeholder="Write a short summary to your Chapter"
          value={chapter.summary}
          name={`chapters.${chapterIndex}.summary`}
          onChangeHandler={formik.handleChange}
          onBlurHandler={formik.handleBlur}
        />{" "}
        <ErrorMessage
          name={`chapters.${chapterIndex}.summary`}
          component={"div"}
          className="text-red-500"
        />
      </div>

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
