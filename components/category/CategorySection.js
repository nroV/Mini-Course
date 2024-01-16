import React from "react";
import HeadLine from "../HeadLine";
import TableData from "../TableCategoryData";
import CategoryForm from "./CategoryForm";

export default function CategorySection({
  data = [],
  form,
  onEdit,
  setEdit,
  isEdit,
  onClear
}) {


  
  return (
    <div className=" border-primary500">
      <HeadLine headerColor="bg-primary600">Categories </HeadLine>
      <div
        className="link-course flex w-full  gap-9 flex-col
        mb-16 "
      >
        <TableData
          data={data}
          onEdit={onEdit}
          setEdit={setEdit}
          isEdit={isEdit}
        />

        <CategoryForm value={form} onClear ={onClear} />
      </div>
    </div>
  );
}
