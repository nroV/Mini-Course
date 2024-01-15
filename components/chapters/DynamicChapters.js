// In addition to the array helpers, Formik state and helpers

import { Field, FieldArray, Form } from "formik";
import ButtonApp from "../ButtonApp";
import { uuidv4 } from "@/utils/generate";
import { CustomInputComponent } from "../CustomInputComponent";
import { LessonsForm } from "../lessons/LessonsForm";
import { DynamicLessons } from "../lessons/DynamicLessons";
import { CustomTextAreaInput } from "../CustomTextareaComponent";

// (values, touched, setXXX, etc) are provided through a `form`

// prop

export const DynamicChapters = (props) => {
  return (
    <>
      <div className="chapter space-y-6">
        <Field
          label="Chapter"
          name={`chapters.${props.chapterIndex}.name`}
          value={props.data?.name}
          index={props.chapterIndex}
          component={CustomInputComponent}
          placeholder="Chapter name"
        />
        <Field
          label="Summary Your Chapter"
          name={`chapters.${props.chapterIndex}.summary`}
          value={props.data?.summary}
          index={props.chapterIndex}
          component={CustomTextAreaInput}
          placeholder="Write a short summary to your Chapter"
        />
      </div>

      <div className="button my-7 space-x-2">
        <ButtonApp
          type="button"
          onClick={() => {
            if (props?.values?.chapters?.length == 1) {
              alert("You cannot delete the last Chapter!!!")
              return;
            }
            props.remove(props.chapterIndex);
          }}
          btnStyle={"bg-red-600"}
        >
          Delete
        </ButtonApp>
        {/* <ButtonApp
          onClick={() =>
            props.push({
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
          Add Chapter
        </ButtonApp> */}
      </div>
      <FieldArray name={`chapters.${props.chapterIndex}.lessons`}>
        {({ remove, push }) => {
          return (
            <div>
              {props?.values?.chapters[props.chapterIndex]?.lessons?.map(
                (lesson, lessonindex,arr) => {
                  return (
                    <>
                      <header className="flex justify-between">
                        <h1 className="text-2xl font-semibold">
                          Lesson {lessonindex + 1}
                        </h1>
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
                          Add Chapter
                        </ButtonApp>
                      </header>
                      <DynamicLessons
                        remove={remove}
                        push={push}
                        length = {arr?.length}
                        key={lessonindex}
                        chapterIndex={props.chapterIndex}
                        index={lessonindex}
                        data={lesson}
                      />
                    </>
                  );
                }
              )}
            </div>
          );
        }}
      </FieldArray>
    </>
  );
};
