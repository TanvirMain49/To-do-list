import { useDraggable } from "@dnd-kit/core";
import Modal from "./Modal";

export default function Task({ task, handleDelete }) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

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
        <button 
        onClick={() => document.getElementById(`my_modal_${task._id}`).showModal()}
        className="btn">Update</button>
        <button
          onClick={() => handleDelete(task._id)}
          className="btn btn-error"
        >
          Delete
        </button>
      </div>
      <Modal id={task._id} currentTitle={task.name}  currentDescription={task.description}/>
    </div>
  );
}
