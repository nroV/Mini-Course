import React, { useState } from "react";
import HeadLine from "../HeadLine";
import TableCourseData from "../TableCourseData";
import CourseForm from "./CourseForm";
import { uuidv4 } from "@/utils/generate";

export default function CourseSection({ category, data, setData }) {
  const [editForm, setEditForm] = useState({});
  const [isCourseEdit, setCourseEdit] = useState(false);

  const onClearCourseForm = () => {
    setEditForm({});
    setCourseEdit(false);
  };

  const onEditingCourse = (id) => {

    setCourseEdit(id);
 
    if (isCourseEdit === id) {
      setEditForm({});
      setCourseEdit(false);
      return;
    }
    const result = data?.find((course) => course.id === id);
    setEditForm(result);


    // setCourseEdit(pre=>!pre)
    // if (isCourseEdit === false)

    // {
    //   const result = data?.find((course) => course.id === id);
    //   setEditForm(result);

    //   return;
    // }
    // setEditForm({});
  };

  return (
    <div className=" border-primary700">
      <HeadLine> Courses</HeadLine>
      <div
        className="link-course flex w-full  gap-9 flex-col
        mb-16 "
      >
        <TableCourseData
          data={data}
          category={category}
          onEditing={onEditingCourse}
          onClearCourseForm={onClearCourseForm}
        />

        <CourseForm
          data={category}
          setData={setData}
          value={editForm}
          onClear={onClearCourseForm}
        />
      </div>
    </div>
  );
}
