import { useDraggable } from "@dnd-kit/core";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Task({ task, handleDelete }) {

  const [remainingTask, setRemainingTask] = useState(task)

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  // const handleDelete = (id) => {
  //   console.log(id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const res = await axios.delete(
  //           `http://localhost:7000/tasks/${id}`
  //         );
  //         console.log(res.data);
  //         Swal.fire({
  //           title: "Deleted!",
  //           text: "Your task has been deleted.",
  //           icon: "success",
  //         });
  //       } catch (error) {
  //         console.error("Error deleting task:", error);
  //         Swal.fire({
  //           title: "Error!",
  //           text: "Failed to delete the task. Please try again.",
  //           icon: "error",
  //         });
  //       }
  //     }
  //   });
  // };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="card w-96 bg-base-100 card-md shadow-sm text-black border-black border"
    >
      {/* Draggable Area */}
      <div {...listeners} {...attributes} className="cursor-move">
        <div className="card-body">
          <h2 className="card-title">{task.name}</h2>
          <p>{task.description}</p>
        </div>
      </div>
      {/* Non-Draggable Buttons */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <button className="btn">Update</button>
        <button
          onClick={() => handleDelete(task._id)}
          className="btn btn-error"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
