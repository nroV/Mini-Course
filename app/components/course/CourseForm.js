import React, { useEffect, useMemo, useState } from "react";
import Textinput from "../Textinput";
import ButtonApp from "../ButtonApp";
import SelectOption from "./SelectOption";
import TextBox from "../TextBox";
import ChapterForm from "../chapters/ChapterForm";
import { uuidv4 } from "@/app/utils/generate";

export default function CourseForm({ data, onSave, value }) {
  const [form, setForm] = useState({
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
  });
  const isEmpty = (value) =>
    value === null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0);

  const validateObject = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (isEmpty(value)) {
        return false;
      }

      if (typeof value === "object" && !validateObject(value)) {
        return false;
      }
    }
    return true;
  };

  const onSaveCourse = () => {
    if (!validateObject(form)) {
      alert("Please fill in Courses Form");
      return;
    }
    setForm({
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
    });
    if (form?.id) {
      onSave({ ...form }, true);
      return;
    }
    onSave({ ...form, id: uuidv4() }, false);
  };

  useEffect(() => {
    if (value?.id) {
      setForm(value);
      return;
    }
    setForm({
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
    });
  }, [value]);
  console.log(value);

  // console.log(formChapter);
  const onChangeCourse = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const onAddChapter = (chapterIndex) => {
    console.log(chapterIndex);

    const result = { ...form };

    result.chapters.push({
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
    setForm(result);
  };
  const onRemoveChapter = (chapterIndex) => {
    console.log(chapterIndex);
    const result = { ...form };

    if (result?.chapters?.length === 1) {
      alert("There is no chapters left !!! you cannot delete any more chapter");
      return;
    }
    result?.chapters.splice(chapterIndex, 1);
    setForm(result);
  };

  const onChangeChapter = (e, index) => {
    const { name, value } = e.target;
    console.log("chapter index", index);

    const result = form?.chapters;

    result[index][name] = value;

    setForm((pre) => {
      //refactor
      return {
        ...pre,
        chapters: result,
      };
    });
  };

  const onAddLesson = (chapterIndex) => {
    console.log(form, chapterIndex);
    const result = { ...form };
    console.log(result?.chapters);
    result?.chapters[chapterIndex].lessons?.push({
      id: uuidv4(),
      name: "",
      summary: "",
    });

    setForm(result);
  };
  const onRemoveLesson = (chapterIndex, index) => {
    console.log(chapterIndex);
    const result = { ...form };

    if (result.chapters[chapterIndex].lessons?.length === 1) {
      alert("There is no lesson left !!! you cannot delete any more lesson");
      return;
    }
    result.chapters[chapterIndex].lessons?.splice(index, 1);
    setForm(result);
  };

  const onChangeLesson = (e, index, chapterIndex) => {
    // we need chapters index, and the lesson index

    console.log(chapterIndex, index);
    const { name, value } = e.target;

    const arr = { ...form };

    arr.chapters[chapterIndex].lessons[index][name] = value;
    setForm(arr);
  };

  console.log(form);

  return (
    <div className="space-y-6 flex flex-row mx-20 ">
      <form className="space-y-4 w-full">
        <div className="new-course ">
          <div
            className="px-10 py-10 border-primary700 rounded-xl bg-slate-200 shadow-lg
     shadow-slate-300 space-y-7"
          >
            <div className="header flex justify-between">
              <h1 className="text-xl font-bold">New Course</h1>
              <div className="flex gap-2">
                <ButtonApp onClick={onSaveCourse} btnStyle={"bg-primary700"}>
                  {form?.id ? "Update Course" : "Save"}
                </ButtonApp>
                <ButtonApp
                  onClick={() =>
                    setForm({
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
                    })
                  }
                  btnStyle={"bg-primary500"}
                >
                  Reset
                </ButtonApp>
              </div>
            </div>

            <Textinput
              label="Course"
              placeholder="Enter Course Name"
              name={"name"}
              onChangeHandler={onChangeCourse}
              value={form?.name}
            />
            <SelectOption
              data={data}
              onChangeHandler={onChangeCourse}
              name={"category_id"}
              value={form?.category_id}
            />

            <TextBox
              placeholder="Write a short summary to your course"
              name={"summary"}
              onChangeHandler={onChangeCourse}
              value={form?.summary}
            />
          </div>
          {/* <div className="flex gap-2">
          <ButtonApp onClick={() => onRemove(chapterIndex)} btnStyle={"bg-red-600"}>
            Remove Chapter
          </ButtonApp>
          <ButtonApp onClick={() => onAdd(chapterIndex)}>Add Chapter</ButtonApp>
        </div> */}
          <ChapterForm
            onAddChapter={onAddChapter}
            form={form?.chapters}
            onChangeForm={onChangeChapter}
            onAddLesson={onAddLesson}
            onRemoveLesson={onRemoveLesson}
            onChangeLesson={onChangeLesson}
            onRemoveChapter={onRemoveChapter}
          />
        </div>
      </form>
    </div>
  );
}
