import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SearchBar from "./SearchBar";
import SingleTodo from "./SingleTodo";

const Home = () => {
  const {
    data: todos,
    isLoading,
    refetch,
  } = useQuery("todos", () =>
    fetch("http://localhost:5000/todos").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-[90%] mx-auto">
      <SearchBar refetch={refetch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {todos?.map((todo) => (
          <SingleTodo key={todo._id} todo={todo} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Home;
