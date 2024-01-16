import { createSlice } from "@reduxjs/toolkit";
import { uuidv4 } from "@/utils/generate";

const value = {
  category: [
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
  ],
};
const categoryReducer = createSlice({
  initialState: value,
  name: "category",
  reducers: {
    //action creator

    addCategory(state, action) {

      state.category.push({
        ...action.payload,
        id: uuidv4(),
      });
    },
    removeCategory(state, action) {
      state.category.splice(action.payload, 1);
    },
    updateCategory(state, action) {
      state.category = state.category.map((category) => {
        if (category.id === action.payload.id) {
          category = action.payload;
        }
        return category;
      });
    },
  },
});

export default categoryReducer.reducer;

export const { addCategory, removeCategory, updateCategory } =
  categoryReducer.actions;

