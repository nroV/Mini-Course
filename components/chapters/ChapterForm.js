"use client";
import { useState } from "react";

import ButtonApp from "../ButtonApp";
import TextBox from "../TextBox";
import Textinput from "../Textinput";

import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { uuidv4 } from "@/utils/generate";
import { LessonsForm } from "../lessons/LessonsForm";

export default function ChapterForm({
  chapterIndex,
  chapter,
  props,
  push,
  remove,
}) {
  return (
    <div className="row" key={chapterIndex}>
      <div className="header flex justify-between ">
        <h1 className="text-xl font-bold"> Chapter {chapterIndex + 1}</h1>
        <div className="flex gap-">
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
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
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
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
        />{" "}
        <ErrorMessage
          name={`chapters.${chapterIndex}.summary`}
          component={"div"}
          className="text-red-500"
        />
        {/* Lesson in Chapers  */}
        <FieldArray name={`chapters.${chapterIndex}.lessons`}>
          {({ insert, remove, push }) => {
            return (
              <div>
                {props?.values?.chapters[chapterIndex].lessons?.length > 0 &&
                  props?.values?.chapters[chapterIndex].lessons.map(
                    (lesson, lessonindex) => {
                      return (
                        <LessonsForm
                          key={lesson?.id}
                          lessonindex={lessonindex}
                          chapterIndex={chapterIndex}
                          push={push}
                          props={props}
                          remove={remove}
                          lesson={lesson}
                        />
                      );
                    }
                  )}
              </div>
            );
          }}
        </FieldArray>
      </div>
    </div>
  );
}
