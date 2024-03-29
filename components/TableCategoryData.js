import React, { useState } from "react";
import ButtonApp from "./ButtonApp";
import { useSelector, useDispatch } from "react-redux";
import { removeCategory } from "@/app/features/features/category/categorySlice";
export default function TableData({ data, onDelete, onEdit  ,isEdit }) {

  const dispatch = useDispatch()
  return (
    <table class="table-auto bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr class="bg-primary600 text-primary300">
          <th class="py-2 px-4 border">ID</th>
          <th class="py-2 px-4 border">Name</th>
          <th class="py-2 px-4 border">Code</th>
          <th class="py-2 px-4 border">Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((category,index) => {
          return (
            <>
              <tr class="hover:bg-gray-100 text-center" key={category?.id}>
                <td class="py-2 px-4 border">{category?.id}</td>
                <td class="py-2 px-4 border"> {category?.name}</td>
                <td class="py-2 px-4 border"> {category?.code}</td>
                <td class="py-2 px-4 border flex gap-2 justify-center">
                  <ButtonApp 
                  btnStyle="bg-primary600"
                    onClick={()=>{    
                      onEdit({
                        category,
                        isEdit:!isEdit
                       })
                    }}
                  >Edit</ButtonApp>
                  <ButtonApp btnStyle={"bg-red-500"} hoverStyle={"bg-blue-200"}
                  
                  onClick={()=>dispatch(removeCategory(index))}
                  >
                    Delete
                  </ButtonApp>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}
