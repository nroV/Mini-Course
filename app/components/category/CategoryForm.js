import React, { useEffect, useState } from "react";
import Textinput from "../Textinput";
import ButtonApp from "../ButtonApp";

export default function CategoryForm({ onSave, value }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    code: "",
  });

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSaveCategory = (e, params) => {
    e.preventDefault();

    if (!form?.name || !form?.code) {
      alert("Please fill in Category Form");
      return;
    }
    setForm({ name: "", code: "" });
    onSave(form, params);
  };

  useEffect(() => {
    if (value) {
      setForm(value);
      return;
    }
    setForm({ name: "", code: "" });
  }, [value]);

  return (
    <div className="space-y-6 flex flex-row mx-20">
      <form className="space-y-4 w-full">
        <h1 className="text-xl font-bold">New Categories</h1>

        <Textinput
          label="Categorys"
          name="name"
          placeholder="Enter Category Name"
          value={form.name}
          onChangeHandler={onChange}
        />

        <Textinput
          label="Code"
          value={form.code}
          placeholder="Enter Category Code"
          name="code"
          onChangeHandler={onChange}
        />
        <ButtonApp
             btnStyle="bg-primary600"
          onClick={(e) =>
            value?.id ? onSaveCategory(e, true) : onSaveCategory(e, false)
          }
        >
          {value?.id ? "Update" : "Save"}
        </ButtonApp>
      </form>
    </div>
  );
}
