import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Modal({ id, currentTitle, currentDescription }) {
  const [title, setTitle] = useState(currentTitle || "");
  const [description, setDescription] = useState(currentDescription || "");

  const handleUpdate = async () => {
    const updatedTask = {
      title,
      description,
    };

    try {
      await axios.put(`http://localhost:7000/task/${id}`, updatedTask);

      // Show success alert
      Swal.fire({
        title: "Task Updated!",
        text: "The task has been successfully updated.",
        icon: "success",
        confirmButtonText: "Okay",
      });

      const modal = document.getElementById(`my_modal_${id}`);
      modal.close();
    } catch (error) {
      // Show error alert
      const modal = document.getElementById(`my_modal_${id}`);
      modal.close();
      Swal.fire({
        title: "Error!",
        text: "There was an error updating the task. Please try again.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div>
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Task</h3>

          <div className="py-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full mb-4"
            />

            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div className="modal-action">
            <button className="btn" onClick={handleUpdate}>
              Update
            </button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
