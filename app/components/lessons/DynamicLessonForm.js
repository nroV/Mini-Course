import React from "react";
import Textinput from "../Textinput";
import TextBox from "../TextBox";
import ButtonApp from "../ButtonApp";

export default function DynamicLessonForm({ onChange, index, value, onAdd,chapterIndex }) {
  return (
    <main className="my-5">

      {/* <div className="header flex justify-between">
        <h1 className="text-xl font-bold"> Lesson {index+1} </h1>

        <ButtonApp onClick={onAdd}>Add Lesson</ButtonApp>
      </div> */}
      <Textinput
        label="Lessons"
        placeholder="Enter Lessons Name"
        value={value.name}
        name="name"
        onChangeHandler={(e) => onChange(e, index ,chapterIndex)}
      />

      <TextBox
        placeholder="Write a short summary to your lesson"
        value={value.summary}
        name="summary"
        onChangeHandler={(e) => onChange(e, index ,chapterIndex)}
      />
    </main>
  );
}
