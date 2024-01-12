import React from "react";
import HeadLine from "../HeadLine";
import TableData from "../TableCategoryData";
import CategoryForm from "./CategoryForm";

export default function CategorySection({
  data = [],
  onSave,
  onDelete,
  form,
  onEdit,
  setEdit
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
          onDelete={onDelete}
          onSave={onSave}
          onEdit={onEdit}
          setEdit={setEdit}
        />

        <CategoryForm onSave={onSave} value={form} />
      </div>
    </div>
  );
}
