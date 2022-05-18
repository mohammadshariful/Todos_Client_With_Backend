import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../Firebase.init";
import Loading from "../Shared/Loading";
import SearchBar from "./SearchBar";
import SingleTodo from "./SingleTodo";

const Home = () => {
  const [user] = useAuthState(auth);
  const url = `https://mytodoapp2022.herokuapp.com/todos?email=${user?.email}`;
  const {
    data: todos,
    isLoading,
    refetch,
  } = useQuery("todos", () => fetch(url).then((res) => res.json()));

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
