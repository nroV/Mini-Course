import React, { useEffect, useState } from "react";
import Textinput from "../Textinput";
import TextBox from "../TextBox";
import DynamicLessonForm from "../lessons/DynamicLessonForm";
import ButtonApp from "../ButtonApp";
// ,onAddLesson ,
//   onChangeLesson , form
export default function DynamicChaptersForm({
  onChange,
  chapterIndex,
  value,
  onAdd,
  onAddLesson,
  onChangeLesson,
  onRemoveLesson,
  form: lessonForm,
  onRemove,
}) {

  return (
    <div className="py-10 border-primary700 px-5 rounded-xl bg-slate-100 shadow-lg
     shadow-slate-300">
      <div className="header flex justify-between">
        <h1 className="text-xl font-bold"> Chapter {chapterIndex + 1} </h1>
        <div className="flex gap-2">
          <ButtonApp
            onClick={() => onRemove(chapterIndex)}
            btnStyle={"bg-red-600"}
          >
            Delete 
          </ButtonApp>
          <ButtonApp onClick={() => onAdd(chapterIndex)}>Add</ButtonApp>
        </div>
      </div>
      <Textinput
        label="Chapter"
        placeholder="Enter Chapter Name"
        value={value.name}
        // name="name"
        name="name"
        onChangeHandler={(e) => onChange(e, chapterIndex)}
      />
      <TextBox
        placeholder="Write a short summary to your Chapter"
        value={value.summary}
        // name="summary"
        name="summary"
        onChangeHandler={(e) => onChange(e, chapterIndex)}
      />

      {lessonForm?.map((input, index) => {
        return (
          <>
            <DynamicLessonForm
              key={index}
              value={input}
              index={index}
              chapterIndex={chapterIndex}
              onChange={onChangeLesson}
            />
            <div className="flex gap-2">
              {" "}
              <ButtonApp onClick={() => onAddLesson(chapterIndex)}>
                Add Lesson
              </ButtonApp>
              <ButtonApp
                onClick={() => onRemoveLesson(chapterIndex, index)}
                btnStyle={"bg-red-500"}
              >
                Delete Lesson
              </ButtonApp>
            </div>
          </>
        );
      })}
      {/* <pre>{JSON.stringify(form)}</pre> */}
    </div>
  );
}
