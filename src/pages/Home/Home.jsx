import React, { useEffect, useState } from "react";
import Columns from "../../Component/Columns";
import { DndContext } from "@dnd-kit/core";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io('https://todo-server-3h3o.onrender.com'); 

export default function Home() {
  useEffect(() => {
    getAllTask();
    socket.on('taskAdded', (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    });

    socket.on('taskUpdated', (updatedTask) => {
        setTasks((prevTasks) => prevTasks.map((task) =>
            task.id === updatedTask.id ? { ...task, category: updatedTask.updatedTask.category } : task
        ));
    });

    return () => {
        socket.off('taskAdded');
        socket.off('taskUpdated');
    };
  }, []);

  const getAllTask = async () => {
    const res = await axios.get(
      "https://todo-server-3h3o.onrender.com/tasks?email=tanvirmahin607@gmail.com"
    );
    setTasks(res.data);
  };

  const columns = [
    {
      id: "todo",
      title: "Todo",
    },
    {
      id: "inProcess",
      title: "In Process",
    },
    {
      id: "done",
      title: "Done",
    },
  ];


  const [tasks, setTasks] = useState([]);

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newCategoryId = over.id;

    const updatedTasks = tasks.map((task) =>
      task._id.toString() === taskId.toString()
        ? { ...task, category: newCategoryId }
        : task
    );
    setTasks(updatedTasks);

    const updatedTask = updatedTasks.find(
      (task) => task._id.toString() === taskId.toString()
    );

    await axios.put(
      `https://todo-server-3h3o.onrender.com/tasks/${updatedTask._id}`,
      updatedTask
    );
  };

  return (
    <div className="flex items-start justify-center gap-10 mt-10">
      {/* done task */}
      <DndContext onDragEnd={handleDragEnd}>
        {columns.map((column) => (
          <Columns
            key={column.id}
            column={column}
            tasks={tasks.filter((item) => item.category === column.id)}
          />
        ))}
      </DndContext>
    </div>
  );
}
