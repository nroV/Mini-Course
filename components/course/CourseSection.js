import React, { useState } from "react";
import HeadLine from "../HeadLine";
import TableCourseData from "../TableCourseData";
import CourseForm from "./CourseForm";
import { uuidv4 } from "@/utils/generate";

export default function CourseSection({ category, data, setData }) {
  const [editForm, setEditForm] = useState({});
  const [isCourseEdit,setCourseEdit] = useState(false)
 


  const onSaveData = (payload, isEdit) => {
    console.log(payload)


    if (isEdit == true) {
      
      setData((pre) =>
        pre.map((data) => {
          if (data.id === payload?.id) {
            data = payload;
          }
          return data;
        })
      );
      setEditForm({})
      setCourseEdit(false)

      return;
    }
    setData((pre) => [...pre, {
      ...payload,
      id:uuidv4()
    }]);
  };

  const onDeleteData = (id) => {
    setData((pre) => pre.filter((data) => data?.id !== id));
  };

  const onEditingCourse = (id) => {

    console.log(isCourseEdit)
    setCourseEdit(pre=>!pre)
    if (isCourseEdit === false) 
    
    {
  
      const result = data?.find((course) => course.id === id);
      setEditForm(result);
   
 
      return;
    }
    // setCourseEdit(false)
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
