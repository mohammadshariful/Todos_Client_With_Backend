import React from "react";
import SingleTodo from "./SingleTodo";

const Todos = () => {
  const todos = [
    {
      name: "sakib",
      description: "hello world",
    },
    {
      name: "sakib",
      description: "hello world",
    },
    {
      name: "sakib",
      description: "hello world",
    },
    {
      name: "sakib",
      description: "hello world",
    },
    {
      name: "sakib",
      description: "hello world",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
      {todos.map((todo) => (
        <SingleTodo />
      ))}
    </div>
  );
};

export default Todos;
