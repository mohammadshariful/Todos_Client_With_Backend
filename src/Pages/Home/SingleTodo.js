import React from "react";

const SingleTodo = () => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
          Task: <span className="text-primary">Hello</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          nostrum, adipisci sunt sint expedita consectetur eligendi, eaque
          provident suscipit consequatur dolore amet laboriosam harum fugi
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary  btn-sm text-white ">Complete</button>
          <button class="btn btn-error btn-sm  text-white ">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
