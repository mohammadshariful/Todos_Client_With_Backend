import React from "react";
import { useForm } from "react-hook-form";
const SearchBar = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const todo = {
      name: data.name,
      description: data.description,
    };
    //send data server
    const url = `http://localhost:5000/todos`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 ">
        <div className="card-body">
          <h2 className="text-center text-2xl text-primary">
            My Todos Application
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Task Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Task"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Task is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Your Description"
                className="textarea  textarea-bordered w-full max-w-xs"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
              ></textarea>
              <label className="label">
                {errors?.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn btn-primary w-full max-w-xs text-white"
              type="submit"
              value="Add Task"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
