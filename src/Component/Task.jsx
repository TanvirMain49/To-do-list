import { useDraggable } from "@dnd-kit/core";
import React from "react";

export default function Task({task}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id:task._id
  })

  const style=transform ? 
    {
      transform:`translate(${transform.x}px, ${transform.y}px) `
    }
    : undefined

  return (
    <div  
    ref={setNodeRef}
    {...listeners}
    {...attributes}
    style={style}
     className="card w-96 bg-base-100 card-md shadow-sm text-black border-black border">
      <div className="card-body">
        <h2 className="card-title">{task.title}</h2>
        <p>
          {
            task.description
          }
        </p>
      </div>
    </div>
  );
}
