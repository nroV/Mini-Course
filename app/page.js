"use client";

import Image from "next/image";
import Link from "next/link";
import LinkBar from "../components/LinkBar";
import HeadLine from "../components/HeadLine";
import CategorySection from "../components/category/CategorySection";
import CourseSection from "../components/course/CourseSection";
import { useState } from "react";
import { uuidv4 } from "../utils/generate";

import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const [listCategories, setCategories] = useState([
    {
      id: "12835ce6-163e-402b-b500-5651fd4d8091",
      name: "Mobile App",
      code: "111",
    },
    {
      id: "12835ce6-163e-402b-b500-5651fd4d8092",
      name: "Web Developing",
      code: "211",
    },
    {
      id: "12835ce6-163e-402b-b500-5651fd4d8093",
      name: "BackEnd",
      code: "311",
    },
  ]);

  const categorySlice = useSelector((store) => store.categoryReducer);

  const courseSlice = useSelector((store) => store.courseReducer);

  console.log(courseSlice);
  const [isEditCategory, setEditCategory] = useState(false);
  const [form, setForm] = useState({
    id: "",
    name: "",
    code: "",
  });

  const [data, setData] = useState([
    {
      id: 10,
      name: "The Baddy Course",
      category_id: "12835ce6-163e-402b-b500-5651fd4d8093",
      summary: "This is the best course",

      tags: ["Web", "Mobile", "Network", "IT", "Other"],
      chapters: [
        {
          id: 1,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
        {
          id: 2,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",

          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
        {
          id: 3,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      name: "The Awesome Course",
      category_id: "12835ce6-163e-402b-b500-5651fd4d8092",
      summary: "An amazing course for learners",
      tags: ["Web", "Mobile", "Network"],
      chapters: [
        {
          id: 2,
          name: "The Exciting Chapter",
          summary: "Get ready for an exciting journey",
          lessons: [
            {
              id: 2,
              name: "The Exciting Lesson",
              summary: "Discover new concepts and ideas",
            },
            {
              id: 3,
              name: "The Exciting Lesson",
              summary: "Discover new concepts and ideas",
            },
          ],
        },
        {
          id: 1,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
      ],
    },
    {
      id: 12,
      name: "The Coding Course",
      tags: ["Mobile", "Network", "IT", "Other"],
      category_id: "12835ce6-163e-402b-b500-5651fd4d8092",
      summary: "Unlock the world of coding",
      chapters: [
        {
          id: 3,
          name: "The Programming Chapter",
          summary: "Master the art of programming",
          lessons: [
            {
              id: 3,
              name: "The Coding Lesson",
              summary: "Hands-on coding experience",
            },
            {
              id: 4,
              name: "The Coding Lesson",
              summary: "Hands-on coding experience",
            },
          ],
        },
      ],
    },
    // ... add more courses as needed
  ]);

  const onEditCategory = (params) => {
    setEditCategory(params?.category?.id);
    if (isEditCategory === params?.category?.id) {
      setForm({
        id: "",
        name: "",
        code: "",
      });
      setEditCategory(false);
      return;
    }

    setForm({ ...params.category });
  };

  const onClearCategoryForm = () => {
    setEditCategory((pre) => !pre);
    setForm({
      id: "",
      name: "",
      code: "",
    });
  };

  //I did it

  return (
    <div className=" border-primary700 bg-primary300 ">
      <div className="link-course w-full justify-center gap-9 mb-11 shadow-lg shadow-slate-300">
        <CategorySection
          data={categorySlice.category}
          onClear={onClearCategoryForm}
          onEdit={onEditCategory}
          isEdit={isEditCategory}
          form={form}
        />
        <CourseSection
          category={listCategories}
          data={courseSlice.courses}
          setData={setData}
        />
      </div>
    </div>
  );
}
