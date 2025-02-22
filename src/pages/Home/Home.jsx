import React, { useEffect, useState } from "react";
import Columns from "../../Component/Columns";
import { DndContext } from "@dnd-kit/core";
import axios from "axios";
import { io } from "socket.io-client";
import Swal from "sweetalert2";

const socket = io("http://localhost:7000");

export default function Home() {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks
  const getAllTask = async () => {
    try {
      const res = await axios.get(
        "http://localhost:7000/tasks?email=tanvirmahin607@gmail.com"
      );
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    getAllTask();

    // Socket listeners
    socket.on("taskAdded", (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    });

    socket.on("taskUpdated", (updatedTask) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === updatedTask._id
            ? { ...task, category: updatedTask.category }
            : task
        )
      );
    });

    socket.on("taskDeleted", (deletedTaskId) => {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task._id !== deletedTaskId)
      );
    });

    return () => {
      socket.off("taskAdded");
      socket.off("taskUpdated");
      socket.off("taskDeleted");
    };
  }, []);

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

  // Handle Drag End Event
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

    try {
      await axios.put(
        `http://localhost:7000/tasks/${updatedTask._id}`,
        updatedTask
      );
      socket.emit("taskUpdated", updatedTask); // Emit update event
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Handle Delete Task
  const handleDelete = (id) => {
    console.log("kam korer", id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:7000/tasks/${id}`);
          setTasks((prevTasks) =>
            prevTasks.filter((task) => task._id !== id)
          );
          socket.emit("taskDeleted", id); // Emit delete event
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting task:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the task. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="flex items-start justify-center gap-10 mt-10">
      <DndContext onDragEnd={handleDragEnd}>
        {columns.map((column) => (
          <Columns
            handleDelete={handleDelete}
            key={column.id}
            column={column}
            tasks={tasks.filter((item) => item.category === column.id)}
          />
        ))}
      </DndContext>
    </div>
  );
}
