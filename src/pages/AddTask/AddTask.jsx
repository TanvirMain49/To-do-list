import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
    const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const task = {
      email: "tanvirmahin607@gmail.com",
      name: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value
    };
    const {data} = await axios.post('http://localhost:7000/tasks', task)
    console.log(data);
    navigate('/')
  };

  return (
    <form
      onSubmit={handleSubmit}
      class="space-y-4 font-[sans-serif] max-w-md mx-auto"
    >
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        class="px-4 py-3 bg-gray-100 w-full text-sm outline-none rounded"
      />

      <textarea
        placeholder="Type Message"
        name="description"
        class="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded"
        rows="4"
      ></textarea>
      <select
      name="category"
      defaultValue="todo" className="select">
        <option disabled={true}>Todo</option>
        <option value="todo">To do</option>
        <option value="inProcess">In process</option>
        <option value="done">Done</option>
      </select>

      <input
        type="submit"
        class="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-black text-white rounded hover:bg-blue-600"
      />
    </form>
  );
}
