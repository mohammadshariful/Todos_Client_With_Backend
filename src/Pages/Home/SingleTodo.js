import React from "react";
import { toast } from "react-toastify";

const SingleTodo = ({ todo, refetch }) => {
  const { _id, name, description, isComplete } = todo;

  //handle delete
  const handleDelete = (id) => {
    const process = window.confirm("Are You sure want to delete?");
    if (process) {
      const url = `http://localhost:5000/todos/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Delete Successful", {
              position: toast.POSITION.TOP_CENTER,
            });
            refetch();
          }
        });
    }
  };
  // handle task completed
  const handleTaskComplete = (id) => {
    const url = `http://localhost:5000/todos/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Task Completed", {
            position: toast.POSITION.TOP_CENTER,
          });
          refetch();
        }
      });
  };
  return (
    <div className="card w-72 lg:w-96  lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-lg font-bold">
          Task: <span className="text-primary">{name}</span>
        </h2>
        <p className={isComplete && "line-through"}>{description}</p>
        <div className="card-actions justify-end">
          <button
            disabled={isComplete}
            onClick={() => handleTaskComplete(_id)}
            className="btn btn-primary  btn-sm text-white "
          >
            Complete
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error btn-sm  text-white "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
