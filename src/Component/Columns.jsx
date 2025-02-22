import React from "react";
import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";

export default function Columns({ column, tasks, handleDelete }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <div ref={setNodeRef} className="shadow-md space-y-6 rounded-xl p-6">
      <h1 className="text-2xl font-bold text-center mb-4 text-black">
        {column.title}
      </h1>
      {tasks.map((item) => (
        <Task key={item._id} task={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
