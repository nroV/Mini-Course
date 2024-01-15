import React, { useState } from "react";
import ButtonApp from "./ButtonApp";

export default function TableCourseData({
  data,
  category,
  onDelete,
  onEditing,
}) {
  const [chapters] = data?.map((course) => course.chapters);

  const [isEdit, setEdit] = useState(false);
  return (
    <table class="table-auto bg-white shadow-md rounded-lg overflow-hidden h-full m-10">
      <thead>
        <tr class="bg-primary700 text-primary300">
          {/* <th class="py-2 px-4 border">ID</th> */}
          <th class="py-2 px-4 border">Name</th>
          <th class="py-2 px-4 border">Summarizes</th>
          <th class="py-2 px-4 border">Category Id </th>
          <th class="py-2 px-4 border">Tag </th>
          <th class="py-2 px-4 border">Total Chapters</th>
          <th class="py-2 px-4 border">Total Lessons</th>
          <th class="py-2 px-4 border">Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((course) => {
          const categoryname = category?.find(
            (cate) => cate?.id === course?.category_id
          )?.name;

          return (
            <tr class="hover:bg-gray-100" key={course?.id}>
              {/* <td class="py-2 px-4 border">{course?.id}</td> */}
              <td class="py-2 px-4 border"> {course?.name}</td>
              <td class="py-2 px-4 border"> {course?.summary}</td>
              <td class="py-2 px-4 border">
               {categoryname}
              </td>
              <td class="py-2 px-4 border text-sm">
                {course?.tags?.map((tag,index) => 
                  <pre className="text-sm font-semibold" key={index}>#{tag} </pre>
                )}
              </td>
              <td class="py-2 px-4 border"> {course?.chapters?.length} </td>
              <td class="py-2 px-4 border">
                {course?.chapters?.reduce((sum, chapter) => {
                  return sum + chapter?.lessons?.length;
                }, 0)}
              </td>
              <td class="py-2 px-4 border  w-full flex justify-center gap-2">
                <ButtonApp
                  onClick={() => {
                    setEdit((pre) => !pre);

                    if (isEdit == false) {
                      onEditing(course?.id, !isEdit);
                      return;
                    }

                    onEditing(course?.id, !isEdit);
                    //true
                  }}
                >
                  Edit
                </ButtonApp>
                <ButtonApp
                  btnStyle={"bg-red-500"}
                  hoverStyle={"bg-blue-200"}
                  onClick={() => onDelete(course?.id)}
                >
                  Delete
                </ButtonApp>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// const chapterLength = chapters?.length;
// const lessonsLength = chapters?.reduce((sum, chapter) => {
//   console.log(chapter?.lessons?.length);
//   return sum + chapter?.lessons?.length;
// }, 0);
// const lessonLength = chapterLength
