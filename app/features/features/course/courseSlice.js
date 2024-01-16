import { createSlice } from "@reduxjs/toolkit";
import { uuidv4 } from "@/utils/generate";

const value = {
  courses: [
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
  ],
};
const courseReducer = createSlice({
  initialState: value,
  name: "course",
  reducers: {
    addCourse(state, action) {
      console.log(action.payload);
      state.courses.push({
        ...action.payload.value,
        id: uuidv4(),
      });
    },
    removeCourse(state, action) {
   
      state.courses.splice(action.payload, 1);
    },
    updateCourse(state, action) {
      state.courses = state.courses.map((courses) => {
        if (courses.id === action.payload.id) {
            courses = action.payload.value;
        }
        return courses;
      });
    },
  },
});

export default courseReducer.reducer;
export const { addCourse,removeCourse,updateCourse } = courseReducer.actions;
