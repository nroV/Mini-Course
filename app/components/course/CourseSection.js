import React, { useState } from "react";
import HeadLine from "../HeadLine";
import TableCourseData from "../TableCourseData";
import CourseForm from "./CourseForm";
import { uuidv4 } from "@/app/utils/generate";

export default function CourseSection({ category, data, setData }) {
  const [editForm, setEditForm] = useState({});

  const onSaveData = (payload, isEdit) => {
    if (isEdit == true) {
      setData((pre) =>
        pre.map((data) => {
          if (data.id === payload?.id) {
            data = payload;
          }
          return data;
        })
      );

      return;
    }
    setData((pre) => [...pre, payload]);
  };

  const onDeleteData = (id) => {
    setData((pre) => pre.filter((data) => data?.id !== id));
  };

  const onEditingCourse = (id, isEdit) => {

    if (isEdit == true) {
      const result = data?.find((course) => course.id === id);
      setEditForm(result);
      return;
    }

    setEditForm({});
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
          onDelete={onDeleteData}
          onEditing={onEditingCourse}
        />

        <CourseForm
          data={category}
          setData={setData}
          value={editForm}
          onSave={onSaveData}
        />
      </div>
    </div>
  );
}
