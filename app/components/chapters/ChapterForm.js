import { useState } from "react";
import ButtonApp from "../ButtonApp";
import TextBox from "../TextBox";
import Textinput from "../Textinput";
import SelectOption from "../course/SelectOption";
import DynamicChaptersForm from "./DynamicChaptersForm";

export default function ChapterForm({
  form: chapterForm,
  onAddChapter,
  onChangeForm,
  onChangeLesson,
  onAddLesson,
  onRemoveChapter,
  onRemoveLesson,
}) {
  return (
    <>
      {/* <pre>{JSON.stringify(...form)}</pre> */}
      <div className="space-y-6 flex flex-row border-primary700 py-10">
        <div className="space-y-4 w-full">
          <div className="header justify-between">
            {chapterForm?.map((chapter, index) => {
              return (
                <main key={index} className="mb-9">
                  <DynamicChaptersForm
                    value={chapter}
                    form={chapterForm[index]?.lessons}
                    onChange={onChangeForm}
                    chapterIndex={index}
                    index={index}
                    onAdd={onAddChapter}
                    onRemove={onRemoveChapter}
                    onChangeLesson={onChangeLesson}
                    onRemoveLesson={onRemoveLesson}
                    onAddLesson={onAddLesson}
                  />

                  {/* <ButtonApp onClick={() => onAddLesson(index)}>
                  Add Lesson
                </ButtonApp> */}
                </main>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
