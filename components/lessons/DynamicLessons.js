// In addition to the array helpers, Formik state and helpers

import { Field, FieldArray, Form } from "formik";
import ButtonApp from "../ButtonApp";
import { uuidv4 } from "@/utils/generate";
import { CustomInputComponent } from "../CustomInputComponent";
import { LessonsForm } from "../lessons/LessonsForm";
import { CustomTextAreaInput } from "../CustomTextareaComponent";

// (values, touched, setXXX, etc) are provided through a `form`

// prop

export const DynamicLessons = (props) => {
  console.log(props);
  return (
    <>
      <div className="chapter space-y-6">
        <Field
          label="Lesson Name"
          name={`chapters.${props.chapterIndex}.lessons.${props.index}.name`}
          value={props.data?.name}
          //   index={props.chapterIndex}
          component={CustomInputComponent}
          placeholder="Enter Lesson Name"
        />
        <Field
          label="Summary Your Course"
          name={`chapters.${props.chapterIndex}.lessons.${props.index}.summary`}
          value={props.data?.summary}
          //   index={props.chapterIndex}
          component={CustomTextAreaInput}
          placeholder="Enter Lesson Summary"
        />
      </div>

      <div className="button my-7 space-x-2">
        <ButtonApp
          type="button"
          onClick={() => {
            if (props.length === 1) {
              alert("You cannot delete the last Chapter!!!");
              return;
            }
            props.remove(props.index);
          }}
          btnStyle={"bg-red-600"}
        >
          Delete Lesson
        </ButtonApp>
        <ButtonApp
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
          Add Lesson
        </ButtonApp>
      </div>
    </>
  );
};
